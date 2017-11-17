<template>
	<section class="shop-page_wrap">
    <a href="http://wd.hzanchu.com" target="_blank" class="banner">
      <img :src="shopData.banner">
    </a>
    
    <!-- 自用者，购物省钱 -->
    <div 
      class="content"
      :style="{
        background:`url(${shopData.describe.background}) center/100% no-repeat`
      }"
    >
    	<div class="content-text">
    		<p class="content-text1">
    			<span>{{shopData.describe.text.title}}</span>
    			<i class="iconfont" v-html="shopData.describe.text.icon"></i>
    		</p>
    		<p 
          class="content-text2" 
          v-for="(content,index) in shopData.describe.text.content" 
          :key="index"
        >{{content}}</p>
    	</div>
    </div>
		
	</section>
</template>

<script>
  import { shopData } from '~/assets/getData'
  export default {
    head: {
      title: '安厨微店'
    },
    data () {
      return {
        shopData:{}
      }
    },
    created () {
      const data = shopData()
      this.shopData = shopData()
    }
  }
</script>

<style scoped>
  .banner{
  	width: 100%;
  	height: auto;
  	padding-top: 20px;
  	cursor: pointer;
  	display: block;
  }
  .banner img{
  	display: inline-block;
  	width: 100%;
  	height: auto;
  }
  .content{
  	position: relative;
  	width: 100%;
  	height: 626px;
    /*background-size: 100%;*/
  	border-top: 150px solid transparent;
  	border-bottom: 122px solid transparent;
  }
  .content-text{
  	position: absolute;
  }
  .content-text{
  	padding: 54px;
  	width: 540px;
  	box-sizing:border-box;
  	height: 674px;
  	top: -24px;
  	left: 50%;
  	margin-left: -600px;
  	background: #FFFFFF;
		box-shadow: 0 0 8px 0 rgba(214,214,214,0.60);
  }
  .content-text1{
  	overflow: hidden;
  }
  .content-text1 span{
  	float: left;
  	color: #B29F74;
  }
  .content-text1 span:before{
  	content: ' ';
  	display:block;
  	width: 44px;
  	height: 2px;
  	background: #B29F74;
  	margin: 26px 0 10px 10px;
  }
  .content-text1 i{
  	float: right;
  	font-size: 60px;
  	color:#B29F74; 
  }
  .content-text2{
		margin-top: 70px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #375D77;
		line-height: 26px;
  }
</style>