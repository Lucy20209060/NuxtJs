<template>
  <section class="synopsis">
    <div class="text" v-for="(item,index) in text" :key="index">
      <underlineTitle :title="item.title" size="36px" />
      <p v-for="(items,indexs) in item.p" :key="indexs" v-html="items"></p>
    </div>
    
    <div class="video">
      <my-video :sources="video.sources" :options="video.options"></my-video>
    </div>

    <div class="four-modular">
      <p v-for="(item,index) in fourModular" :key="index">
        <span>{{item.title}}</span>
        <i>{{item.text}}</i>
      </p>
    </div>

  </section>
</template>

<script>
  import myVideo from '~/components/video'
  import underlineTitle from '~/components/underlineTitle'
  export default {
    data () {
      return {
        text: [
          {
            title: '耕者良田 食者心田',
            p: [
              '杭州安厨电子商务有限公司，创立于2013年，是一家专注于农业电商领域的互联网科技公司，潜心致力于解决县域农产品上行难题，不遗余力推进现在农业发展，与此同时，为广大消费者推荐和严选优质农产品。',
              '经过4年时间的发展与积累，安厨现有员工一百三十余人，资产规模超十亿元。目前安厨旗下拥有两大核心电商平台安厨微店和安厨供应链，以及近20个业务子公司，业务领域涵盖县域农业电商服务、农业电商培训、电商（物流）产业园、现代农业基地等各大板块。公司通过了ISO9001:2015质量管理体系认证，取得农业电商实用新型和外观专利17项，并和中国农科院共同制定和发布了生鲜农产品电商流通标准。',
              '“上安厨，吃点好的！ ”。<br>公司秉承“安全S  优质Q  特色F 生态E”的核心理念，倾力把美食从乡间地头搬到城市餐厅。安厨提供优质农产品，倡导优质生活。'
            ]
          }
        ],
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
        fourModular: [
          {
            title: '理念',
            text: '安全S 优质Q 特色F 生态E'
          },
          {
            title: '愿景',
            text: '成为做专业的农业电商公司'
          },
          {
            title: '使命',
            text: '让农村富起来 让农民笑起来'
          },
          {
            title: '价值观',
            text: '客户第一 拥抱变化 团队协作 担当 激情 敬业'
          }
        ]
      }
    },
    components: {
      myVideo,
      underlineTitle
    }
  }
</script>

<style scoped>
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
  }
  .four-modular:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    overflow:hidden;
    visibility:hidden;
  }
  .four-modular p{
    float: left;
    width: 25%;
    min-height: 163px;
    border: 1px solid #E7E7E7;
    border-right: 1px solid transparent;
    box-sizing:border-box;
    padding: 28px 55px;
    color: #375D77;
    cursor: pointer;
  }
  .four-modular p:last-child{
    border-right: 1px solid #E7E7E7;
  }
  .four-modular p span{
    font-size: 24px;
    position: relative;
  }
  .four-modular p span:after{
    position: absolute;
    content: ' ';
    width: 20px;
    height: 2px;
    background: #EA5614;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;

  }
  .four-modular p span{
    display: block;
  }
  .four-modular p i{
    display: block;
    margin-top: 36px;
    font-size: 14px;
  }
  .four-modular p:hover{
    box-shadow: 0 0 8px 0 rgba(217,217,217,0.5);
  }

  /*媒体查询*/
  @media screen and (max-width: 1200px) {
    .synopsis{
      width: 90%;
    }
    .four-modular p{
      padding: 20px 36px;
    }
  }
  @media screen and (max-width: 750px) {
    .four-modular p{
      padding: 10px 20px;
    }

  }
</style>