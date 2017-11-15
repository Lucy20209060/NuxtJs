<template>
  <section class="reputation-page_wrap">
    <table>
    	<tbody>
    		<tr>
    			<td>
    				<p>{{reputaData.information.title}}</p>
    			</td>
    		</tr>
    		<tr>
    			<td class="td1">
						<myVideo :sources="reputaData.information.video.sources" :options="reputaData.information.video.options" />
    				<p>{{reputaData.allNews.title}}</p>

    				<div class="reputation-allnews">
    					<a v-for="(content,index) in reputaData.allNews.content" :key="index" href="content.link">
    						<dl>
    							<dt>
    								<span>{{content.time[1]}}</span>
    								<em>{{content.time[0]}}</em>
    								<i>{{content.time[2]}}</i>
    							</dt>
    							<dd>
    								<span>{{content.title}}</span>
    								<i>{{content.date}}</i>
    								<em>{{content.outline}}</em>
    							</dd>
    						</dl>
    					</a>
    				</div>
    			</td>
    			<td class="td2">
    				<p>{{reputaData.anchuNews.title}}</p>
    				<span v-for="(content,index) in reputaData.anchuNews.content" :key="index">
    					<a href="content.link">{{content.title}}</a>
    					<i>{{content.date}}</i>
    				</span>
    			</td>
    		</tr>
    	</tbody>
    </table>
  </section>
</template>

<script>
	import myVideo from '~/components/video'
	import { reputationData } from '~/assets/getData'
	export default {
	  head: {
	    title: '安厨声音'
	  },
    data () {
      return {
        reputaData:{}
      }
    },
    components: {
      myVideo
    },
    created () {
    	const data = reputationData()
      this.reputaData = data
      console.log(this.reputaData)
    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'reputation';
	.#{$class-pre}{
		&-page_wrap{
			text-align: center;
		}
		&-allnews{
			a{
				display: block;
				border-bottom: 1px solid #E8E9F4;
				background: #FFFFFF;
				margin-bottom: 24px;
				padding: 26px 20px;
				&:last-child{
					margin-bottom: 0;
					border-bottom: 1px solid transparent;
				}
				&:hover{
					box-shadow: 0 0 8px 0 rgba(214,214,214,0.50);
					border-bottom: 1px solid transparent;
				}
			}
			dl{
				overflow: hidden;
				dt{
					float: left;
					height: 78px;
					width: 60px;
					box-sizing:border-box;
					border: 1px solid #129E83;
					padding: 8px 10px;
					text-align: right;
					span,em,i{
						display: block;
						font-size: 12px;
					}
					span{
						font-size: 20px;
						position: relative;
						&:after{
							position:absolute;
							content: '';
							width: 10px;
							height: 1px;
							background:  #375D77;
							bottom: 0;
							right: 2px;
						}
					}
				}
				dd{
					float: left;
					width: calc(100% - 60px);
					padding-left: 16px;
					box-sizing:border-box;
				}
			}
		}
	}
	table{
		width: 1200px;
		margin: 0 auto;
		padding-top: 70px;
		
		text-align: left;
	}
	td{
		padding: 0;
		p{
			padding-bottom:40px;
			position: relative;
			&:after{
				position:absolute;
				content: '';
				width: 47px;
				height: 3px;
				background: #EA5614;
				bottom: 24px;
				left: 0;
			}
		}
	}
	.td1{
		width: 67.7%;
		vertical-align: top;
		padding-right: 10px;
	}
	.td2{
		width: 32.3%;
		vertical-align: top;
		padding: 20px 26px;
		background: #F6F6F6;
	}
	#app{
		padding-bottom: 76px;
	}
</style>