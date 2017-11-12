<template>
  <section class="join-page_wrap">

  	<!-- 
  		carouselMain 包裹标签 
  			itemWidth itemHeight 内容块的宽高 必需
  	-->

    <carouselMain :itemWidth="536" :itemHeight="600" :interval="3000">
    	<template scope="props">
	    	<carouselItem v-for="(item,index) in storage" :key="index" :keys="index" :currentActive="props.currentActive">
	    		<p>{{item}}</p>
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
        storage: ['a','b','c','d','e','f','g']
      }
		},
	  components: {
      carouselMain,
      carouselItem
    },
	}
</script>

<style scoped>
	.join-page_wrap{
		text-align: center;
	}
</style>