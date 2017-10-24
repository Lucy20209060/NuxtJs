<template>
    <h2>
      <i class="iconfont">&#xe69e;</i>
      <span v-html="title"></span>
    </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  h2{
    text-align: center;
    padding-bottom: 26px;
  }
  i{
  	color: #e95513;
    display: block;
    font-size: 30px;
  }
  span{
  	color: #375d77;
    display: block;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    line-height: 30px;
    
  }
</style>