<template>
  <div class="articleList-container">
    <el-row>
      <el-col :sm="7" :xs="0">
        <div class="leftImg">
          <el-image
            style="width: 100%; height: 100%"
            :src="url"
            fit="cover"
            @error="errorEvent"
          ></el-image>
        </div>
      </el-col>
      <el-col :sm="17">
        <div class="rightContent">
          <div class="title">
            <p class="headerTitle">这是一个标题</p>
            <span class="time message">时间：2021年6月5号</span>
            <span class="pageView message">浏览量：21113</span>
            <span class="comment message">评论：35</span>
            <el-divider class="hr"></el-divider>
          </div>
          <div class="description">
            这是一个描述，这是一个描述，这是一个描述，这是一个描述，这是一个描述，这是一个描述这是一个描述这是一个描述
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://img2.baidu.com/it/u=1597444792,2012254846&fm=26&fmt=auto&gp=0.jpg",
    };
  },
  methods: {
    errorEvent() {
      console.log("加载失败了");
    },
  },
};
</script>

<style lang="less" scoped>
.articleList-container {
  border-radius: 10px;
  margin: 15px 10px;
  overflow: hidden;
  display: flex;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.2);
  .leftImg {
    width: 200px;
    height: 200px;
  }
  .rightContent {
    flex-grow: 1;
    padding: 0 20px 15px 20px;
    .headerTitle {
      padding: 15px;
      font-size: 20px;
    }
    .message {
      margin: 0 30px;
      font-size: 12px;
    }
    .description {
      text-align: start;
      font-size: 16px;
    }
  }
  .hr {
    margin: 10px;
  }
}
</style>