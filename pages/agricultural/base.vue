<template>
  <section class="base-page_wrap">
    农业基地
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

	}
</style>