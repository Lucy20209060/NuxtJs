<template>
  <section class="base-page_wrap">
    <div class="base-banner">
    	<img :src="baseData.banner" alt="">
    </div>

    <div class="base-garden">
    	<p v-html="baseData.garden.describe"></p>
    	<div class="base-garden-image">
    		<span v-for="(gif,index) in baseData.garden.gif" :key="index">
    			<img :src="gif" alt="">
    		</span>
    	</div>
    </div>

    <div class="base-certificate">
    	<p v-html="baseData.certificate.describe"></p>
    </div>

  </section>
</template>

<script>
	import { baseData } from '~/assets/getData'
	export default {
	  head: {
	    title: '农业基地'
	  },
	  data () {
	    return {
	      baseData:{}
	    }
		},
	  components: {
	    
	  },
	  created () {
	  	const data = baseData()
	  	console.log(data)
	  	this.baseData = data
	  },
	  mounted(){
			
	  },
	  methods: {

	  }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'base';
	.#{$class-pre}{
		&-banner{
			height: 464px;
			width: 100%;
			overflow: hidden;
			img{
				width: 100%;
				height: auto;
			}
		}
		&-garden{
			width: 1200px;
			margin: 0 auto;
			padding: 90px 0 170px;
			text-align: center;
			p{
				width: 770px;
				display: inline-block;
				font-size: 14px;
				font-family: PingFangSC-Regular;
			}
			&-image{
				width: 1200px;
				height: auto;
				margin: 0 auto;
				text-align: left;
				padding-top: 86px;
				span{
					display: inline-block;
					width: 220px;
					height: auto;
					margin-right: 106px;
					&:last-child{
						margin-right: 0;
					}
				}
				img{
					width: 100%;
					height: auto;
				}
			}
		}
		&-certificate{
			width: 1200px;
			margin: 0 auto;
			text-align: center;
			p{
				width: 770px;
				display: inline-block;
				font-size: 14px;
				font-family: PingFangSC-Regular;
			}
		}
	}
</style>