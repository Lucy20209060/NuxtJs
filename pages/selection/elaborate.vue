<template>
    <div class="elaborate-wrap">
      <div class="elaborate">
      	<fourWorlds title="精雕<br>细琢" />
      	<span>安厨以工匠精神打造一件农产品，自然不落俗套。</span>
      	<p>
      		<img src="~/static/img/elaborate/elaborate1.png">
      		<img src="~/static/img/elaborate/elaborate2.png">
      		<img src="~/static/img/elaborate/elaborate3.png">
      		<img src="~/static/img/elaborate/elaborate4.png">
      	</p>
      </div>

      <div class="case-wrap">
      	<div class="case">	
      		<underlineTitle title="安厨案例" size="24px" />
      	</div>
      </div>
    </div>
</template>

<script>
	import fourWorlds from '~/components/iconTitle'
	import underlineTitle from '~/components/underlineTitle'
	export default {
	  head: {
	    title: '精雕细琢'
	  },
	  components: {
	    fourWorlds,
	    underlineTitle
	  }
	}
</script>

<style scoped>
	.elaborate-wrap{
		overflow: hidden;
		padding-top: 28px;
	}
	.elaborate{
		margin: 38px auto;
		text-align: center;
		width: 1200px;
	}
	.elaborate span{
		display: block;
		font-size: 14px;
	}
	.elaborate p{
		padding-top: 36px;
		overflow: hidden;
	}
	.elaborate p img{
		float: left;
		line-height: 1px;
		margin: 0 .3% .3% 0;
		/*width: 49.4%;*/
		width: 24.7%;
		height: auto;
	}
	.elaborate p img:last-child{
		margin-right:0;
	}
	.case-wrap{
		background: #F6F6F6;
		padding: 46px 0 36px;
	}
	.case{
		width: 1200px;
		margin: 0 auto;
	}

	/*媒体查询*/
	@media screen and (max-width: 1200px) {
    .elaborate{
    	width: 90%;
    }
  }
  @media screen and (max-width: 750px) {
    .elaborate{
    	width: 95%;
    }
    .elaborate p img{
    	width: 49.4%;
    }

  }
</style>