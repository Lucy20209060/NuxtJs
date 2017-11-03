<template>
  <section class="container">
    <div class="text-wrap" v-for="(item,index) in pageText" :key="index">
      <div class="text-center">
        <fourWorlds :title="item.title" />
        <p v-for="(items,indexs) in item.text" :key="indexs">{{items}}</p>
        <!-- <img :src='item.img' alt="item.title"> -->
        <img :src="require(`~\/static\/img\/idea\/${item.img}`)">
      </div>
    </div>
  </section>
</template>

<script>
import fourWorlds from '~/components/iconTitle'
import { ideaData } from '~/assets/getData'
export default {
  head: {
    title: '安厨理念'
  },
  data () {
    return {
      pageText: []
    }
  },
  components: {
    fourWorlds
  },
  created () {
    const data = ideaData()
    this.pageText = data
  }
}
</script>

<style scoped>
  .container{
    padding-top: 110px;
  }
  .text-wrap{
    width: 100%;
  }
  .text-wrap:nth-of-type(even){
    background:  #F6F6F6;
  }
  .text-center{
    width:1200px;
    margin: 0 auto;
    text-align: center;
    padding: 38px 0;
  }
  .text-center p{
    display: inline-block;
    width: 930px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #375D77;
    line-height: 26px;
  }
  .text-center img{
    margin-top: 38px;
    height: auto;
  }
</style>