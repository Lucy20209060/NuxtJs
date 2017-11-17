<template>
	<section class="shop-page_wrap">
    <a href="http://wd.hzanchu.com" target="_blank" class="banner">
      <img src="~/static/img/weidian/wd1.png">
    </a>

    <div class="content">
    	<div class="content-text">
    		<p class="content-text1">
    			<span>“自用者，购物省钱”</span>
    			<i class="iconfont">&#xe6a0;</i>
    		</p>
    		<p class="content-text2">B2B农产品电商平台。整合优质农产品，并提供仓配一体化服务，向线上、线下承包商、企业和各级农业合作社等提供农产品一站式批发、采购业务。从选品，到存储，以及运输配送，安厨都建立起一套完备、严格而科学的体系。</p>
    		<p class="content-text2">首先从各县各乡挖掘、遴选优质特色农产品，围绕生产者、质检部门、认证标准、品控溯源、消费者等环节建立5道安全保障；同时对每一个农产品的生长环境进行严格监控，对每一个产品进行43项常规项目抽检，从根源杜绝重金属、农药残留、添加剂等危害；最后剔除中间环节，实现源头直购，无缝储送。安厨配备了符合专业标准的冷藏库（0-4℃）和冷冻库（-18℃），常规仓库，并为其配备了全套的仓储系统，不同产品进行区别储藏，提供8小时以上的冷链配送。</p>
    	</div>
    </div>
		
	</section>
</template>

<script>
  export default {
    head: {
      title: '安厨微店'
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
  	background:url('~/static/img/weidian/wd2.png') no-repeat center;
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