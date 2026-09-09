<template>
  <div>
    <!-- 本月进件, 本月放款, 累计进件, 累计放款 -->
    <el-row :gutter="24">
      <el-col :span="6">
        <el-card shadow="always" :body-style="{ padding: '10px' }" class="in">
          <div style="float: left">
            <p>本月进件</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.12%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" :body-style="{ padding: '10px' }" class="out">
          <div style="float: left">
            <p>本月放款(元)</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +1.25%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-money ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="always"
          :body-style="{ padding: '10px' }"
          class="allin"
        >
          <div style="float: left">
            <p>累计进件</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +11.48%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-date ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="always"
          :body-style="{ padding: '10px' }"
          class="allout"
        >
          <div style="float: left">
            <p>累计放款</p>
            <p style="font-weight: bold">923380079</p>
            <p>
              -2.06%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-coin ico"></i>
          <div style="clear: both"></div>
        </el-card>
      </el-col>
    </el-row>
    <!-- echarts绘图 2个 -->
    <el-row :gutter="24">
      <!-- 左边图占18/24 -->
      <el-col :span="18">
        <!-- 图放到el-card容器里面 -->
        <el-card :body-style="{ padding: '10px' }">
          <!-- 图表标题 -->
          <div slot="header">进件统计分析</div>
          <!-- 图表内容 -->
          <div style="height: 240px" ref="analysis"></div>
        </el-card>
      </el-col>
      <!-- 右边图占6/24 -->
      <!-- 当前数据为静态，实际项目中应为动态获取 -->
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px' }">
          <div slot="header">进件统计分析</div>
          <div style="height: 240px" ref="analysis2"></div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 时间线 和 日历 -->
    <el-row :gutter="24">
      <!-- 时间线 -->
      <!-- 当前数据为静态, 实际项目中应为动态获取 -->
      <el-col :span="12">
        <el-card style="height: 700px;">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <!-- 日历 -->
      <el-col :span="12">
        <el-card>
          <el-calendar v-model="today"></el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { Api } from "@/utils/api";
export default {
  data() {
    return {
      lineChartXAxisData: [],
      lineChartSeriesData: [],
      observers: [],
      today: new Date(),
    };
  },
  created() {},
  // 画图时要获取dom元素所以需要在mounted里面调用画图
  mounted() {
    // line chart绘图
    this.drawLineChart();
    // pie chart绘图
    this.drawPieChart();
  },
  beforeDestroy() {
    this.observers.forEach((observer) => observer.disconnect());
  },
  methods: {
    async drawLineChart() {
      try {
        const { data } = await Api.get("/linechart", {});
        this.lineChartXAxisData = Object.keys(data);
        this.lineChartSeriesData = Object.values(data);
        // 初始化一个容器, 在vue里面用ref来获取dom对象
        const lineChart = echarts.init(this.$refs.analysis);
        // 配置项, 到echarts官网示例里面找到想要画的图，点进去把代码复制过来再改改就行
        const option = {
          // 把动画效果关了
          animation: false,
          // grid
          grid: {
            top: 0,
            left: "5%",
            right: "5%",
            bottom: 0,
            containLabel: false,
          },
          // x轴
          xAxis: {
            type: "category",
            data: this.lineChartXAxisData,
            boundaryGap: false,
          },
          // y轴
          yAxis: {
            type: "value",
          },
          // 数据
          series: [
            {
              data: this.lineChartSeriesData,
              type: "line",
              smooth: true,
              // 设置颜色渐变
              areaStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4f88ff", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "white", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          ],
        };
        // setOption生成图
        lineChart.setOption(option);
        // 设置随浏览器窗口变化而变化
        const observer = new ResizeObserver(() => {
          lineChart.resize();
        });
        observer.observe(this.$refs.analysis);
        this.observers.push(observer);
      } catch (error) {
        console.log(error);
      }
    },
    drawPieChart() {
      // 初始化一个容器, 在vue里面用ref来获取dom对象
      const pieChart = echarts.init(this.$refs.analysis2);
      // 配置项, 到echarts官网示例里面找到想要画的图，点进去把代码复制过来再改改就行
      const option = {
        // 把动画效果关了
        animation: false,
        // grid
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: false,
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "1%",
          width: "100%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            center: ["50%", "60%"],
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      };
      // setOption生成图
      pieChart.setOption(option);
      // 设置随浏览器窗口变化而变化
      const observer = new ResizeObserver(() => {
        pieChart.resize();
      });
      observer.observe(this.$refs.analysis2);
      this.observers.push(observer);
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
}

.in,
.out,
.allin,
.allout {
  background-color: #4775f1;
  color: #fff;
  .ico {
    font-size: 70px;
    float: right;
  }
}
.out {
  background-color: #fc5e5e;
}
.allin {
  background-color: #843cf8;
}
.allout {
  background-color: #f59f1d;
}
.dark {
  .in,
  .out,
  .allin,
  .allout {
    background-color: #4775f1;
  }
  .out {
    background-color: #fc5e5e;
  }
  .allin {
    background-color: #843cf8;
  }
  .allout {
    background-color: #f59f1d;
  }
}
</style>