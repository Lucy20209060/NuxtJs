<template>
  <section class="footer" v-if="currentRoute != 'anchu-story-storyDetail-id'">
    <div class="footer-center">
    	<p class="footer-logo">
        <img :src="require(`~\/static\/img\/${footerData.logo}`)">
    	</p>

    	<dl class="footer-contact">
    		<dt>{{footerData.contact.title}}</dt>
    		<dd v-for="(item,index) in footerData.contact.address" key="index">
    			<span>{{item.name}}</span>
    			<!-- <i class="iconfont">&#xe69f;</i> -->
    		</dd>
    	</dl>
      
      <div class="qrCode">

        <figure v-for="(item,index) in footerData.qrCode" :key="index" @mouseover="qrCodeOver(index)" @mouseout="qrCodeOut(index)">
          <figcaption>{{item.title}}</figcaption>
          <img 
            :src="require(`~\/static\/img\/qrCode\/${item.code}`)"
            :class="[
              (index != imgSign) && (imgSign != -1) ? 'imgFilter' : '',
              index == imgSign ? 'imgScale' : ''
            ]"
          >
        </figure>

      </div>

    </div>
  </section>
    
</template>

<script>
  import { footerData } from '~/assets/getData'
  export default {
    data () {
      return {
        footerData: {},
        imgSign: -1,
        currentRoute:''
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'routeChange'
    },
    created () {
      this.footerData = footerData()
      this.routeChange()
    },
    methods: {
      // 二维码滑过
      qrCodeOver (index) {
        this.imgSign = index
      },
      // 二维码滑出
      qrCodeOut (index) {
        this.imgSign = -1
      },
      // 路由变化
      routeChange () {
        this.currentRoute = this.$router.currentRoute.name
       }
    }
  }
</script>

<style scoped>
  .footer{
  	width: 100%;
  	height: 700px;
    user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }
  .footer-center{
  	width: 1200px;
  	margin: 0 auto;
  	height: 100%;
  }
  .footer-logo{
  	padding-top: 60px;
  }
  .footer-contact{
  	margin: 90px 0 64px;
  	overflow: hidden;
  	color: #129E83;
  	width: 230px;
  }
  .footer-contact dt{
    width: 100%;
    float: left;
    margin-bottom: 10px;
  }
  .footer-contact dd{
    width: 50%;
    float: left;
    font-size: 14px;
    margin-top: 10px;
    cursor: pointer;
  }
  .footer-contact dd span{
  	display: inline-block;
  	width: 74px;
  }
  .footer-contact dd i{
  	display: inline-block;
  	font-size: 14px;
  }
  .qrCode:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    overflow:hidden;
    visibility:hidden;
  }
  figure{
  	float: left;
  	padding-right: 50px;
    width: 116px;
  }
  figure img{
    width: 83%;
    height: auto;
    filter: blur(0px);
    transform:scale(1);
    transition: all 1s;
  }
  .imgFilter{
    filter: blur(5px);
  }
  .imgScale{
    transform:scale(1.3);
  }
  figcaption{
    margin-bottom: 16px;
    color: #129E83;
  }
 /*媒体查询*/
  @media screen and (max-width: 1200px) {
    .footer-center{
      width: 90%;
    }
    figure{
      margin-right: 20px;
    }

  }
  @media screen and (max-width: 750px) {
    figure{
      padding-right: 10px;
    }
    figure img{
      width: 80%;
    }
    .footer{
      height: auto;
      padding-bottom:60px;
    }
    .footer-contact{
      margin: 60px 0 30px;
    }
  }
</style>