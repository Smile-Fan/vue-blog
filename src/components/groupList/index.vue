<template>
  <div class="groupList-container">
    <div class="newArticle groupList">
      <div class="titleHeader">
        <p>最新文章</p>
      </div>
      <hr />
      <el-row class="list">
        <el-col class="list-li">第一个文章</el-col>
        <el-col class="list-li">第二个文章</el-col>
        <el-col class="list-li">第三个文章</el-col>
        <el-col class="list-li">第四个文章</el-col>
      </el-row>
    </div>
    <div class="newCommont groupList">
      <div class="titleHeader">
        <p>最新评论</p>
      </div>
      <hr />
      <el-row class="list">
        <el-col class="list-li">第一个评论</el-col>
        <el-col class="list-li">第二个评论</el-col>
        <el-col class="list-li">第三个评论</el-col>
        <el-col class="list-li">第四个评论</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.groupList-container {
  .groupList {
    border: 1px solid #ccc;
    height: 300px;
    margin: 15px 0;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);
    .titleHeader {
      height: 45px;
      font-size: 18px;
      line-height: 45px;
    }
    .list {
      padding: 20px 10px;
      .list-li {
        margin: 10px 0;
      }
    }
  }
}
</style>