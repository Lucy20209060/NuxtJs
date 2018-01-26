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
    watch:{
    	'currentActive':'positionSign'
    },
	  mounted () {
	  	this.positionSign()
	  },
    methods: {
    	// 初始化
	    positionSign () {
	    	// 数组长度
	    	const itemLen = this.$parent.$children.length

	    	// 当前
	    	if(this.keys == this.currentActive){
	    		this.currentStyle = {}
	    	}
	    	// 左侧
	    	else if(this.keys == (this.currentActive+1 == itemLen ? 0 : this.currentActive+1)){
	    		this.currentStyle = {
	    			transform:`translateX(${this.$parent.itemWidth}px)`,
		    		msTransform: `translateX(${this.$parent.itemWidth}px)`,
				    webkitTransform: `translateX(${this.$parent.itemWidth}px)`,
				    zIndex:-3,
				    opacity:0,
				    // boxShadow: `0 0 6px 0 rgba(217,217,217,0.50)`
	    		}
	    	}
	    	// 右侧
	    	else if(this.keys == (this.currentActive-1 == -1 ? itemLen-1 : this.currentActive-1)){
	    		this.currentStyle = {
	    			transform:`translateX(-${this.$parent.itemWidth}px)`,
		    		msTransform: `translateX(-${this.$parent.itemWidth}px)`,
				    webkitTransform: `translateX(-${this.$parent.itemWidth}px)`,
				    zIndex:-3,
				    opacity:0,
				    // boxShadow: `0 0 6px 0 rgba(217,217,217,0.50)`
	    		}
	    	}
	    	// 隐藏部分
	    	else{
	    		this.currentStyle = {
	    			transform:`translateX(0)`,
		    		msTransform: `translateX(0)`,
				    webkitTransform: `translateX(0)`,
                    zIndex:-3,
                    opacity:0,
	    		}
	    	}

	    	this.itemStyle =this.merge({
	    		width: this.$parent.itemWidth + 'px',
	    		height:this.$parent.itemHeight + 'px',
	    		marginLeft:`-${this.$parent.itemWidth/2}px`,
	    		transform:`translateX(0)`,
	    		msTransform: `translateX(0)`,
			    webkitTransform: `translateX(0)`,
			    zIndex:100,
			    opacity:1,
			    // boxShadow: `0 0 8px 0 rgba(217,217,217,0.50)`,
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
		/* left: 50%; */
		/* background: #FFFFFF; */
		/* box-shadow: 0 0 8px 0 rgba(217,217,217,0.50); */
		box-sizing:border-box;
		cursor: pointer;
        text-align: left;
	}
</style>