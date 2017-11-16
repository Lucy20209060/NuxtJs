<template>
  <div class="app">
    <headerPart />
    <nuxt/>
  </div>
</template>
<script>
import headerPart from '~/components/Header'

export default {
  components: {
    headerPart
  }
}
</script>
<style>
  .app,#__nuxt{
    height: 100%;
  }
</style>