<template>
	<div>
	  <video style="width:100%;height:auto;" name="media">
		  <source :src="sources" type="video/mp4">
		</video>
		<i 
			class="iconfont" 
			:class="[
				playSign ? 'icon-zanting' : 'icon-bofang1'
			]" 
			@click="play_or_pause">
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
	div{
		position: relative;
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