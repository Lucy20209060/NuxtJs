<template>
  <section class="header">
    <div class="header-center">
      <div class="logo">
        
      </div>
      <ul class="nav">

        <nuxt-link 
          tag="li" 
          v-for="(item,index) in nav" 
          :to="{ name: item.link }" 
          key="index">

          <i v-html="item.ENTitle"></i>
          <span>{{item.ZNTitle}}</span>

        </nuxt-link>

      </ul>
    </div>
  </section>
    
</template>

<script>
  export default {
    data: () => {
      return {
        nav: [
          {
            ZNTitle: '走近安厨',
            ENTitle: 'APPROACH<br>ANCHU',
            link: 'index'
          },
          {
            ZNTitle: '安厨严选',
            ENTitle: 'APPROACH<br>ANCHU',
            link: 'about'

          },
          {
            ZNTitle: '安厨供应链',
            ENTitle: 'APPROACH<br>ANCHU',
            link: 'mine'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .header{
    overflow: hidden;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid #E5E5E5;
  }
  .header-center{
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
  }
  .logo{
    float: left;
  }
  .nav{
    float: right;
    overflow: hidden;
    color: #375D77;
  }
  .nav li{
    float: left;
    padding: 0 10px; 
    height: 93px;
    margin-left: 20px;
    cursor: pointer;
  }
  .nav i{
    display: block;
    height: 67%;
    font-size: 12px;
    padding-top: 28px;
    box-sizing:border-box;
    visibility: hidden;
  }
  .nav span{
    display: block;
    height: 33%;
    line-height: 30px;

  }
  .nuxt-link-exact-active{
    background:rgba(0,0,0,0.10);
  }
  .nav .nuxt-link-exact-active i{
    visibility: visible;
  }
</style>
