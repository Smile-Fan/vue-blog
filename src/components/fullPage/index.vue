<template>
  <div class="full-page-container" ref="fullPage">
    <el-avatar :src="require('@/assets/Avatar.png')" :size="120"></el-avatar>
    <div class="text">
      <p :class="this.active ? 'active-text' : ''" class="blog-name">
        浅忆de博客
      </p>
      <p class="motto" :class="this.active ? 'active-text' : ''">
        永远相信美好的事情即将发生
      </p>
    </div>
    <el-image :src="require('@/assets/bg12.jpg')" class="bg-img"></el-image>
    <button @click="clickBtn" style="z-index: 2">点击变化</button>
    <i class="el-icon-arrow-down down-img" @click="scrolling"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  computed: {
    active() {
      return this.flag;
    },
  },
  mounted() {
    this.$refs.fullPage.style.width =
      document.documentElement.clientWidth + "px";
    this.$refs.fullPage.style.height =
      document.documentElement.clientHeight + "px";
  },
  methods: {
    clickBtn() {
      this.flag = true;
    },
    scrolling() {
      this.$emit("scrolling", this.$refs.fullPage);
    },
  },
  // watch() {},
};
</script>

<style lang="less" scoped>
.full-page-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: aliceblue;
  overflow: hidden;
  p {
    font-size: 30px;
    margin: 30px 10px;
    width: 0%;
    height: 100%;
    color: transparent;
    white-space: nowrap;
    overflow: hidden;
    transition: width 1.5s;
    background-image: linear-gradient(
      135deg,
      #ff0000,
      #ff7f00,
      #ffff00,
      #00ff00,
      #00ffff,
      #8b00ff
    );
    background-size: 400% 100%;
    animation: bgColor 6s infinite;
    background-clip: text;
    font-weight: 600;
    @keyframes bgColor {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
    &.motto {
      font-size: 20px;
    }
  }
  .active-text {
    width: 100%;
  }
  .bg-img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
  }
  .down-img {
    position: absolute;
    bottom: 30px;
    font-size: 40px;
    // transform: bottom 1.5s;
    animation: down 1.5s infinite;
    z-index: 3;
    @jump: 5px;
    @keyframes down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
}
</style>