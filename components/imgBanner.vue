<template>
  <div class="banner-wrap">
    <div 
      v-for="(item,index) in images" 
      :key="index"
      :class="[
        'banner-items',
        index == imgSign ? 'banner-img-active' : ''
      ]"
      @mouseenter="overBanner"
      @mouseout="outBanner"
    >
      <img :src="require(`~\/static\/img\/elaborate\/${item.img}`)">
    </div>

    <div class="banner-btn" @mouseenter="overBanner">
      <span 
        v-for="(items,indexs) in images.length"
        :key="indexs"
        @click="bannerBtn(indexs)"
      >
        <i :class="[indexs == imgSign ? 'banner-btn-active' : '']"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    loop: {
      type: Boolean,
      default: true
    },
    time: {
      type: String,
      default: '3000'
    }
  },
  data () {
    return {
      imgSign: 0,
      interval:null
    }
  },
  created () {
    this.setinterval()
  },
  methods: {
    // 点击下标
    bannerBtn (index) {
      this.imgSign = index
    },

    // 开启定时器
    setinterval () {
      const [_this,Len] = [this, this.images.length]
      if(this.loop){
        this.interval = setInterval(function(){
          if(_this.imgSign >= Len-1){
            _this.imgSign = 0
          }else{
            _this.imgSign ++
          }
        },this.time)
      }
    },

    // 关闭定时器
    clearinterval () {
      clearInterval(this.interval)
    },

    // 滑过banner 关闭定时器
    overBanner () {
      this.clearinterval()
    },

    // 滑出banner 开启定时器
    outBanner () {
      this.setinterval()
    }

  },
  destroyed () {
    this.clearinterval()
  }
}
</script>

<style lang="scss" scoped>
  $class-pre:'banner';
  .#{$class-pre}{
    &-wrap{
      position: relative;
      width: 100%;
      height: 100%;
    }
    &-items{
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      z-index: 1;
      transition: opacity .6s;
      overflow: hidden;
      text-align: center;
      img{
        display: inline-block;
        width: auto;
        height: 100%;
      }
    }
    &-img-active{
      opacity: 1;
      z-index: 99;
    }
    &-btn{
      position: absolute;
      z-index: 9999;
      bottom: 2%;
      left: 10%;
      span{
        width: 50px;
        height: 3px;
        border: 10px solid transparent;
        border-right-width: 5px;
        border-left-width: 5px;
        float: left;
        cursor: pointer;
        transition: background .6s;
        i{
          background: #fff;
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      &-active{
        background: #EA5614!important; 
      }
    }
  }
</style>