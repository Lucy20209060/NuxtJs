<template>
    <div class="storyDetail-wrap">

			<div class="storyDetail-banner">
				<div class="storyDetail-banner-list">
					<p class="header">
						<a href="/anchu/story#list">
							<i class="iconfont icon-suoyougushi"><em> 全部故事</em></i>
						</a>
						<nuxt-link 
							:to="{
			      		name:'anchu-story-storyDetail-id',
			      		params:{
			      			id:nextStoryId
			      		}
			      	}"
						>
							<i class="iconfont icon-suoyougushi"><em> 下个故事</em></i>
						</nuxt-link>
						<a href="/anchu/story#comment">
							<i class="iconfont icon-suoyougushi"><em> 所有评论</em></i>
						</a>
					</p>

					<div class="banner">
						<div 
							v-for="(item,index) in detail.detail.source" 
							:key="index"
							:class="[
								'list',
								index == imageId ? 'banner-list-actile' : ''
							]"
						>
							<img v-if="item.type=='image'" :src="require(`~\/static\/img\/elaborate\/${item.link}`)">

						</div>
						
						<!-- 左右按钮 -->
						<i class="left iconfont icon-zuojiantou" @click="leftTap"></i>
						<i class="right iconfont icon-youjiantou" @click="rightTap"></i>
					</div>
				</div>
				<dl class="storyDetail-banner-text">
					<dt class="title" v-html="detail.detail.title"></dt>
					<dd class="number">{{`${imageId + 1}/${detail.detail.source.length}`}}</dd>
					<dd class="text">{{detail.detail.describe}}</dd>
				</dl>
			</div>

			<div class="storyDetail-footer" @mouseout="footerOut">
				<div class="footer">
					<span>
						<em @mouseover="footerOver">
							<i>Copyright © 1998 - 2016 Tencent. All Rights Reserved</i>
							<i>关于安厨</i>
						</em>
					</span>

					<dl
						:class="[
							footerSign ? 'footer-active' : ''
						]"
					>
						<dt>
							<em 
								v-for="(item,index) in detail.detail.source.length" 
								:key="index"
								:style="{
									'width':`calc((100% - 4*${detail.detail.source.length - 1}px)/${detail.detail.source.length})`,
									'width': `-moz-calc((100% - 4*${detail.detail.source.length - 1}px)/${detail.detail.source.length})`,
									'width': `-webkit-calc((100% - 4*${detail.detail.source.length - 1}px)/${detail.detail.source.length})`
								}"
								:class="[
									imageId == index ? 'footer-nav-active' : ''
								]"
								@click="footerNavTap(index)"
							></em>
						</dt>
						<dd><img src="~/static/img/logo2.png"></dd>
						<dd></dd>
						<dd></dd>
						<dd></dd>
					</dl>
				</div>
			</div>

    </div>
</template>

