<template>
  <section class="pagination-wrap">
    <span>上一页</span>
    <i @click="numberClick(1)">1</i>
    <i>2</i>
    <i>3</i>
    <i>4</i>
    <i>5</i>
    <i>6</i>
    <span>下一页</span>
  </section>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    allPage: Number,
    currPage: Number
  },
  created() {
    console.log(this.currPage,this.allPage)
  },
  methods: {
    numberClick(value) {
      // console.log(44444)
      this.$emit('changePage', value);
    }
  }
}
</script>

<style lang="scss" scoped>
  span{
    user-select: none;
    cursor: pointer;
  }
  i{
    border: 1px solid #d8d8d8;
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    margin: 0 10px;
    cursor: pointer;
    user-select: none;
  }
</style>