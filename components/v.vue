<template>
	<div class="video-wrap">
	  <video name="media">
		  <source :src="sources" type="video/mp4">
		</video>
		<i 
			class="iconfont"  
			@click="play_or_pause">
			
			<!-- 暂停图标 -->
			<svg class="__cov-contrl-play-btn-icon" v-show="!playSign" viewBox="0 0 47 57" version="1.1" xmlns="http://www.w3.org/2000/svg">
	            <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
	            <title>Triangle 1</title>
	            <desc>Created with Sketch.</desc>
	            <defs></defs>
	            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                <polygon id="Triangle-1" stroke="#FFFFFF" fill="#FFFFFF" points="1 56 1 1 47 28.5"></polygon>
	            </g>
	        </svg>

			<!-- 播放图标 --> 
	        <svg class="__cov-contrl-play-btn-icon" v-show="playSign" viewBox="0 0 15 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
	            <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
	            <title>Combined Shape</title>
	            <desc>Created with Sketch.</desc>
	            <defs>
	                <path d="M0,0.979149244 L5,0.979149244 L5,22 L0,22 L0,0.979149244 Z M10,0.979149244 L15,0.979149244 L15,22 L10,22 L10,0.979149244 Z" id="path-1"></path>
	                <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="15" height="21.0208508" fill="white">
	                    <use xlink:href="#path-1"></use>
	                </mask>
	            </defs>
	            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                <use id="Combined-Shape" stroke="#FFFFFF" mask="url(#mask-2)" stroke-width="2" fill="#FFFFFF" xlink:href="#path-1"></use>
	            </g>
	        </svg>




		</i>

	</div>
</template>

<script>
	export default {
	  head: {
	    title: '售后服务'
	  },
  	props: {
	    sources:String
	  },
	  mounted () {
	    this.init()
	  },
    data () {
    	return {
    		videoEl:'',
    		playSign: false		// 播放状态 true播放 false暂停
    	}
    },
    methods: {
	    init () {
	      this.videoEl = this.$el.getElementsByTagName('video')[0]

	      console.log(this.videoEl)
	    },
	    play_or_pause () {
	    	if(this.playSign){
	    		this.videoEl.pause()
	    		this.playSign = false
	    	}else{
	    		this.videoEl.play()
	    		this.playSign = true
	    	}

	    },
	    play () {
	    	this.videoEl.play()
	    },
	    pause () {
	    	this.videoEl.pause()
	    }
	  }
	}
</script>

<style scoped>
	.video-wrap{
		position: relative;
		height: 100%;
	}
	video{
		width: 100%;
		height: 100%;
	}
	.iconfont{
		width: 40px;
		height: 40px;
		position: absolute;
		z-index: 999;
		background: red;
		color: #fff;
		left: 50%;
		top: 50%;
		line-height: 40px;
		border-radius: 100%;
		text-align: center;
		background: rgba(255,255,255,0.02);
		border: 2px solid #FFFFFF;
		margin-left: -20px;
		margin-top: -20px;
	}
	.icon-bofang1{
		font-size: 20px;
	}
	.icon-zanting{
		font-size: 24px;
	}
</style>