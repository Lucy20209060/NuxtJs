<template>
  <section class="train-page_wrap">
    <div class="train-header">
    	<img :src="trainData.header.img" alt="">
    	<p>
    		<i>{{trainData.header.title}}</i>
    	</p>
    </div>
		<!-- 电商资深名师团队，为更多人传道受业 -->
    <div class="train-team">
    	<underlineTitle :title="trainData.team.title" size="22px" />
    	<p>{{trainData.team.describe}}</p>

    	<dl class="train-team-people">
    		<dd v-for="(people,index) in trainData.team.people">
    			<div>
    				<img :src="people.portrait" alt="">
    			</div>
    			<span>
    				<i>{{people.name.CHname}}</i>
    				<em>{{people.name.ENname}}</em>
    				<sup></sup>
    			</span>
    			<p>{{people.describe}}</p>
    		</dd>
    	</dl>
    </div>
		<!-- 4大课程，打造农业电商人才摇篮 -->
    <div class="train-course">
    	<underlineTitle :title="trainData.course.title" size="22px" />
    	<div class="train-course-item">
	    	<dl v-for="(item,index) in trainData.course.QandA":key="index">
	    		<dt>
	    			<img :src="item.img" alt="">
	    		</dt>
	    		<dd>
	    			<i>{{`0${ index + 1 }`}}</i>
	    			<span>{{item.Q}}</span>
	    		</dd>
	    		<dd v-for="(A,index) in item.A" :key="index">{{A}}</dd>
	    		<dd>{{item.time}}</dd>
	    	</dl>
    	</div>
    </div>
		<!-- 8种提升，活学活用 -->
    <div class="train-promote">
    	<underlineTitle :title="trainData.promote.title" size="22px" />
    </div>

  </section>
</template>

<script>
	import { trainData } from '~/assets/getData'
	import underlineTitle from '~/components/underlineTitle'
	export default {
	  head: {
	    title: '电商培训'
	  },
	  data () {
      return {
        trainData:{}
      }
		},
	  components: {
      underlineTitle
    },
    created () {
    	const data = trainData()
    	console.log(data)
    	this.trainData = data
    },
    mounted(){
			
	  },
    methods: {

    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'train';
	.#{$class-pre}{
		&-header{
			width: 100%;
			height: auto;
			overflow: hidden;
			text-align: center;
			img{
				height: 456px;
				width: auto;
				display: inline-block;
			}
			p{
				text-align: center;
				margin: 0 auto;
				padding: 80px 0 120px;
				i{
					display: inline-block;
					width: 750px;
					font-size: 14px;
				}
			}
		}
		&-team{
			width: 1200px;
			height: auto;
			margin: 0 auto;
			text-align: center;
			font-size: 14px;
			p{
				padding: 40px 0 90px;
			}
			&-people{
				width: 1200px;
				background: #FFFFFF;
				dd{
					width: 330px;
			    height: 330px;
			    display: inline-block;
			    margin-right: 104px;
			    color: #777;
					&:last-child{
						margin-right: 0;
					}
					&:after{
						content:".";
						display:block;
						height:0;
						clear:both;
						overflow:hidden;
						visibility:hidden;
					}
					&:hover{
						box-shadow: 0 0 8px 0 #E6E6E6;
						sup{
							width: 28px;
						}
					}
					div{
						width: 178px;
						height: 100%;
						float: left;
						position: relative;
						img{
							position: absolute;
					    width: 197px;
					    height: 275px;
					    top: 55px;
					    left: -25px;
					    z-index: 3;
						}
					}
					span{
						float: left;
						width: calc(100% - 178px);
						text-align: left;
						padding: 30px 0 40px;
						position: relative;
						sup{
						  width: 0;
						  transition: width .3s;

					    height: 16px;
					    background: #129e83;
					    position: absolute;
					    right: 0;
					    top: 32px;
						}
						i{
							font-family: PingFangSC-Medium;
						}
						em{
							font-size: 14px;
						}
					}
					p{
						float: left;
				    width: calc(100% - 178px);
				    padding: 0 8px 0 0;
				    box-sizing: border-box;
				    line-height: 23px;
				    text-align: left;
				    font-family: PingFangSC-Light;
					}
				}
			}
		}
		&-course{
			padding-top: 150px;
			text-align: center;
			&-item{
				width: 1200px;
				margin: 0 auto;
				padding-top: 75px;
				text-align: left;
				dl{
					width: 280px;
					display: inline-block;
					img{
						width: 100%;
						height: auto;
					}
					&:hover{
						box-shadow: 0 0 8px 0 #E6E6E6;
					}
					margin-right: 26px;
					&:last-child{
						margin-right: 0;
					}
					dd{
						padding-left: 19px;
						padding-right: 19px;
						font-size: 14px;
						color: #375D77;
						line-height: 22px;
						padding-bottom: 24px;
						&:nth-of-type(1){
							padding-top:24px;
							padding-bottom: 40px;
							font-weight: 900;
						}
						i,span{
							display: block;
							line-height: 25px;
							font-family: PingFangSC-Medium;
						}
						span{
							position: relative;
							&:after{
								position:absolute;
								content: '';
								bottom: -15px;
								left: 0;
								width: 70px;
								height: 0;
								border-bottom: 3px solid #375D77;
							}
						}
					}
				}
			}
		}
		&-promote{
			padding-top: 116px;
		}
	}
</style>