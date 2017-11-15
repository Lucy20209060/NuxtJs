<template>
  <section class="cooperation-page_wrap">
    <iconTitle title="政府<br>合作" />

    <div class="cooperation-news" v-for="(site,index) in cooperData" :key="index">
    	<dl>

    		<dt>
    			<img :src="site.image" alt="">
    			<p>
    				<i>{{site.site.CHtitle}}</i>
    				<i>{{site.site.ENtitle}}</i>
    			</p>
    		</dt>

    		<dd>
    			<a 
	    			v-for="(news,indexs) in site.currentNews.news" 
	    			:key="indexs"
	    			:href="news.link"
	    			target="_blank" 
    			>
    				<img :src="news.img" alt="">
    				<i>{{news.title}}</i>
    				<span>{{news.describe}}</span>
    			</a>

    			<button 
    				@click="getPageNews(index)"
    				:class="[
    					site.currentNews.currentPage >= site.currentNews.allPage - 1 ? 'notMews' : ''
    				]"
    			>查看更多</button>
    		</dd>

    	</dl>
    </div>

  </section>
</template>

<script>
	import { cooperationData } from '~/assets/getData'
	import { getNews } from '~/assets/function'
	import iconTitle from '~/components/iconTitle'
	export default {
	  head: {
	    title: '政府合作'
	  },
	  data () {
      return {
        cooperData:[]
      }
		},
	  components: {
      iconTitle
    },
    created () {
    	this.cooperData = cooperationData()
    	console.log(this.cooperData)
    },
    mounted(){
			this.init()
	  },
    methods: {
    	/*
				查看更多 按钮
				站点 0 --> ...
    	*/
    	getPageNews (site) {
    		// 当前站点数据
    		const data = this.cooperData[site]
    		// 当前页数
    		const currentPage = data.currentNews.currentPage + 1
    		// 当前页数获取的数据
    		const arr = getNews(data.news,currentPage,3)
    		// 与之前数据合并
    		data.currentNews.news = data.currentNews.news.concat(arr)
    		// 更新当前页数 并不需要判断当前页数多大
    		data.currentNews.currentPage = currentPage
    	},

    	// 初始化 把前三个新闻推入数组展示
    	init () {
				for(let i in this.cooperData){
					const data = this.cooperData[i]
					// 当前页
					data.currentNews.currentPage = 0
					// 清空当前数组
					data.currentNews.news = []
					// 总页数 向上取整
					data.currentNews.allPage = Math.ceil(data.news.length/3)
					// 获取第一页3条新闻数据
					const arr = getNews(data.news,0,3)
					data.currentNews.news = data.currentNews.news.concat(arr)
				}
			}
    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'cooperation';
	.#{$class-pre}{
		&-page_wrap{
			padding-top: 153px;
		}
		&-news{
			background: #fff;
			text-align: center;
			padding: 0 0 26px;
			&:nth-child(n + 3){
				padding: 46px 0 26px;
			}
			&:nth-child(odd){
				background: #F6F6F6;
			}
			&:hover{
				dt p{
					background: #129E83;
				}
			}

			dl{
				width: 1200px;
				height: auto;
				display: inline-block;
				&:after{
					content:".";
					display:block;
					height:0;
					clear:both;
					overflow:hidden;
					visibility:hidden;
				}
				dt{
					float: left;
					width: 392px;
					height: 296px;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					p{
						position: absolute;
						background: #D0D0D0;
						padding: 30px 14px 12px;
						z-index: 3;
						top: -6px;
						left: 10%;
						i{
							text-align: left;
							line-height: 16px;
							display: block;
							color: #fff;
						}
					}
				}
				dd{
					float: left;
					width: calc(100% - 392px);
					padding: 0 0 30px 10px;
					box-sizing:border-box;
					text-align: left;
					position: relative;
					a{
						width: calc((100% - 20px)/3);
						height: 296px;
						display: inline-block;
						margin-right: 9px;
						margin-bottom: 26px;
						overflow: hidden;
						img{
							width: auto;
							height: 130px;
						}
						i{
							line-height: 22px;
							padding: 14px 16px 10px;
							display: block;
							position: relative;
							&:after{
								position:absolute;
								bottom: -6px;
								left: 16px;
								content: '';
								width: 20px;
								height: 1px;
								background: #375D77;
							}
						}
						span{
							font-size: 12px;
							line-height: 20px;
							padding: 18px 16px 0;
							display: block;
						}
						&:nth-child(3n+3){
							margin-right: 0;
						}
						background: #FFFFFF;
						box-shadow: 0 0 8px 0 rgba(217,217,217,0.60);
					}
					button{
						position: absolute;
						bottom: 0;
						right: 0;
						background: #129E83;
						border-radius: 30px;
						padding: 6px 20px;
						border:0;
						color: #fff;
					}
					.notMews{
						background: #E7E7E7;
						color: #C2C2C2;
					}
				}
			}
		}

	}
</style>