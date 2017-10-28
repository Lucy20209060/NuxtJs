<template>
    <div class="story-wrap">
      <Banner :images="imgArr" :loop="true" time="3000" />
    </div>
</template>

<script>
	import Banner from '~/components/imgBanner'
	import { storyData } from '~/assets/getData'
	export default {
	  head: {
	    title: '安厨故事'
	  },
	  components: {
      Banner
    },
    data () {
	    return {
	      imgArr:[
	      	{
	      		img:'elaborate1.png'
	      	},
	      	{
	      		img:'elaborate2.png'
	      	},
	      	{
	      		img:'elaborate3.png'
	      	}
	      ]
	    }
	  },
	  created () {
	  	const data = storyData()
	  	this.imgArr = data.banner
	  },
	}
</script>

<style lang="scss" scoped>
	$class-pre:'story';
	.#{$class-pre}{
		&-wrap{
			width: 100%;
			height: 500px;

		}
	}
</style>