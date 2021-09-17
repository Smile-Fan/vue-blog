<template>
  <div id="app">
    <fullPage @scrolling="scrolling" />
    <Layout>
      <template #left>
        <el-col :xs="0">
          <menuList class="leftMenu" @themeColorChange="themeColorChange" />
        </el-col>
        <el-col class="hidden-md-and-up" :span="2">
          <i class="el-icon-s-operation menu" @click="drawer = true"></i>
        </el-col>
        <el-col>
          <el-drawer
            :visible.sync="drawer"
            :direction="direction"
            size="360px"
            class="drawer"
            :class="!drawer ? 'active' : ''"
            @close="closeDrawer"
          >
            <menuList @themeColorChange="themeColorChange" />
          </el-drawer>
        </el-col>
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </Layout>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import fullPage from "@/components/fullPage";
import menuList from "@/components/menuList";
import girl from "./util/canvasGirl.js";
// import $ from "jquery.min.js";
import { themeColor } from "@/util/themeColor.js";
// import showPage from "@/components/showPage";
import Layout from "@/components/Layout";
import canvas from "@/util/canvas.js";
export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",
    };
  },
  name: "App",
  components: {
    fullPage,
    // showPage,
    Layout,
    menuList,
  },
  mounted() {
    //先关闭，影响性能
    canvas();
    //尺寸改变重新绘制
    window.onresize = () => {
      canvas();
    };
    girl();
  },
  methods: {
    scrolling(dom) {
      document.documentElement.scrollTop = dom.clientHeight;
    },
    themeColorChange(value) {
      themeColor(value);
    },
  },
};
</script>

<style lang="less">
@import "./styles/global.less";
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  #canvas {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .leftMenu {
    width: 80%;
    max-width: 300px;
    min-width: 150px;
    height: 100%;
  }
  .menu {
    font-size: 28px;
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 10;
  }
  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transition: left 0.5s 0s;
  }
  .active {
    left: -500px;
  }
}
</style>