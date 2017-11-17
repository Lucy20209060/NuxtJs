<template>
    <div class="story-wrap">
    	<div class="story-banner">
      	<Banner :images="story.banner" :loop="true" time="3000" />
    	</div>

      <div class="story-list" id="list">
      	<nuxt-link 
	      	tag="dl" 
	      	v-for="(item,index) in story.storyList" 
	      	:key="index"
	      	:to="{
	      		name:'story-id',
	      		params:{
	      			id:item.id
	      		}
	      	}"
      	>
      		<dt>
      			<img :src="require(`~\/static\/img\/elaborate\/${item.img}`)">
      		</dt>
      		<dd>
      				<i class="site" :style="{background:item.site.background}">{{item.site.name}}</i>
      				<span>{{item.title}}</span>
      				<em>{{item.time}}</em>
      				<i class="describe" v-html="item.describe"></i>
      		</dd>
      	</nuxt-link>
      </div>
			
			<!-- 农民有话说 -->
      <dl id="comment" class="story-comment">
      	<dt>{{story.comment.title}}</dt>
      	<dd v-for="(item,index) in story.comment.content" :key="index">
      		<span>
      			<img :src="require(`~\/static\/img\/elaborate\/${item.portrait}`)">
      		</span>
      		<p>
      			<i>{{item.name}}</i>
      			<em>{{item.text}}</em>
      		</p>
      	</dd>
      </dl>
			
    </div>
</template>

<script>
	import Banner from '~/components/imgBanner'
	import { storyData } from '~/assets/getData'
	export default {
	  head: {
	    title: '安厨故事'
	  },
	  components: {
      Banner
    },
    data () {
	    return {
	      imgArr:[],
	      story:[]
	    }
	  },
	  created () {
	  	const data = storyData()
	  	this.story = data
	  }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'story';
	.#{$class-pre}{
		&-wrap{
			padding-top: 83px;
		}
		&-banner{
			width: 100%;
			height: 500px;
		}
		&-list{
			width: 1200px;
			margin: 0 auto;
			padding: 32px 0 122px;
			& :nth-child(1) dd{
				bottom: -95px;
			}
			& :nth-child(2) dd{
				bottom: -95px;
			}
			& :nth-child(3) dd{
				bottom: -74px;
			}
			& :nth-child(4) dd{
				bottom: -116px;
			}
			dl{
				display: inline-block;
				width: 294px;
				height: 294px;
				margin-right: 0.5%;
				overflow: hidden;
				position: relative;
				cursor: pointer;
				box-shadow: 0 0 8px 0 rgba(217,217,217,.5);
				dt{
					width: 100%;
					height: 207px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				&:hover dd{
					bottom: 0;
				}

				dd{
					position: absolute;
					background: #fff;
					padding: 0 12px 10px;
					color: #000000;
					z-index: 99;
					transition: bottom .5s;

					.site{
						position: absolute;
						width: 36px;
						height: 36px;
						border-radius: 100%;
						border: 2px solid #fff;
						line-height: 36px;
						text-align: center;
						top: -18px;
						left: 50%;
						margin-left: -18px;
						font-size: 13px;
						color: #fff;
					}
					span{
						font-size: 16px;
						display: block;
						padding-top: 36px;
					}
					em{
						font-size: 12px;
						display: block;
						line-height: 30px;
						position: relative;
						&:after{
							position:absolute;
							content: "";
							height: 1px;
							background: #EEEFF6;
							width: 200%;
							bottom: 0;
							left: -20px;
						}
					}
					.describe{
						font-size: 14px;
						color: #494949;
					}
				}
			}
		}
		&-comment{
			width: 1200px;
			margin: 0 auto;
      dt{
      	border-bottom: 1px solid #EEEFF6;
      	font-size: 18px;
				color: #375D77;
				line-height: 40px;
				position: relative;
				&:after{
					position:absolute;
					content: "";
					width: 46px;
					height: 2px;
					bottom: 0;
					left: 0;
					background: #EA5614;
				}
      }
      dd{
      	width: 780px;
      	border-bottom: 1px solid #EEEFF6;
      	overflow: hidden;
      	padding: 22px 0 18px;
      	span{
      		float: left;
      		border-radius: 100%;
      		width:60px;
      		height: 60px;
      		background: #E8E9F4;
      		overflow: hidden;
      		img{
						width: auto;
						height: 100%;
      		}
      	}
      	p{
      		float: left;
      		width: calc(100% - 60px);
      		padding-left: 20px;
      		box-sizing:border-box;
					font-size: 14px;
      		i{
						display: block;
						color: #375D77;
						padding-bottom: 10px;
      		}
      		em{
      			display: block;
      			padding: 8px 16px;
      			background: #EEEFF6;
						border-radius: 0 4px 4px 4px;
      		}
      	}
      	&:last-child{
      		border-bottom: 0;
      	}
      }
		}
	}

	/*媒体查询*/
  @media screen and (max-width: 1200px) {
    .story-list{
      width: 90%;
    }
  }
</style>