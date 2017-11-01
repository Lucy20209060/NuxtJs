<template>
    <div class="event-wrap">
      <div class="event-banner">
      	<img :src="require(`~\/static\/img\/elaborate\/${event.banner}`)">
      </div>

      <div class="event-content">
      	<dl 
      		v-for="(item,index) in event.eventCont" 
      		:key="index"
      		@mouseover="dlMouseEnter(index)"
      		ref='navDl'
      	>
      		<dt :class="[ index == eventDlSign ? 'event-dl-active' : '' ]">
      			<i>{{item.year}}</i>
      			<em>{{item.lunar}}</em>
      		</dt>
      		<dd 
      			v-for="(items,indexs) in item.event"
      			:key="indexs"
      			:style="{
      				'opacity':1 - Math.abs(index - eventDlSign) * 0.2
      			}"
      		>
      			<i>
      				<em>{{items.title}}</em>
      				<em>{{item.year}}</em>
      			</i>
      			<span>{{items.content}}</span>
      		</dd>
      	</dl>

				<!-- 事记楼梯 -->
				<div class="event-nav" v-show="scrollTop >= 568">
					<p 
						v-for="(item,index) in event.eventCont" 
						:key="index"
						:class="[
							index == eventDlSign ? 'event-nav-active' : ''
						]"
						@mouseover="dlMouseEnter(index)"
						@click="navClick(index)"
					>
						<i>{{item.year}}</i>
						<em>大事记</em>
					</p>
				</div>
				<!-- 回到顶部 -->
				<i class="event-top iconfont" @click="goTop(0)"  v-show="scrollTop >= 568">&#xe6a6;</i>

      </div>

    </div>
</template>

<script>
	import { eventData } from '~/assets/getData'
	export default {
	  head: {
	    title: '安厨事记'
	  },
	  data () {
      return {
        event: {},
        eventDlSign: 0,
        scrollTop:0
      }
    },
    created () {
      const data = eventData()
      this.event = data      
    },
    mounted(){
			window.addEventListener('scroll', this.getScroll);
	  },
    methods: {
    	// 获取滚动条高度
    	getScroll () {
    		this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    	},
      dlMouseEnter (index) {
      	this.eventDlSign = index
      },
      dlMouseOut () {
      	this.eventDlSign = 0
      },

      // 回到顶部
      goTop (range) {
      	if(document.documentElement.scrollTop){
      		document.documentElement.scrollTop = range
      		return false
      	}
      	if(window.pageYOffset){
      		window.pageYOffset = range
      		return false
      	}
      	if(document.body.scrollTop){
      		document.body.scrollTop = range
      		return false
      	}
      },
      navClick (index) {
      	this.eventDlSign = index
      	const offsetTop = this.$refs.navDl[index].offsetTop + 568
      	this.goTop(offsetTop)
      }
    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'event';
	.#{$class-pre}{
		&-banner{
			width: 100%;
			height: 420px;
			overflow: hidden;
			img{
				width: 100%;
				height: auto;
				display: block;
			}
		}
		&-content{
			width: 1200px;
			min-height: 500px;
			margin:110px auto 0;
			box-sizing:border-box;
			padding: 0 120px;
			position: relative;
			.event-dl-active{
				background: #129e83;
				color: #fff;
			}
			dt{
				display: inline-block;
				width: 72px;
				height: 72px;
				margin: 0 0 16px 49px;
				padding: 12px 0;
				box-sizing:border-box;
				border-radius: 100%;
				font-family: Dense-Regular;
				position: relative;
				z-index: 99;
				text-align: center;
				color: #129E83;
				letter-spacing: 0;

				background: #fff;
				transition: all .2s;

				i{
					font-size: 22px;
					display: block;
				}
				em{
					font-size: 12px;
					display: block;
				}
			}
			dd{
				font-family: Dense-Regular;
				color: #C6C6C6;
				padding: 12px 0;
				position: relative;
				transition: all .2s;
				&:after{
					content:".";
					display:block;
					height:0;
					clear:both;
					overflow:hidden;
					visibility:hidden;
				}
				&:hover{
					color: #129E83;
					i:after{
						background: #129E83;
					}
					span{
						font-size: 16px;
						color: #129E83;
					}
				}
				i{
					float: left;
					width: 51px;
					text-align: right;
					padding: 10px;
					position: relative;
					&:before{
						content: "";
				    position: absolute;
				    height: 170%;
				    width: 2px;
				    top: -32px;
				    right: -14px;
				    background: #a0d8cd;
				    z-index: 1;
					}
					&:after{
						content: "";
				    position: absolute;
				    width: 10px;
				    height: 10px;
				    top: 32%;
				    right: -18px;
				    border-radius: 100%;
				    z-index: 2;

				    background: #a0d8cd;
				    transition: background .2s;
					}
					em{
						display: block;
						&:nth-child(1){
							font-size:20px;
							line-height: 20px;
						}
						&:nth-child(2){
							font-size:12px;
							line-height: 12px;
						}
					}
				}
				span{
					float: left;
					padding: 10px;
					margin-left: 40px;
					max-width: 80%;
					background: #F6F6F6;
					border-radius: 4px;
					color: #BBBBBB;
					line-height: 22px;

					font-size: 14px;
					transition: all .2s;
				}
			}

		}
		&-nav{
			position: fixed;
			width: 82px;
			bottom: 40%;
			left: 50%;
			margin-left: 476px;
			background: #fff;
			font-size: 22px;
			color: #129E83;
			cursor: pointer;
			text-align: center;
			p{
				background: #F3F3F3;
				border-top: 1px solid #fff;
				height: 30px;
				overflow: hidden;
				transition: all .1s;
				i{
					display: block;
					font-size: 22px;
					font-family: "Dense-Regular";
					line-height: 32px;
				}
				em{
					display: block;
					color: #fff;
					font-size: 16px;
					line-height: 42px;
					text-align: left;
					padding-left: 10px;
				}
			}
			.event-nav-active{
				height: 82px;
				background: #129e83;
				color: #fff;
				i{
					line-height: 39px;
					text-align: left;
					padding-left: 10px;
					position: relative;
					&:after{
						content: "";
				    position: absolute;
				    bottom: -2px;
				    left: 10px;
				    width: 15%;
				    height: 1px;
				    background: #fff;
					}
				}
			}
		}
		&-top{
			position: fixed;
			width: 40px;
			height: 40px;
			bottom: 40%;
			left: 50%;
			margin-left: 561px;
			background: rgba(0,0,0,0.20);
			color: #fff;
			cursor: pointer;
			text-align: center;
			line-height: 40px;
			transform:rotate(-90deg);
		}
	}
</style>