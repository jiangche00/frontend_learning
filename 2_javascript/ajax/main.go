package main

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

type Message1 struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

func main() {
	db, err := gorm.Open(sqlite.Open("geo.db"), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	r := gin.Default()
	// CORS, add "Access-Control-Allow-Origin: *" into the http response header, in order to let the browser accept the response sent from the server
	// r.Use(cors.Default())
	// CORS, add "Access-Control-Allow-Origin: "
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://127.0.0.1:5500"}, // frontend origins
	}))
	// Serve static files(html, css, js, ...)
	r.Use(static.Serve("/", static.LocalFile("static", false)))
	// Serve API group
	api := r.Group("/api")
	{
		api.GET("/hello", func(c *gin.Context) {
			username := c.DefaultQuery("username", "")
			password := c.DefaultQuery("password", "")
			if username == "" && password == "" {
				c.String(http.StatusOK, "Hello from Gin backend!")
			} else {
				c.String(http.StatusOK, fmt.Sprintf("username: %s, password: %s", username, password))
			}
		})
		api.POST("/hobby", func(c *gin.Context) {
			hobby := c.PostForm("hobby")
			c.String(http.StatusOK, hobby)
		})
		api.GET("/user", func(c *gin.Context) {
			c.JSON(http.StatusOK, Message1{
				Name: "zhangsan",
				Age:  18,
			})
		})
		api.GET("/province", func(c *gin.Context) {
			var result []string
			db.Raw(`select distinct(hs_province_name) from province;`).Scan(&result)
			c.String(http.StatusOK, strings.Join(result, ","))
		})
		api.POST("/city", func(c *gin.Context) {
			province := c.PostForm("province")
			var result []string
			db.Raw(`SELECT c.city_name FROM city AS c JOIN province AS p ON c.province_code = p.hs_province_code WHERE p.hs_province_name = ?;`, province).Scan(&result)
			c.String(http.StatusOK, strings.Join(result, ","))
		})
		api.POST("/area", func(c *gin.Context) {
			province := c.PostForm("province")
			city := c.PostForm("city")
			var result []string
			db.Raw(`SELECT a.area_name FROM area AS a JOIN city AS c ON a.city_code = c.city_code JOIN province AS p ON c.province_code = p.hs_province_code WHERE p.hs_province_name = ? AND c.city_name = ?;`, province, city).Scan(&result)
			c.String(http.StatusOK, strings.Join(result, ","))
		})
	}
	// Start server
	r.Run(":8888")
}
