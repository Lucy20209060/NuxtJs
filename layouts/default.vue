<template>
  <div class="app">
    <headerPart />
    <nuxt/>
    <footerPart />
  </div>
</template>
<script>
import headerPart from '~/components/Header'
import footerPart from '~/components/Footer'

export default {
  components: {
    headerPart,
    footerPart
  }
}
</script>
<style>
  .app,#__nuxt{
    height: 100%;
  }
</style>
