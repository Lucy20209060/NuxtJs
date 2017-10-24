<template>
    <h2 :style="{fontSize:size}">
      {{title}}
    </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  h2{
    text-align: center;
    padding-bottom: 20px;
    color: #375D77;
    position: relative;
  }
  h2:after{
    position: absolute;
    content: "";
    width: 30px;
    height: 2px;
    background: #ea5614;
    bottom: 6px;
    left: 50%;
    margin-left: -15px;

  }
  
</style>