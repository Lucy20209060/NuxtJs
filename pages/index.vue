<template>
    <div class="index">
      <img :src="indexData.img" alt="">
      <i class="iconfont icon-tlxlacwn"></i>
    </div>
</template>

<script>
  import { indexData } from '~/assets/getData'
  export default {
    data () {
      return {
        indexData:{}
      }
    },
    created () {
      const data = indexData()
      this.indexData = data
    }
  }
</script>

<style lang="scss" scoped>
  $class-pre:'index';
  .#{$class-pre}{
    width: 100%;
    height: auto;
    position: relative;
    img{
      width: 100%;
      height: auto;
    }
    i{
      position: absolute;
      top: 150px;
      right: 30%;
      font-size: 350px;
      z-index: 10;
    }
  }
</style>