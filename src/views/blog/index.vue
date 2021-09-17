<template>
  <div class="blog-container">
    <el-row type="flex" justify="center" :gutter="30">
      <el-col :md="17" class="mid">
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
      </el-col>
      <el-col :md="5" :sm="4" class="right hidden-sm-and-down">
        <groupList />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import groupList from "@/components/groupList";
import articleList from "@/components/articleList";
import "element-ui/lib/theme-chalk/display.css";
export default {
  components: {
    articleList,
    groupList,
  },
};
</script>

<style>
</style>