<template>
	<div 
		class="carousel_wrap" 
		:style="{
			height: itemHeight + 'px',
			width: itemWidth*2 + 'px'
		}"
		@mouseover="carouselOver"
		@mouseout="carouselOut"
	>
	  <slot :currentActive="itemActive"></slot>
	  <i class="iconfont icon-zuojiantou" @click="leftClick"></i>
	  <i class="iconfont icon-youjiantou" @click="rightClick"></i>
	  <!-- <span 
		  :style="{
				height: itemHeight + 'px',
				width: itemWidth/2 + 'px',
				marginLeft:`-${itemWidth/4}px`,
			}"
	  ></span> -->
	</div>
</template>

<script>
	export default {
  	props: {
	    itemWidth:Number,
	    itemHeight:Number,
	    interval:Number
	  },
    data () {
    	return {
    		itemLen: 0,			// 子元素数组的长度
    		itemActive: 0,		// 当前
    		timer: null,
    		clicktag: 0

    	}
    },
    // created () {
      
    // },
	  mounted () {
	  	this.itemLen = this.$children.length
	  	this.setInterval()
	  },
	  destroyed () {
	  	clearInterval(this.timer)
	  },
    methods: {
    	// 左点击
    	leftClick () {
    		if (this.clicktag == 0) {
          this.clicktag = 1;
          this.itemActive <= 0 ? this.itemActive = this.itemLen - 1 : this.itemActive --
          setTimeout( () => { 
           	this.clicktag = 0
          }, 1000);
       	}
    	},
    	// 右点击
    	rightClick () {
    		if (this.clicktag == 0) {
          this.clicktag = 1;
          this.itemActive >= this.itemLen - 1 ? this.itemActive = 0 : this.itemActive ++
          setTimeout( () => { 
           	this.clicktag = 0
          }, 1000);
       	}
    	},
    	// 滑入
    	carouselOver () {
    		clearInterval(this.timer)
    	},
    	// 滑出
    	carouselOut () {
    		this.setInterval()
    	},
    	// 定时器
    	setInterval () {
		  	
		  	if(!this.interval){
		  		return false
		  	}
		  	this.timer = setInterval(() =>{
		  		this.itemActive >= this.itemLen - 1 ? this.itemActive = 0 : this.itemActive ++
	  		},this.interval)
    	},
    	tapIndex (index) {
    		this.itemActive = index
    	}
	  }
	}
</script>

<style lang="scss" scoped>
	.carousel_wrap{
		position: relative;
		display: inline-block;
	}
	.iconfont{
		display: block;
		width: 80px;
		height: 80px;
		position: absolute;
		top: 50%;
		margin-top: -40px;
		text-align: center;
		line-height: 80px;
		font-size: 30px;
		cursor: pointer;
		color: #375D77;
		opacity: .6;
		&:hover{
			opacity: 1;

		}
	}
	.icon-zuojiantou{
		left: -100px;
	}
	.icon-youjiantou{
		right: -100px;
	}
</style>