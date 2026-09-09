<template>
  <div>
    This is new page
  </div>
</template>

<script>
/**
 * 
 * 本地存储: 存储在浏览器中
 * 
 * 1. sessionStorage
 *  (1) 数据不能跨域访问
 *  (2) sessionStorage.setItem("key", "value") 存数据
 *  (3) sessionStorage.getItem("key") 取数据
 *  (4) sessionStorage.removeItem("key") 删除数据
 *  (5) sessionStorage.clear() 清空
 *  (6) 不参与前后端请求
 * 
 * 
 * 2. localStorage
 *  (1) 数据不能跨域访问
 *  (2) localStorage.setItem("key", "value") 存数据
 *  (3) localStorage.getItem("key") 取数据
 *  (4) localStorage.removeItem("key") 删除数据
 *  (5) localStorage.clear() 清空
 *  (6) 不参与前后端请求
 * sessionStorage 和 localStorage 容量5Mb左右，容量有限，不适用于页面之间传值
 * sessionStorage 的有效期仅保持在当前页面，关闭当前会话页或则和浏览器之后失效
 * localStorage的有效期是在不进行手动删除的情况下是一直有效的
 * 
 * 
 * 3. cookie
 * (1) 数据不能跨域访问
 * (2) 创建document.cookie="key=value"
 * (3) 读取document.cookie 返回key=value;key=value形式的字符串
 * (4) 删除 document.cookie="key=value;expires=日期对象"
 * (5) 容量4kb
 * (6) 会参与前后端的请求， 一般在请求头中携带
 */
export default({
  created() {
    localStorage.setItem("name1", "zhangsan");

    // cookie要设置有效期，下面设置有效期3天
    let d = new Date();
    let days = 3;
    d.setDate(d.getDate() + days);
    document.cookie = "name=zhangsan;expires="+d;
    console.log(document.cookie)

    // 删除cookies，通过直接设置让expires过期
    d.setDate(d.getDate() - 1);
    document.cookie="name=zhangsan;expires="+d;
  }
})
</script>