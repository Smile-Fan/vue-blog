<template>
  <div class="menuList-container">
    <el-row class="menu-list">
      <el-col :span="24">
        <el-avatar
          :src="require('@/assets/Avatar.png')"
          :size="120"
        ></el-avatar>
      </el-col>
      <el-col>
        <p class="blogTitle">浅忆de博客</p>
        <p class="mottoTitle">永远相信美好的事情即将发生</p>
      </el-col>
      <el-col :span="24">
        <span>主题切换：</span>
        <el-switch
          v-model="value"
          :active-icon-class="moon"
          :inactive-icon-class="sun"
          @change="handleClick"
        >
        </el-switch>
      </el-col>
      <el-col>
        <el-row class="router-text">
          <el-col :span="24" class="list router-home">
            <span><router-link to="/all">首页</router-link></span>
          </el-col>
          <el-col :span="24" class="list router-technology">
            <span><router-link to="/notes">技术笔记</router-link></span>
          </el-col>
          <el-col :span="24" class="list router-trap">
            <span><router-link to="/log">踩坑日志</router-link></span>
          </el-col>
          <el-col :span="24" class="list router-essay">
            <span><router-link to="/diary">随笔杂谈</router-link></span>
          </el-col>
          <el-col :span="24" class="list router-about">
            <span><router-link to="/about">关于我</router-link></span>
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <div class="contact">
          <span class="iconfont">&#xe619;</span
          ><span class="iconfont">&#xea0a;</span
          ><span class="iconfont">&#xe763;</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      sun: "el-icon-sunny",
      moon: "el-icon-moon",
    };
  },
  methods: {
    handleClick() {
      this.$emit("themeColorChange", this.value);
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 2594120 */
  src: url("//at.alicdn.com/t/font_2594120_icp7ei5806j.woff2?t=1622882331273")
      format("woff2"),
    url("//at.alicdn.com/t/font_2594120_icp7ei5806j.woff?t=1622882331273")
      format("woff"),
    url("//at.alicdn.com/t/font_2594120_icp7ei5806j.ttf?t=1622882331273")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 28px;
  margin: 0 15px;
}
.menu {
  position: absolute;
  left: 0;
  top: -20px;
  width: 65px;
  height: 25px;
  cursor: pointer;
  line-height: 25px;
  text-align: center;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.switch {
  font-size: 25px;
}
.menu-list {
  margin-top: 100px;
  el-col {
    margin: 10px 5px;
  }
  .blogTitle {
    font-size: 18px;
    color: blueviolet;
  }
  .mottoTitle {
    font-size: 14px;
    color: #ccc;
  }
  .router-text {
    margin-top: 30px;
    .list {
      font-size: 18px;
      padding: 15px 10px;
      cursor: pointer;
      box-sizing: border-box;
      span {
        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 3px;
        }
        &:hover {
          border-bottom: 2px solid #e0ffff;
          // border-
          // transition: border 1s;
          color: mediumorchid;
          border-width: 100%;
        }
      }
    }
  }
  .contact {
    margin-top: 50px;
  }
}
</style>