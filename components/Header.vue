<template>
  <section 
    class="header"
    :style="{
      borderBottom: bottom
    }"
    :class="[
      scrollTop >= 83 ? 'scrollTop' : ''
    ]"
  >
    <div class="header-center">
    
      <nuxt-link tag="h2" to="/" class="logo">
        <img src="~/static/img/logo1.png" alt="安厨">
      </nuxt-link>

      <ul class="nav" @mouseleave="navLeave">
        <nuxt-link 
          tag="li" 
          v-for="(item,indexs) in nav" 
          :to="{ path: item.link }" 
          key="indexs"
          :class="[
            indexs == navSign ? 'nav-enter-active' : ''
          ]">

          <i v-html="item.ENTitle"></i>
          <span @mouseover="navOver(indexs)">{{item.ZNTitle}}</span>

          <div 
            :style="{ width: item.width ? item.width : '90px'}"
            :class="[
              'nav-list',
              indexs == navOverSign ? 'nav-over-active' : ''
            ]">
            <nuxt-link
              tag="p"
              v-for="(items,index) in item.navList" 
              :key="index"
              :to="{ path: items.link }"
              @click.native="navLeave"
            >{{items.title}}</nuxt-link>
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
            link: '/',
            width:'94px',
            navList: [
              {
                title: '安厨简介',
                link: '/anchu/synopsis'
              },
              {
                title: '安厨理念',
                link: '/anchu/idea'
              },
              {
                title: '安厨事记',
                link: '/anchu/event'
              },
              {
                title: '荣誉&专利',
                link: '/anchu/honor'
              },
              {
                title: '团队力量',
                link: '/anchu/team'
              }
            ]
          },
          {
            ZNTitle: '安厨严选',
            ENTitle: 'STRICT<br>SELECTION',
            link: '/selection',
            navList: [
              {
                title: '源头把控',
                link: '/selection'
              },
              {
                title: '精雕细琢',
                link: '/selection/elaborate'
              },
              {
                title: '物流体系',
                link: '/selection/logistics'
              },
              {
                title: '售后服务',
                link: '/selection/service'
              }
            ]
          },
          {
            ZNTitle: '对农服务',
            ENTitle: 'SERVING<br>FARMERS ',
            link: '/agricultural',
            width: '156px',
            navList: [
              {
                title: '县域农业电商服务',
                link: '/agricultural'
              },
              {
                title: '电商培训',
                link: '/agricultural/train'
              },
              {
                title: '电商产业园',
                link: '/agricultural/industrial'
              },
              {
                title: '农业基地',
                link: '/agricultural/base'
              }
            ]
          },
          {
            ZNTitle: '电商平台',
            ENTitle: 'E-C<br>PLATFORM',
            link: '/website/shop',
            width:'94px',
            navList: [
              {
                title: '安厨微店',
                link: '/website/shop'
              },
              {
                title: '安厨供应链',
                link: '/website/supply'
              }
            ]
          },
          {
            ZNTitle: '安厨声音',
            ENTitle: 'REPUTATION<br>RAPIDLY',
            link: '/reputation',
            navList: [
              {
                title: '动态资讯',
                link: '/reputation'
              },
              {
                title: '政府合作',
                link: '/reputation/cooperation'
              }
            ]
          },
          {
            ZNTitle: '安厨故事',
            ENTitle: 'ANCHU<br>STPORY',
            link: '/story',
            width:'80px',
            navList: [
              {
                title: '品牌故事',
                link: '/story'
              },
              {
                title: '帮农力量',
                link: '/story/support'
              }
            ]
          },
          {
            ZNTitle: '求贤通道',
            ENTitle: 'SEEK<br>TALENT',
            link: '/talent',
            navList: []
          }
        ],
        pagePath: '',
        show: false,
        navSign: 0,
        navOverSign: -1, // 滑过标志
        bottom: 0,
        scrollTop: 0
      }
    },
    created () {
      this.routeChange()
      
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'routeChange'
    },
    mounted(){
      window.addEventListener('scroll', this.getScroll);
    },
    methods: {
      // 获取滚动条高度
      getScroll () {
        this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      },

      routeChange () {
        const currentRoute = this.$router.currentRoute.name
        // console.log(currentRoute)

        // 安厨故事详情页面 Header无底部border
        this.bottom = (currentRoute != 'anchu-story-storyDetail-id') && (currentRoute != 'index')
                    ? '1px solid #E5E5E5' 
                    : '1px solid transparent'
        // console.log(this.bottom)
        // let pathSign
        if (currentRoute.indexOf('index') !== -1) {
          this.navSign = 0
          return false
        }
        if (currentRoute.indexOf('anchu') !== -1) {
          this.navSign = 0
          return false
        }
        if (currentRoute.indexOf('selection') !== -1) {
          this.navSign = 1
          return false
        }
        if (currentRoute.indexOf('agricultural') !== -1) {
          this.navSign = 2
          return false
        }
        if (currentRoute.indexOf('website') !== -1) {
          this.navSign = 3
          return false
        }
        if (currentRoute.indexOf('reputation') !== -1) {
          this.navSign = 4
          return false
        }
        if (currentRoute.indexOf('story') !== -1) {
          this.navSign = 5
          return false
        }
        if (currentRoute.indexOf('talent') !== -1) {
          this.navSign = 6
          return false
        }
      },
      // 滑过导航
      navOver (index) {
        this.navOverSign = index
      },
      navLeave () {
        this.navOverSign = -1
      }
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    padding-bottom: 8px;
    box-sizing:border-box;
    background: rgba(255,255,255,0.50);
    position: fixed;
    top: 0;
    font-size: 14px;
    transition: background .2s;
    z-index: 999;
  }
  .scrollTop{
    background: rgba(255,255,255,1);
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
    margin-top: 18px;
    cursor: pointer;
  }
  .nav{
    float: right;
    color: #375D77;
  }
  .nav li{
    float: left;
    padding: 0 10px; 
    height: 72px;
    margin-left: 20px;
    cursor: pointer;
    position: relative;
    border-bottom: 2px solid transparent;
  }
  .nav i{
    display: block;
    height: 67%;
    font-size: 12px;
    padding-top: 14px;
    box-sizing:border-box;
    visibility: hidden;
  }
  .nav span{
    display: block;
    height: 33%;
    line-height: 20px;

  }
  .nav-list{
    position: absolute;
    top: 74px;
    left: 0;
    background: #fff;
    box-shadow: 0 0 4px 0 #d9d9d9;
    opacity: 0;
    z-index: -1;
    transition: opacity 1s;
    height: 0;
    overflow: hidden;
  }
  /*鼠标滑过*/
  .nav-over-active{
    height: auto;
    opacity: 1;
    z-index: 999;
  }
  .nav-list p{
    padding: 0 12px;
    line-height: 36px;

  }
  .nav-list .nuxt-link-exact-active{
    background: #f5f5f5;
  }
  .nav-list p:hover{
    background: #f5f5f5;
  }
  .nav-enter-active{
    background:rgba(0,0,0,0.10);
  }
  .nav-enter-active i{
    visibility: visible;
  }
  
  /*媒体查询*/
  @media screen and (max-width: 750px) {
    .header-center{
      width: 90%;
    }

  }
  
</style>
