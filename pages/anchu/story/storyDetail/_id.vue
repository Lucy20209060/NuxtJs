<template>
    <div class="storyDetail-wrap">

			<div class="storyDetail-banner">
				<div class="storyDetail-banner-list">
					<p>
						<span></span>
						<span></span>
						<span></span>
					</p>
				</div>
				<dl class="storyDetail-banner-text">
					<dt class="title">他曾为几百斤梨一筹莫展<br>如今也上了你我的果盘</dt>
					<dd class="number">1/4</dd>
					<dd class="text">梨，这种水果不仅爽口汁多，还含有多种维生素和纤维素，被大众所喜爱。在大丰村，有一片20多亩的梨树，种植它们的人正是今天的主人翁——邵大伯。每年的7月左右邵大伯都会烦上一阵子，梨子丰收了，但随着年岁渐长，如今自己无力再每天奔波四处叫卖，销路就成了难题。</dd>
				</dl>
			</div>

			<div class="storyDetail-footer">
				
			</div>

    </div>
</template>

<script>
	export default {
	  head: {
	    title: '安厨故事'
	  },
	  data () {
      return {
        storyId:this.$route.params.id
      }
		},
		validate ({ params }) {
			// 参数校验
		  return /^\d+$/.test(params.id)
		},
	  created () {
	    console.log(this.$route)
	  }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'storyDetail';
	.#{$class-pre}{
		&-wrap{
			width: 100%;
			height: calc(100% - 104px);
		}
	}
</style>