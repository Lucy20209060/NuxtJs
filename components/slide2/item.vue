<template>
	<div class="carousel_item_wrap" :style="itemStyle">
	  <slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'carouselItem',
  	    props: {
            keys:Number,
            currentActive:Number
        },
        data () {
            return {
                itemStyle:{},		// 基础样式
                currentStyle:{}, 	// 当前样式
            }
        },
        // watch:{
        // 	'currentActive':'positionSign'
        // },
        mounted () {
        // this.positionSign()
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
	.carousel_item_wrap{
        width: 20%;
        display: inline-block;
        line-height: 0;
        img{
            width:100%;
        }
    }
</style>