<template>
  <section class="container">
    <div class="text-wrap" v-for="(item,index) in pageText" :key="index">
      <div class="text-center">
        <fourWorlds :title="item.title" />
        <p v-for="(items,indexs) in item.text" :key="indexs">{{items}}</p>
        <img :src='item.img' alt="item.title">
      </div>
    </div>
  </section>
</template>

<script>
import intentionImg from '~/static/img/idea/intention.png'
import beliefImg from '~/static/img/idea/belief.png'
import futureImg from '~/static/img/idea/future.png'

import fourWorlds from '~/components/iconTitle'

export default {
  head: {
    title: '安厨理念'
  },
  data () {
    return {
      pageText: [
        {
          title: '不忘<br>初心',
          text: [
            '安厨，成立初衷即为广大消费者带去一个“安心厨房”。安厨所有的食物都是来自乡间地头，从安厨选购的每一道菜都是安全的、健康的。',
            '安全S  优质Q  特色F  生态E——是安厨人对产品品质的严格要求。',
            '4年来，安厨人不懈搜寻，脚步遍布全国众多乡镇村落，为每一位安厨的客户，寻找安全、优质、健康、生态的食物。接下来，安厨人将以更快的步伐，为客户搜寻全国生态美食。'
          ],
          img: intentionImg
        },
        {
          title: '成长<br>信念',
          text: [
            '然而我们的使命不止于此，在不断地搜寻过程中，我们被农户感动。他们辛勤耕种的优质产品，因缺少科学的质检体系饱受怀疑，因缺少快速的配送方式而止步于门前，因缺乏系统的品牌包装而鲜为人知。',
            '安厨来了，我们要采用先进技术、专业营销、强大物流帮农民朋友们将产品推向市场，让更多的消费者享用。'
          ],
          img: beliefImg
        },
        {
          title: '未来<br>之路',
          text: [
            '雄关漫道真如铁，而今迈步从头越。安厨万里长征，迈出了关键性的一步，接下来将继续深化和完善推进以县域农业公共服务为典型代表的“安厨模式”，协助政府优化农业资源促进农业产业结构调整，实现县域农业向标准化、产业化、品牌化和特色化发展。安厨坚信，现在一小步是帮扶，未来一大步是公益。'
          ],
          img: futureImg
        }
      ]
    }
  },
  components: {
    fourWorlds
  }
}
</script>

<style scoped>
  .container{
    padding-top: 28px;
  }
  .text-wrap{
    width: 100%;
  }
  .text-wrap:nth-of-type(even){
    background:  #F6F6F6;
  }
  .text-center{
    width:1200px;
    margin: 0 auto;
    text-align: center;
    padding: 38px 0;
  }
  .text-center p{
    display: inline-block;
    width: 930px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #375D77;
    line-height: 26px;
  }
  .text-center img{
    margin-top: 38px;
    height: auto;
  }
</style>