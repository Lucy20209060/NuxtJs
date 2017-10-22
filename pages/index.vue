<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxtjs
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <nuxt-link to="/about">about</nuxt-link>
      <nuxt-link :to="{ name: 'mine'}">mine</nuxt-link>
      <i class="iconfont">&#xe6a3;</i>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.iconfont{
  font-size: 30px;
}

.links {
  padding-top: 15px;
}
</style>
