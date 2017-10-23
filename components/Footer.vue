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

		<figure>
			<figcaption>安厨微店</figcaption>
			<img src="~/static/img/logo2.png">
		</figure>

		<figure>
			<figcaption>安厨微信</figcaption>
			<img src="~/static/img/logo2.png">
		</figure>

		<figure>
			<figcaption>安厨微博</figcaption>
			<img src="~/static/img/logo2.png">
		</figure>

    </div>
  </section>
    
</template>

<script>
  export default {
    data: () => {
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
        ]
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
 figure{
 	display: inline-block;
 	margin-right: 50px;
 }
 figcaption{
	margin-bottom: 20px;
	color: #129E83;
 }
</style>