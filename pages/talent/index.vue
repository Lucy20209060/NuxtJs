<template>
  <section class="join-page_wrap">
		
		<div class="join-title">
			<fourWorlds title="能者<br>来战" />
		</div>
		
		<!-- 各部门 -->
		<ul class="join-job_wrap">
			<li 
				v-for="(item,index) in join"
				:key="index"
				:style="{
					width:`${100/join.length}%`
				}"
				:class="[
					activeSign == index ? 'activeClass' : ''
				]"
				@click="choiceClass(index)"
			>
				<span>{{item.title.CHtitle}}</span>
				<i>{{item.title.ENtitle}}</i>
			</li>
		</ul>
		
  	<!-- 
  		carouselMain 						包裹标签 
  			itemWidth itemHeight 	内容块的宽高 必需
  			interval 							自动轮播间隔  不设置则关闭自动轮播

  		carouselItem 						子标签
  	-->

    <carouselMain 
	    :itemWidth="536" 
	    :itemHeight="610" 
	     :interval="3000"
	    v-for="(item,index) in join" 
	    :key="index" 
	    v-if="activeSign == index"
    >
    	<template scope="props">
	    	<carouselItem v-for="(job,index) in item.job" :key="index" :keys="index" :currentActive="props.currentActive">
	    		<dl class="join-item">
	    			<dt>
	    				<span>{{job.title.CHtitle}}</span>
	    				<i>{{job.title.ENtitle}}</i>
	    			</dt>
	    			<dd>
	    				<p>{{job.duty.title}}</p>
	    				<p v-for="(duty,index) in job.duty.content" :key="index">{{`${index+1}、${duty}`}}</p>
	    			</dd>
	    			<dd>
	    				<p>{{job.demand.title}}</p>
	    				<p v-for="(demand,index) in job.demand.content" :key="index">{{`${index+1}、${demand}`}}</p>
	    			</dd>
	    		</dl>
	    	</carouselItem>
    	</template>
    </carouselMain>



  </section>
</template>

<script>
	import carouselMain from '~/components/carousel/main'
	import carouselItem from '~/components/carousel/item'
	import fourWorlds from '~/components/iconTitle'
	import { joinData } from '~/assets/getData'
	export default {
	  head: {
	    title: '能者来战'
	  },
	  data () {
      return {
        join: [],					// 所有部门的职位
        activeJob: {},		// 当前部分职位
        activeSign: 0
      }
		},
	  components: {
      carouselMain,
      carouselItem,
      fourWorlds
    },
    created () {
      this.join = joinData()
      this.activeJob = this.join[0]
      console.log(this.join)     
    },
    methods: {
    	choiceClass (index) {
      	this.activeJob = this.join[index]
      	this.activeSign = index
    	}
    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'join';
	.#{$class-pre}{
		&-page_wrap{
			text-align: center;
		}
		&-title{
			padding-top: 70px;
		}
		&-job_wrap{
			margin: 0 auto 60px;
			width: 1200px;
			li{
				display: inline-block;
				padding: 7px 0;
				width: 20%;
				cursor: pointer;
				color: #129E83;
				text-align: center;
				border-right: 1px solid #E8E9F4;
				box-sizing:border-box;
				span{
					font-size: 16px;
					display: block;
				}
				i{
					font-size: 14px;
					display: block;
				}
				&:last-child{
					border-right: 0;
				}
			}
		}
		&-item{
			width: 100%;
			height: 100%;
			box-sizing:border-box;
			padding: 50px;
			text-align: left;
			dt{
				border-left: 2px solid #375D77;
				padding: 15px 0 0 15px;
				color: #375D77;
				span{
					display: block;
					font-size: 18px;
				}
				i{
					display: block;
					font-size: 12px;
				}
			}
			dd{
				font-size: 14px;
				color: #375D77;
				line-height: 26px;
				padding-top: 24px;
			}
		}
	}
	.join-job_wrap .activeClass{
		background: #129E83;
		color: #fff;
	}
</style>
