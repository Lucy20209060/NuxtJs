<template>
    <div class="storage-wrap">
    	<div class="storage">
      	<fourWorlds :title="storage[0].title" />
      	<p>
      		<img :src="require(`~\/static\/img\/elaborate\/${storage[0].img}`)">
      	</p>

      	<div class="storage-explain">
	      	<dl v-for="(item,index) in storage[0].explain" :key="index">
	      		<dt>
	      			<i class="iconfont" :class="item.icon"></i>
	      		</dt>
	      		<dt>
	      			<span>{{item.title.CHtitle}}</span>
	      			<em>{{item.title.ENtitle}}</em>
	      		</dt>
	      		<dd v-for="(items,index) in item.list" :key="index">{{`√ ${items}`}}</dd>
	      	</dl>
      	</div>

      	<span>{{storage[0].text[0]}}</span>
      </div>

      <div class="storage-table">
      	<div class="storage-table-wrap">
	      	<underlineTitle :title="storage[1].title" size="24px" />
	      	<p class="storage-text">{{storage[1].text}}</p>
	      	<img :src="require(`~\/static\/img\/storage\/${storage[1].img}`)">
      	</div>
      </div>

      <div class="storage">
      	<underlineTitle :title="storage[2].title" size="24px" />
      	<p class="storage-text">{{storage[2].text}}</p>
      </div>

    </div>
</template>

<script>
	import fourWorlds from '~/components/iconTitle'
	import underlineTitle from '~/components/underlineTitle'

	import { storageData } from '~/assets/getData'
	export default {
	  head: {
	    title: '仓储服务'
	  },
	  data () {
      return {
        storage: []
      }
		},
	  components: {
	    fourWorlds,
	    underlineTitle
	  },
	  created () {
	    const data = storageData()
	    this.storage = data
	    console.log(this.storage)
	  }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'storage';
	.#{$class-pre}{
		margin: 38px auto;
    text-align: center;
    width: 1200px;
    p img{
    	width: 100%;
    	height: auto;
    }
    & > span{
    	display: inline-block;
    	width: 77%;
			font-size: 14px;
			color: #375D77;
			letter-spacing: 0;
			line-height: 24px;
			margin-top: 35px;
    }
    &-text{
    	width: 77%;
    	display: inline-block;
    	margin: 26px auto 0;
    	font-size: 14px;
    }
    &-explain{
    	&:after{
				content:".";
				display:block;
				height:0;
				clear:both;
				overflow:hidden;
				visibility:hidden;
			}
    	dl{
    		float: left;
    		width: 20%;
    		height:300px;
    		padding: 20px;
    		background: #FFFFFF;
				box-shadow: 0 0 8px 0 rgba(217,217,217,0.50);
    		box-sizing:border-box;
	    	dt:nth-child(1){
					color: #129E83;
					padding: 15px 0 17px;
	    	}
	    	dt:nth-child(2){
					color: #375D77;
					padding-bottom: 10px;
					span{
						font-size: 16px;
						display: block;
					}
					em{
						font-size: 12px;
						display: block;
					}
	    	}
	    	dd{
	    		font-size: 14px;
	    		text-align: left;
	    		line-height: 26px;
	    	}
    	}
    }
    &-table{
			padding: 35px 0 46px;
			background: #F6F6F6;
			&-wrap{
				width: 1200px;
				margin: 0 auto;
				text-align: center;
				&:after{
					content:".";
					display:block;
					height:0;
					clear:both;
					overflow:hidden;
					visibility:hidden;
				}
				img{
					margin-top: 26px;
				}
			}
    }

	}
</style>