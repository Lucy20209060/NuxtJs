<template>
  <section class="agricultural-page_wrap">
    <div class="agricultural-header">
    	<img :src="agriculData.header.img" alt="">
    	<p>
    		<i>{{agriculData.header.title}}</i>
    	</p>
    </div>

    <div class="agricultural-team">
    	<underlineTitle :title="agriculData.team.title" size="18px" />
    	<p>{{agriculData.team.describe}}</p>
    </div>

  </section>
</template>

<script>
	import { agriculData } from '~/assets/getData'
	import underlineTitle from '~/components/underlineTitle'
	export default {
	  head: {
	    title: '县域农业电商服务'
	  },
	  data () {
      return {
        agriculData:{}
      }
		},
	  components: {
      underlineTitle
    },
    created () {
    	const data = agriculData()
    	console.log(data)
    	this.agriculData = data
    },
    mounted(){
			
	  },
    methods: {

    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'agricultural';
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
				padding: 40px 0 20px;
			}
		}
	}
</style>