<template>
  <section class="selection-page_wrap">
    <i>{{selectionData}}</i>
  </section>
</template>

<script>
	// import axios from 'axios'
	export default {
	  head: {
	    title: '源头把控'
	  },
	  // async asyncData () {
	  //   const { data } = await axios.get('/api.php?s=api/index/category_products')
   //  	return {
   //  		data
   //  	}
	  // },
	  data () {
      return {
        selectionData: '源头把控'
      }
		},
	  created () {
	    this.getInit()
	  },
	  methods: {
      getInit() {
      	console.log(222)
      }
    }
	}
</script>