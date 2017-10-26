<template>
  <section class="synopsis">
    <div class="text" v-for="(item,index) in text" :key="index">
      <underlineTitle :title="item.title" size="36px" />
      <p v-for="(items,indexs) in item.content" :key="indexs" v-html="items"></p>
    </div>
    
    <div class="video">
      <my-video :sources="video.sources" :options="video.options"></my-video>
    </div>

    <table cellspacing="0" class="four-modular">
      <tbody>
        <tr>
          <td v-for="(item,index) in fourModular" :key="index">
            <span>{{item.title}}</span>
            <i>{{item.content}}</i>
          </td>
        </tr>
      </tbody>
    </table>

  </section>
</template>

<script>
  import myVideo from '~/components/video'
  import underlineTitle from '~/components/underlineTitle'
  import { indexData } from '~/assets/getData'
  import axios from 'axios'
  export default {
    data () {
      return {
        text: [],
        video: {
          sources: [{
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: false,
            volume: 0.6,
            poster: 'http://covteam.u.qiniudn.com/poster.png'
          }
        },
        fourModular: []
      }
    },
    // async asyncData ({ params }) {
    //   console.log(111111)
    //   let data = await axios.get('/api.php?s=api/index/category_products')

    //   let [getlist, getlevel1] = await Promise.all([
    //     axios.get('/api.php?s=api/site/getlist'),
    //     axios.get('/api.php?s=api/category/getlevel1')
    //   ])

    //   return {
    //     dataArr: data.data
    //     // getlist,
    //     // getlevel1
    //   }
    // },
    components: {
      myVideo,
      underlineTitle
    },
    created () {
      const data = indexData()
      this.text = data.introduce
      this.fourModular = data.keyPoints
      // this.getlist()
    },
    methods: {
      async getlist () {
        let data = await axios.get('/api.php?s=api/index/category_products')
        console.log('getlist', data)
        console.log(11111)
      },
      async getlevel1 () {
        let data = await axios.get('/api.php?s=api/category/getlevel1')
        console.log('getlevel1', data)
        console.log(2222)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .synopsis{
    width: 1200px;
    height: auto;
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;
  }
  .text p{
    font-size: 14px;
    line-height: 26px;
    display: inline-block;
    width: 77%;
    margin-top: 20px;
  }
  .video{
    width: 100%;
    margin-top: 62px;
  }
  .four-modular{
    margin-top: 56px;
    td{
      width: 25%;
      border: 1px solid #E7E7E7;
      border-right: 1px solid transparent;
      box-sizing:border-box;
      padding: 28px 55px;
      color: #375D77;
      cursor: pointer;
      background: #fff;
      position: relative;
      z-index: 1;
      transform:translateY(0);
      transition: transform .3s;
      &:hover{
        z-index: 999;
        box-shadow: 0 0 8px 0 rgba(217,217,217,.5);
        transform:translateY(-5px);
      }
      &:last-child{
        border-right: 1px solid #E7E7E7;
      }
      span{
        font-size: 24px;
        position: relative;
        &:after{
          position: absolute;
          content: ' ';
          width: 20px;
          height: 2px;
          background: #EA5614;
          bottom: -10px;
          left: 50%;
          margin-left: -10px;
        }
      }
      i{
        display: block;
        margin-top: 36px;
        font-size: 14px;
      }
    }
  }

  /*媒体查询*/
  @media screen and (max-width: 1200px) {
    .synopsis{
      width: 90%;
    }
    .four-modular td{
      padding: 20px 36px;
    }
  }
  @media screen and (max-width: 750px) {
    .four-modular td{
      padding: 10px 20px;
    }

  }
</style>