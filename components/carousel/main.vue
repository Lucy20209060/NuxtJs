<template>
	<div class="carousel_wrap" 
	:style="{
		height: itemHeight + 'px',
		width: itemWidth*2 + 'px'
	}">
	  <slot :currentActive="itemActive"></slot>
	  <i class="iconfont icon-zuojiantou"></i>
	  <i class="iconfont icon-youjiantou"></i>
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
    		itemLen:0,			// 子元素数组的长度
    		itemActive:0,		// 当前
    		timer:null

    	}
    },
    created () {
    	
    },
	  mounted () {
	  	// console.log(this.$children.length)
	  	this.itemLen = this.$children.length

	  	if(!this.interval){
	  		return false
	  	}

	  	this.timer = setInterval(() =>{
	  		this.itemActive >= this.itemLen - 1 ? this.itemActive = 0 : this.itemActive ++
  		},this.interval)
	  },
    methods: {
    	leftTap () {
    		clearInterval(this.timer)
    	}
	  }
	}
</script>

<style lang="scss" scoped>
	.carousel_wrap{
		position: relative;
		display: inline-block;
		/*overflow: hidden;*/
		border:1px solid red;
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