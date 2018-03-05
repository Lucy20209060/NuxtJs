<template>
  <section class="support-page_wrap">
    <!-- 轮播图1 -->
    <!-- 
      itemWidth   宽度
      itemHeight  高度
      interval    定时，定时不设置或者设为0时 关闭自动轮播
      resources   资源数组，所有的信息都放在一个数组里 [{},{},{},{},{},.....] 我已经分组了 8张图片一个幻灯片
    -->
    <slideMain :itemWidth="670" :itemHeight="300" :interval="3000" :resources="itemData" />


    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    <!-- 轮播图2 -->
    <section>hahah</section>




  </section>
</template>

<script>
import slideMain from '~/components/slide/main'

export default {
  head: {
    title: '帮农力量'
  },
  components: {
    slideMain
  },
  data() {
    return{
      itemData:[
        {
          link:'https://www.baidu.com',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'1',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'2',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'3',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'4',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'5',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'6',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'7',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'8',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
          link:'9',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
          link:'10',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
          link:'11',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
          link:'12',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
          link:'13',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
          link:'14',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
          link:'15',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
          link:'16',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        }
      ]
    }
  },

}
</script>

<style lang="scss" scoped>
  .support-page_wrap{
    padding-top: 200px;
    text-align: center;
  }
</style>