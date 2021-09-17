<template>
  <div class="pager-container" v-if="total != 0">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)"
      >|&lt;&lt;</a
    >
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in nums"
      :key="i"
      :class="{ active: current == n }"
      @click="handleClick(n)"
      >{{ n }}</a
    >
    <a
      :class="{ disabled: current == pageNum }"
      @click="handleClick(current + 1)"
      >&gt;&gt;</a
    >
    <a :class="{ disabled: current == pageNum }" @click="handleClick(pageNum)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    //总数据量
    total: {
      type: Number,
      default: 10,
    },
    //页容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页码
    pageNum() {
      return Math.ceil(this.total / this.limit);
    },
    //可见最小页码
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    //可见最大页码
    visibleMax() {
      let max = this.visibleMin + (this.visibleNumber - 1);
      if (max >= this.pageNum) {
        max = this.pageNum;
      }
      return max;
    },
    nums() {
      let num = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        num.push(i);
      }
      return num;
    },
  },
  methods: {
    handleClick(newPage) {
      newPage =
        newPage > this.pageNum
          ? this.pageNum
          : newPage < 1
          ? (newPage = 1)
          : newPage;
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang='less' scoped>
@import "../../styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 6px 0;
  a {
    margin: 0px 6px;
    color: @primary;
    &:hover {
      cursor: pointer;
    }
    &.active {
      color: @words;
      font-weight: bold;
    }
    &.disabled {
      color: @gray;
      pointer-events: none;
    }
  }
}
</style>