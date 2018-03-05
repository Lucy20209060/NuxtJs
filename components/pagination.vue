<template>
  <section class="pagination-wrap">
    <span @click="prePage">上一页</span>
    <i 
      v-for="(page,index) in allPage"
      :key="index"
      :class="[
        currPage == index+1?'current-page':''
      ]"
      @click="numberClick(index+1)"
    >
      {{index+1}}
    </i>
    <span @click="nextPage">下一页</span>
  </section>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    allPage: Number,
    currPage: Number
  },
  data() {
    return{

    }
  },
  created() {
    console.log(this.currPage,this.allPage)
  },
  methods: {
    numberClick(value) {
      this.$emit('changePage', value);
    },
    prePage() {
      this.$emit('changePage', this.currPage - 1);
    },
    nextPage() {
      this.$emit('changePage', this.currPage + 1);
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
  .current-page{
    border:1px solid #009e4d;
    color: #009e4d;
  }
</style>