<script>
	import { storyList } from '~/assets/getData'
	export default {
	  head: {
	    title: '安厨故事'
	  },
	  data () {
      return {
        storyId: this.$route.params.id, 	// 第几个故事 
        detail: {},
        imageId: 0, 											// 轮播到第几张图片 从0开始
        footerSign: false
      }
		},
		validate ({ params }) {
		  return /^\d+$/.test(params.id)
		},
		computed: {
			// 下一个故事id
      nextStoryId () {
      	let [id,len] = [1, storyList().length]
      	if(this.storyId >= len){
      		id = 1
      	}else{
      		id = Number(this.storyId) + 1
      	}
      	return id
      }
    },
	  created () {
	  	const data = storyList()
	  	this.detail = data[this.storyId - 1]
	    // console.log(detail.detail.source.length)
	  },
	  methods: {

	  	// 左按钮
    	leftTap () {
    		if(this.imageId <= 0 ){
    			this.imageId = this.detail.detail.source.length - 1
    		}else{
    			this.imageId --
    		}
    	},

    	// 右按钮
    	rightTap () {
    		if(this.imageId >= this.detail.detail.source.length -1){
    			this.imageId = 0
    		}else{
    			this.imageId ++
    		}
    	},

    	// 滑过底部
    	footerOver () {
    		this.footerSign = true
    		console.log(1111)
    	},
    	// 滑出底部
    	footerOut () {
    		this.footerSign = false
    		console.log(222222222)
    	},
    	footerNavTap (index) {
    		this.imageId = index
    	}
    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'storyDetail';
	.#{$class-pre}{
		&-wrap{
			width: 100%;
			height: calc(100% - 103px);
			padding-top: 9px;
			box-sizing:border-box;
		}
		&-banner{
			height: 95.5%;
			overflow: hidden;
			&-list{
				width: 72.5%;
				height: 100%;
				float: left;
				position: relative;
				.header{
					position: absolute;
					top: 0;
					left: 0;
					width:100%;
					height: 6%;
					background: rgba(255,255,255,0.80);
					z-index: 99;
					text-align: right;
					a{
						display: inline-block;
						height: 100%;
						width: 165px;
						text-align: center;
						position: relative;
						cursor: pointer;
						color: #375D77;
						i{
							position: absolute;
							top: 50%;
							left: 50%;
							transform:translate(-50%,-50%);
							white-space:nowrap;
							em{
								font-family:'Microsoft YaHei','PingFangSC-Light';
							}
							
						}
						&:hover{
							background: #375D77;
							color: #fff;
						}
					}
				}
				.banner{
					width: 100%;
					height: 100%;
					overflow: hidden;
					position: relative;
					
					i{
						position: absolute;
						top: 50%;
						margin-top: -35px;
						width: 70px;
						height: 70px;
						color: #fff;
						background: rgba(0,0,0,0.20);
						border-radius: 100%;
						line-height: 70px;
						text-align: center;
						font-size: 20px;
						cursor: pointer;
						&:hover{
							background: #EA5614;
						}
					}
					.left{
						left: 2.7%;
					}
					.right{
						right: 2.7%;
					}
					.list{
						width: 100%;
						height: 100%;

						opacity: 0;
						transition: opacity .2s;

						position: absolute;
						top: 0;
						left: 0;
						img{
							height: 100%;
							width: auto;
						}
					}
					&-list-actile{
						opacity: 1!important;
					}
				}
			}
			&-text{
				width: 27.5%;
				height: 100%;
				background: #fff;
				float: left;
				box-sizing:border-box;
				padding: 25% 26px 0;
				.title{
					font-size: 23px;
					color: #375D77;
					line-height: 34px;
					position: relative;
					padding-bottom: 10px;
					&:after{
						content:"";
						position: absolute;
						width: 46px;
						height: 2px;
						background: #EA5614;
						bottom: 0;
						left: 0;
					}
				}
				.number{
					font-family: Dense-Regular;
					font-size: 66px;
					color: #375D77;
					line-height: 66px;
					padding: 30px 0 30px;
				}
				.text{
					font-size: 16px;
					color: #375D77;
					line-height: 26px;
				}
			}
		}
		&-footer{
			height: 4.5%;
			background: #333;
			position: relative;
			.footer{
				z-index: 10;
				text-align: center;
				height: 100%;
				cursor: pointer;
				span{
					display: block;
					position: relative;
					height: 100%;
					z-index: 99;
					background: #E5E5E5;
					em{
						font-size: 14px;
						position: absolute;
				    top: 50%;
				    left: 50%;
				    transform: translate(-50%,-50%);
				    i:nth-child(1){
				    	margin-right:36px;
				    }
					}
				}
				dl{
					position: absolute;
					/*top: -265px;*/
					top: -10px;
					background: rgba(255,255,255,0.90);
					width: 100%;
					height: 10px;
					z-index: 9;
					overflow: hidden;
					dt{
						float: left;
						overflow: hidden;
						width: 100%;
						height: 10px; 
						background: transparent;
						position: relative;
						.footer-nav-active{
							background: #EA5614;
						}
						em{
							float: left;
							margin-right: 4px;
							height: 100%;
							background: rgba(0,0,0,0.40);
							transition: background .2s;
							&:last-child{
								margin-right: 0;
							}
						}
					}
				}
			}
		}
	}
</style>