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
					<!-- 图片 视频 展示区 -->
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
							
							<!-- <vi v-if="item.type=='video'" :sources="item.link"></vi> -->

							<myVideo v-if="item.type=='video'" ref="myvideo" :sources="item.video.sources" :options="item.video.options"></myVideo>

						</div>
						<i :class="['left','iconfont','icon-zuojiantou',footerSign ? 'btn-active' : '']" @click="leftTap"></i>
						<i :class="['right','iconfont','icon-youjiantou',footerSign ? 'btn-active' : '']" @click="rightTap"></i>
					</div>
				</div>
				<!-- 描述 -->
				<dl 
					class="storyDetail-banner-text"
					:style="{
						background:`url(${detail.detail.source[imageId].backgroud}) no-repeat top center`
					}"
				>
					<dt class="title" v-html="detail.detail.title"></dt>
					<dd class="number">{{`${imageId + 1}/${detail.detail.source.length}`}}</dd>
					<dd class="text" v-html="detail.detail.source[imageId].describe"></dd>
				</dl>
			</div>
			
			<!-- 底部 -->
			<div class="storyDetail-footer" @mouseleave="footerLeave">
				<div class="footer">
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
						<!-- logo -->
						<dd class="logo">
							<img :src="require(`~\/static\/img\/${footerData.logo}`)">
						</dd>
						<!-- 联系我们 -->
						<dd class="link">
							<i>{{footerData.contact.title}}</i>
							<span v-for="(item,index) in footerData.contact.address" :key="index">
								<em>{{item.name}}</em>
								<i class="iconfont">&#xe69f;</i>
							</span>

						</dd>
						<!-- 二维码 -->
						<dd class="qrcode">
							<p v-for="(item,index) in footerData.qrCode" :key="index">
								<i>{{item.title}}</i>
								<em><img :src="require(`~\/static\/img\/qrCode\/${item.code}`)"></em>
							</p>
						</dd>
					</dl>

					<span 
						:class="[
								footerSign ? 'footer-copyright-active' : ''
						]"
					>
						<em @mouseover="footerOver">
							<i>Copyright © 1998 - 2016 Tencent. All Rights Reserved</i>
							<i>关于安厨</i>
						</em>
					</span>

				</div>
			</div>

    </div>
</template>

<script>
	import { storyList,footerData } from '~/assets/getData'
	import myVideo from '~/components/video'
	export default {
	  head: {
	    title: '安厨故事'
	  },
	  data () {
      return {
        detail: {}, 											// 安厨故事详情
        footerData: {}, 									// footer内容
        storyId: this.$route.params.id, 	// 第几个故事 
        imageId: 0, 											// 轮播到第几张图片 从0开始
        footerSign: false,
        video: {
          sources: [{
            src: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: false,
            volume: 0.6,
            poster: 'http://covteam.u.qiniudn.com/poster.png'
          }
        }
      }
		},
		components: {
      myVideo
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
	  	this.footerData = footerData()
	  	console.log(this.detail)
	  },
	  watch: {
	  	'imageId':'pauseVideo'
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
    	},
    	// 滑出底部
    	footerLeave () {
    		this.footerSign = false
    	},
    	footerNavTap (index) {
    		this.imageId = index
    	},

    	// 切换时 如果是视频并且正在播放 切换掉后将视频暂停
    	pauseVideo () {
    		if(this.$refs.myvideo && this.$refs.myvideo[0].state.playing){
    			this.$refs.myvideo[0].play()
    		}
    	}
    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'storyDetail';
	.#{$class-pre}{
		&-wrap{
			width: 100%;
			height: 100%;
			padding-top: 92px;
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
					z-index: 99;
					width:100%;
					height: 6%;
					background: rgba(255,255,255,0.80);
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

					.btn-active{
						top: 40%
					}
					i{
						position: absolute;

						top: 50%;
						transition: top .6s;

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
				padding: 2% 20px 0;
				background-size: 100% auto;
				/*filter: blur(15px);*/
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
					padding: 20px 0 20px;
				}
				.text{
					font-size: 12px;
					color: #375D77;
					line-height: 20px;
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

				.footer-copyright-active{
					background: #fff;
				}

				& > span{
					display: block;
					position: relative;
					height: 100%;
					z-index: 99;

					background: #E5E5E5;
					transition: background .6s;

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
				.footer-active{
					height: 190px;
					top: -190px;
				}
				dl{
					position: absolute;
					top: -10px;
					background: rgba(255,255,255,0.90);
					width: 100%;

					height: 10px;
					transition: all .6s;

					z-index: 99;
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
					dd{
						float: left;
						padding-top: 20px;
						height: 100%;
						box-sizing:border-box;
					}
					.logo{
						margin-left: 17%;
					}
					.link{
						margin-left: 5%;
						width: 220px;
						overflow: hidden;
						& > i{
							color: #129E83;
							float: left;
							width: 100%;
							text-align: left;
							padding-bottom: 10px;
						}
						span{
							float: left;
							color: #129E83;
							font-size: 14px;
							width: 50%;
							text-align: left;
							line-height: 24px;
							em{
								display: inline-block;
								width: 72%;
							}
							i{
								font-size: 12px;
							}
						}
					}
					.qrcode{
						margin-left: 5%;
						text-align: left;
						width: 520px;
						p:last-child{
							margin-right: 0;
						}
						p{
							display: inline-block;
							/*margin-right: 12.5%;*/
							width: 130px;
							i{
								display: block;
								color: #129E83;
								padding-bottom: 20px;
							}
							em{
								display: block;
								img{
									width: 66%;
									height: auto;
								}
							}
						}
						
					}
				}
			}
		}
	}

	/*媒体查询*/
  /*@media screen and (max-width: 1400px) {
    .storyDetail-banner-text{
    	padding: 4% 26px 0;
    }
  }*/
  @media screen and (max-width: 750px) {
    .storyDetail-banner-text{
    	padding: 0 26px 0;
    }
  }
</style>