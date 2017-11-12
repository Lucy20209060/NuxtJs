<template>
  <section class="join-page_wrap">

  	<!-- 
  		carouselMain 包裹标签 
  			itemWidth itemHeight 内容块的宽高 必需
  	-->

    <carouselMain :itemWidth="536" :itemHeight="600" :interval="3000">
    	<template scope="props">
	    	<carouselItem v-for="(item,index) in job" :key="index" :keys="index" :currentActive="props.currentActive">

	    		<dl class="join-item">
	    			<dt>
	    				<span>{{item.title.CHtitle}}</span>
	    				<i>{{item.title.ENtitle}}</i>
	    			</dt>
	    			<dd>
	    				<p>{{item.duty.title}}</p>
	    				<p v-for="(items,index) in item.duty.content" :key="index">{{`${index+1}、${items}`}}</p>
	    			</dd>
	    			<dd>
	    				<p>{{item.demand.title}}</p>
	    				<p v-for="(items,index) in item.demand.content" :key="index">{{`${index+1}、${items}`}}</p>
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
	export default {
	  head: {
	    title: '能者来战'
	  },
	  data () {
      return {
        job:[
        	{
        		status:true,
        		title:{
        			CHtitle:'1前端开发工程师',
        			ENtitle:'Front end development engineer'
        		},
        		duty:{
        			title:'岗位职责：',
        			content:[
        			'负责Web前端页面重构、业务逻辑，负责页面交互的技术设计、开发、代码优化等；',
							'编写、迭代通用JS组件；',
							'根据前端UI设计输出的设计稿进行页面的实现；',
							'根据功能需求，定义和优化产品用户体验及交互效果。'
						]
        		},
						demand:{
							title:'任职要求：',
							content:[
								'本科及以上学历，两年相关工作经验；',
								'精通HTML5、CSS3、JavaScript等Web前端开发技术，能写屏幕适配性强、兼容多种手机浏览器的前端页面代码；',
								'对类似于VueJS、ReactJS等前端MVC框架有过研究者优先；',
								'熟悉大型网站前端性能优化相关点；',
								'了解一门后台语言（如：NodeJS/Java等），有后台开发经验是加分项；',
								'学习能力强，有较好的沟通能力，能迅速融入团队 ；',
								'热爱前端技术、关注国内外各大技术论坛者优先。'
							]
						}
        	},
        	{
        		status:true,
        		title:{
        			CHtitle:'2前端开发工程师',
        			ENtitle:'Front end development engineer'
        		},
        		duty:{
        			title:'岗位职责',
        			content:[
        			'负责Web前端页面重构、业务逻辑，负责页面交互的技术设计、开发、代码优化等；',
							'编写、迭代通用JS组件；',
							'根据前端UI设计输出的设计稿进行页面的实现；',
							'根据功能需求，定义和优化产品用户体验及交互效果。'
						]
        		},
						demand:{
							title:'任职要求',
							content:[
								'本科及以上学历，两年相关工作经验；',
								'精通HTML5、CSS3、JavaScript等Web前端开发技术，能写屏幕适配性强、兼容多种手机浏览器的前端页面代码；',
								'对类似于VueJS、ReactJS等前端MVC框架有过研究者优先；',
								'熟悉大型网站前端性能优化相关点；',
								'了解一门后台语言（如：NodeJS/Java等），有后台开发经验是加分项；',
								'学习能力强，有较好的沟通能力，能迅速融入团队 ；',
								'热爱前端技术、关注国内外各大技术论坛者优先。'
							]
						}
        	},
        	{
        		status:true,
        		title:{
        			CHtitle:'3前端开发工程师',
        			ENtitle:'Front end development engineer'
        		},
        		duty:{
        			title:'岗位职责',
        			content:[
        			'负责Web前端页面重构、业务逻辑，负责页面交互的技术设计、开发、代码优化等；',
							'编写、迭代通用JS组件；',
							'根据前端UI设计输出的设计稿进行页面的实现；',
							'根据功能需求，定义和优化产品用户体验及交互效果。'
						]
        		},
						demand:{
							title:'任职要求',
							content:[
								'本科及以上学历，两年相关工作经验；',
								'精通HTML5、CSS3、JavaScript等Web前端开发技术，能写屏幕适配性强、兼容多种手机浏览器的前端页面代码；',
								'对类似于VueJS、ReactJS等前端MVC框架有过研究者优先；',
								'熟悉大型网站前端性能优化相关点；',
								'了解一门后台语言（如：NodeJS/Java等），有后台开发经验是加分项；',
								'学习能力强，有较好的沟通能力，能迅速融入团队 ；',
								'热爱前端技术、关注国内外各大技术论坛者优先。'
							]
						}
        	},
        	{
        		status:true,
        		title:{
        			CHtitle:'4前端开发工程师',
        			ENtitle:'Front end development engineer'
        		},
        		duty:{
        			title:'岗位职责',
        			content:[
        			'负责Web前端页面重构、业务逻辑，负责页面交互的技术设计、开发、代码优化等；',
							'编写、迭代通用JS组件；',
							'根据前端UI设计输出的设计稿进行页面的实现；',
							'根据功能需求，定义和优化产品用户体验及交互效果。'
						]
        		},
						demand:{
							title:'任职要求',
							content:[
								'本科及以上学历，两年相关工作经验；',
								'精通HTML5、CSS3、JavaScript等Web前端开发技术，能写屏幕适配性强、兼容多种手机浏览器的前端页面代码；',
								'对类似于VueJS、ReactJS等前端MVC框架有过研究者优先；',
								'熟悉大型网站前端性能优化相关点；',
								'了解一门后台语言（如：NodeJS/Java等），有后台开发经验是加分项；',
								'学习能力强，有较好的沟通能力，能迅速融入团队 ；',
								'热爱前端技术、关注国内外各大技术论坛者优先。'
							]
						}
        	}
        ]
      }
		},
	  components: {
      carouselMain,
      carouselItem
    },
	}
</script>

<style lang="scss" scoped>
	$class-pre:'join';
	.#{$class-pre}{
		&-page_wrap{
			text-align: center;
		}
		&-item{
			width: 100%;
			height: 100%;
			box-sizing:border-box;
			padding: 50px;
			text-align: left;
			dt{
				border-left: 2px solid #375D77;
				padding-left: 15px;
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
				padding-top: 26px;
			}
		}
	}
</style>