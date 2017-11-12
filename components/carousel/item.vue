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
    		itemStyle:{},			// 基础样式
    		currentStyle:{}, 	// 当前样式
    	}
    },
    watch:{
    	'currentActive':'positionSign'
    },
	  mounted () {
	  	this.positionSign()
	  },
    methods: {
	    positionSign () {
	    	let sign = 'c'

	    	const color = 111 + this.keys*101

	    	// 数组长度
	    	const itemLen = this.$parent.$children.length

	    	if(this.keys == this.currentActive){
	    		sign = 'c'
	    	}
	    	else if(this.keys == (this.currentActive+1 == itemLen ? 0 : this.currentActive+1)){
	    		sign = 'd'
	    	}
	    	else if(this.keys == (this.currentActive-1 == -1 ? itemLen-1 : this.currentActive-1)){
	    		sign = 'b'
	    	}
	    	else{
	    		sign = 'a'
	    	}
	    	// else if(this.keys == (this.currentActive+2 >= itemLen ? this.currentActive+2-itemLen : this.currentActive+2)){
	    	// 	sign = 'a'
	    	// }
	    	// else{
	    	// 	sign = 'a'
	    	// }


	    	// 当前
	    	if(sign == 'c'){
	    		this.currentStyle = {}
	    	}
	    	// 右边的
	    	else if(sign == 'd'){
	    		this.currentStyle = {
	    			transform:`translateX(${this.$parent.itemWidth*0.585}px) scale(.83)`,
		    		msTransform: `translateX(${this.$parent.itemWidth*0.585}px) scale(.83)`,
				    webkitTransform: `translateX(${this.$parent.itemWidth*0.585}px) scale(.83)`,
				    zIndex:1
	    		}
	    	}
	    	// 左边的
	    	else if(sign == 'b'){
	    		this.currentStyle = {
	    			transform:`translateX(-${this.$parent.itemWidth*0.585}px) scale(.83)`,
		    		msTransform: `translateX(-${this.$parent.itemWidth*0.585}px) scale(.83)`,
				    webkitTransform: `translateX(-${this.$parent.itemWidth*0.585}px) scale(.83)`,
				    zIndex:2
	    		}
	    	}
	    	// 隐藏部分
	    	else if(sign == 'a'){
	    		this.currentStyle = {
	    			transform:`translateX(0) scale(.63)`,
		    		msTransform: `translateX(0) scale(.63)`,
				    webkitTransform: `translateX(0) scale(.63)`,
				    zIndex:1
	    		}
	    	}
	    	// // 右边的 隐藏部分
	    	// else if(sign == 'e'){
	    	// 	this.currentStyle = {
	    	// 		transform:`translateX(${this.$parent.itemWidth*1.415}px) scale(.63)`,
		    // 		msTransform: `translateX(${this.$parent.itemWidth*1.415}px) scale(.63)`,
				  //   webkitTransform: `translateX(${this.$parent.itemWidth*1.415}px) scale(.63)`,
				  //   zIndex:1
	    	// 	}
	    	// }


    	this.itemStyle =this.merge({
    		width: this.$parent.itemWidth +'px',
    		height:this.$parent.itemHeight +'px',
    		marginLeft:`-${this.$parent.itemWidth/2}px`,
    		backgroundColor:`#${color}`,

    		transform:`translateX(0) scale(1)`,
    		msTransform: `translateX(0) scale(1)`,
		    webkitTransform: `translateX(0) scale(1)`,
		    zIndex:3,
		    transition: `all 1s`
    	},this.currentStyle)








	    },
	    // 合并对象
	    merge (obj1,obj2) {
	    	let [tem1,tem2] = [obj1,obj2];
	    	for(let i in tem2){
	    		tem1[i] = tem2[i]
	    	}
	    	return tem1;
	    }
	  }
	}
</script>

<style scoped>
	.carousel_item_wrap{
		overflow: hidden;
		display: inline-block;
		position: absolute;
		left: 50%;
	}
	.currentActive{

	}
</style>