<template>
  <section class="header">
    <div class="header-center">
    
      <nuxt-link tag="h2" to="/index" class="logo">
        <img src="~/static/img/logo1.png" alt="安厨">
      </nuxt-link>

      <ul class="nav">
        <nuxt-link 
          tag="li" 
          v-for="(item,indexs) in nav" 
          :to="{ name: item.link }" 
          key="indexs"
          @click.native="navTap(item)">

          <i v-html="item.ENTitle"></i>
          <span @mouseenter="navEnter(indexs)">{{item.ZNTitle}}</span>

          <div 
            :class="[
              'nav-list',
              indexs == navSign ? 'nav-list-active' : ''
            ]"
          >
            <p v-for="(items,index) in item.navList" key="index">{{items.title}}</p>
          </div>
        </nuxt-link>
      </ul>
    </div>
  </section>
    
</template>

<script>
  export default {
    data () {
      return {
        nav: [
          {
            ZNTitle: '走近安厨',
            ENTitle: 'APPROACH<br>ANCHU',
            link: 'index',
            navList: [
              {
                title: '安厨简介',
                link: ''
              },
              {
                title: '安厨理念',
                link: ''
              },
              {
                title: '安厨事纪',
                link: ''
              },
              {
                title: '安厨故事',
                link: ''
              }
            ]
          },
          {
            ZNTitle: '安厨严选',
            ENTitle: 'STRICT<br>SELECTION',
            link: 'selection',
            navList: [
              {
                title: '源头把控',
                link: ''
              },
              {
                title: '精雕细琢',
                link: ''
              },
              {
                title: '物流体系',
                link: ''
              },
              {
                title: '售后服务',
                link: ''
              },
              {
                title: '案例介绍',
                link: ''
              }
            ]
          },
          {
            ZNTitle: '安厨供应链',
            ENTitle: 'SUPPLY<br>CHAIN',
            link: 'supply',
            navList: []
          },
          {
            ZNTitle: '安厨微店',
            ENTitle: 'ANCHU<br>SHOP',
            link: 'shop',
            navList: []
          },
          {
            ZNTitle: '驰声走誉',
            ENTitle: 'REPUTATION<br>RAPIDLY',
            link: 'reputation',
            navList: [
              {
                title: '安厨声音',
                link: ''
              },
              {
                title: '安厨专利',
                link: ''
              },
              {
                title: '获得荣誉',
                link: ''
              },
              {
                title: '政府合作',
                link: ''
              }
            ]
          },
          {
            ZNTitle: '对农服务',
            ENTitle: 'SERVING<br>FARMERS ',
            link: 'farmers',
            navList: [
              {
                title: '县域农业电商服务',
                link: ''
              },
              {
                title: '电商培训',
                link: ''
              },
              {
                title: '电商产业园',
                link: ''
              },
              {
                title: '农业基地',
                link: ''
              }
            ]
          },
          {
            ZNTitle: '求贤通道',
            ENTitle: 'SEEK<br>TALENT',
            link: 'talent',
            navList: [
              {
                title: '兵强马壮',
                link: ''
              },
              {
                title: '能者来战',
                link: ''
              }
            ]
          }
        ],
        show: false,
        navSign: 3
      }
    },
    methods: {
      navEnter (index) {
        this.navSign = index
        console.log(index)
      },
      navTap (par) {
        // console.log(par.ENTitle === 'SUPPLY<br>CHAIN')

        // return false

        // http://wd.hzanchu.com/

        // window.location.href = 'http://www.baidu.com'
      }
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid #E5E5E5;
  }
  .header-center{
    width: 1200px;
    margin: 0 auto;
  }
  .header:after,.header-center:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    overflow:hidden;
    visibility:hidden;
  }
  .logo{
    float: left;
    margin-top: 30px;
    cursor: pointer;
  }
  .nav{
    float: right;
    color: #375D77;
  }
  .nav li{
    float: left;
    padding: 0 10px; 
    height: 93px;
    margin-left: 20px;
    cursor: pointer;
    position: relative;
    border-bottom: 2px solid #fff;
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
  .nav .nuxt-link-exact-active{
    background:rgba(0,0,0,0.10);
  }
  .nav .nuxt-link-exact-active i{
    visibility: visible;
  }
  .nav-list{
    position: absolute;
    top: 93px;
    left: 0;
    background: rgba(255,255,255,0.50);
    opacity: 0;
    width: 152px;
  }
  .nav-list p{
    padding: 0 12px;
    line-height: 36px;

  }
  .nav-list p:hover{
    background: rgba(255,255,255,0.80);

  }
  .nav-active{
    color: red;
  }

  .nav-list-active{
    animation:mymove 2s;
    animation-fill-mode:forwards;
  }


  @keyframes mymove
  {
    from {opacity:0;}
    to {opacity:1;}
  }
  
</style>
