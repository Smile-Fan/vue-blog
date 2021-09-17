<template>
  <div class="showPage-container">
    <el-row>
      <el-col :md="4" class="left hidden-sm-and-down">
        <menuList @themeColorChange="themeColorChange" />
      </el-col>
      <el-col :md="15" class="mid">
        <!-- <router-view></router-view> -->
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <articleList />
        <paging class="paging" />
      </el-col>
      <el-col :md="4" class="right hidden-sm-and-down">
        <groupList />
      </el-col>
      <el-col class="hidden-md-and-up menu">
        <i class="el-icon-s-operation" @click="drawer = true"></i>
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
    </el-row>
  </div>
</template>

<script>
import { themeColor } from "@/util/themeColor.js";
import "element-ui/lib/theme-chalk/display.css";
import menuList from "@/components/menuList/index.vue";
import articleList from "@/components/articleList/index.vue";
import groupList from "@/components/groupList/index.vue";
import paging from "@/components/paging/index.vue";
export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",
    };
  },
  components: {
    menuList,
    articleList,
    groupList,
    paging,
  },
  methods: {
    themeColorChange(value) {
      themeColor(value);
    },
    closeDrawer() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="less" scoped>
.showPage-container {
  overflow-x: hidden;
  z-index: 3;
  .left {
    margin-top: 100px;
  }
  .mid {
    margin-top: 100px;
    // box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    .paging {
      margin-top: 50px;
    }
  }
  .right {
    margin-top: 100px;
    padding-left: 50px;
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