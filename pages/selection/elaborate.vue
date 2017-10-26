<template>
    <div class="elaborate-wrap">
      <div class="elaborate" v-for="(item,index) in elaborate.introduce" :key="index">
      	<fourWorlds :title="item.title" />
      	<span>{{item.content}}</span>
      	<p>
      		<img v-for="(items,indexs) in item.images" :key="indexs" :src="require(`~\/static\/img\/elaborate\/${items}`)">
      	</p>
      </div>

      <div class="case-wrap">
      	<div class="case">	
      		<underlineTitle title="安厨案例" size="24px" />
      		<div>
      			<p class="case1">
      				<!-- 安厨案例 图片 标题 描述 -->
      				<span class="leftSharp">
      					<em class="img"><img :src="require(`~\/static\/img\/elaborate\/${elaborate.case[0].img}`)"></em>
      					<em class="describe">
      						<i>{{elaborate.case[0].title}}</i>
      						<i>{{elaborate.case[0].describe}}</i>
      					</em>
      				</span>
      				<span class="rightSharp">
      					<em class="describe">{{elaborate.case[1].title}}{{elaborate.case[1].describe}}</em>
      					<em class="img"><img :src="require(`~\/static\/img\/elaborate\/${elaborate.case[1].img}`)"></em>
      				</span>
      			</p>
      			<p class="case2">
      				<span class="topSharp">
	      				<em class="img"><img :src="require(`~\/static\/img\/elaborate\/${elaborate.case[2].img}`)"></em>
	      				<em class="describe">{{elaborate.case[2].title}}{{elaborate.case[2].describe}}</em>
      				</span>
      			</p>
      			<p class="case1">
      				<span class="rightSharp">
      					<em class="describe">{{elaborate.case[3].title}}{{elaborate.case[3].describe}}</em>
      					<em class="img"><img :src="require(`~\/static\/img\/elaborate\/${elaborate.case[3].img}`)"></em>
      				</span>
      				<span class="leftSharp">
      					<em class="img"><img :src="require(`~\/static\/img\/elaborate\/${elaborate.case[4].img}`)"></em>
      					<em class="describe">{{elaborate.case[4].title}}{{elaborate.case[4].describe}}</em>
      				</span>
      			</p>
      		</div>
      	</div>
      </div>
    </div>
</template>

<script>
	import fourWorlds from '~/components/iconTitle'
	import underlineTitle from '~/components/underlineTitle'

	import { elaborateData } from '~/assets/getData'
	export default {
	  head: {
	    title: '精雕细琢'
	  },
		data () {
			return {
        elaborate: {}
      }
		},
	  components: {
	    fourWorlds,
	    underlineTitle
	  },
	  created () {
	    const data = elaborateData()
	    this.elaborate = data
	    console.log(this.elaborate)
	  }
	}
</script>

<style lang="scss" scoped>
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
		div{
			width: 100%;
			overflow: hidden;
			margin-top: 28px;
			p{
				float: left;
				height: 480px;
				span{
					display: block;
					position: relative;
				}
				.img{
					/*border: 4px solid transparent;
					box-sizing:border-box;*/
				}
				/*滑过图片 文字背景的过渡*/
				img{
					display: block;
					width: 100%;
					height: 100%;
					transform:scale(1);
					filter: grayscale(1);
    			transition: all 1s;
				}
				.describe{
					background: #EEEFF6;
					font-family: PingFangSC-Regular;
					font-size: 18px;
					color: #375D77;
					transition: all 1s;
					padding: 20px 28px;
					box-sizing:border-box;
				}
				span:hover{
					.img img{
						transform:scale(1.1);
						filter: grayscale(0);
					}
					.describe{
						background: #129e83;
						color: #fff;
					}
				}
				.leftSharp:hover{
					&:after{
						border-right-color:#129e83;
					}
				}
				.rightSharp:hover{
					&:after{
						border-left-color:#129e83;
					}
				}
				.topSharp:hover{
					&:after{
						border-bottom-color:#129e83;
					}
				}
			}
		}
		.case1{
			width: 480px;
			span{
				height:50%;
				.img{
					float: left;
					width: 50%;
					height: 100%;
    			overflow: hidden;
				}
				.describe{
					float: left;
					width: 50%;
					height: 100%;
				}
			}
		}
		.case2{
			width: 240px;
			span{
				width: 100%;
				height: 100%;
			}
			.img{
				display: block;
				width: 100%;
				height: 50%;
				overflow: hidden;
			}
			.describe{
				display: block;
				width: 100%;
				height: 50%;
			}
		}
	}
	.leftSharp:after{
		content:"";
		position: absolute;
		top: 50%;
		margin-top: -8px;
		left: 50%;
		margin-left: -16px;
		border: 8px solid transparent;
		border-right-color:#EEEFF6;
		z-index: 99;
		transition: all 1s;
	}
	.rightSharp:after{
		content:"";
		position: absolute;
		top: 50%;
		margin-top: -8px;
		left: 50%;
		border: 8px solid transparent;
		border-left-color:#EEEFF6;
		z-index: 99;
		transition: all 1s;
	}
	.topSharp:after{
		content:"";
		position: absolute;
		top: 50%;
		margin-top:-16px;
		left: 50%;
		margin-left: -8px;
		border: 8px solid transparent;
		border-bottom-color:#EEEFF6;
		z-index: 99;
		transition: all 1s;
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