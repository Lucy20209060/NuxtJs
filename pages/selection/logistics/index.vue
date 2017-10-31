<template>
    <div class="logistics-wrap">
      <div class="logistics">
      	<fourWorlds title="物流<br>体系" />
      </div>
    </div>
</template>

<script>
	import fourWorlds from '~/components/iconTitle'
	export default {
	  head: {
	    title: '物流体系'
	  },
	  components: {
	    fourWorlds
	  }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'logistics';
	.#{$class-pre}{
		margin: 38px auto;
    text-align: center;
    width: 1200px;
	}
</style>