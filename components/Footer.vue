<template>
  <section class="footer">
    <div class="footer-center">
    	<p class="footer-logo">
    		<img src="~/static/img/logo2.png">
    	</p>

    	<dl class="footer-contact">
    		<dt>联系我们</dt>
    		<dd v-for="(item,index) in contact" key="index">
    			<span>{{item.address}}</span>
    			<i class="iconfont">&#xe69f;</i>
    		</dd>
    	</dl>
      
      <div class="qrCode">

        <figure v-for="(item,index) in qrCode" :key="index" @mouseover="qrCodeOver(index)" @mouseout="qrCodeOut(index)">
          <figcaption>{{item.title}}</figcaption>
          <img 
            :src="item.code" 
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
  import anchugyl from '~/static/img/qrCode/anchugyl.jpg'
  import anchuwd from '~/static/img/qrCode/anchuwd.jpg'
  import acweibo from '~/static/img/qrCode/acweibo.png'
  import acweixin from '~/static/img/qrCode/acweixin.jpg'

  export default {
    data () {
      return {
        contact: [
          {
            address: '安厨总部'
          },
          {
            address: '安厨漾濞站'
          },
          {
            address: '安厨桐庐站'
          },
          {
            address: '安厨榆树站'
          },
          {
            address: '安厨临安站'
          },
          {
            address: '安厨建德站'
          },
          {
            address: '安厨富阳站'
          },
          {
            address: '安厨淳安站'
          }
        ],
        qrCode: [
          {
            title: '安厨供应链',
            code: anchugyl
          },
          {
            title: '安厨微店官方号',
            code: anchuwd
          },
          {
            title: '安厨官微',
            code: acweibo
          },
          {
            title: '安厨公众号',
            code: acweixin
          }
        ],
        imgSign: -1
      }
    },
    methods: {
      // 二维码滑过
      qrCodeOver (index) {
        this.imgSign = index
      },
      // 二维码滑出
      qrCodeOut (index) {
        this.imgSign = -1
      }
    }
  }
</script>

<style scoped>
  .footer{
  	width: 100%;
  	height: 810px;
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