<template>
  <section class="slide-page_wrap">
    <slideMain :resources="itemData" />
  </section>
</template>

<script>
import slideMain from '~/components/slide2/main'
export default {
  head: {
    title: '左右切换轮播'
  },
  components: {
    slideMain
  },
  data() {
    return{
      itemData:[
        {
          title:'测试商品1',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品2',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品3',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品4',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品5',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品6',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品7',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品8',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品9',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520267204054&di=2df0209a7985ca8ce755301c4c4eb1ca&imgtype=0&src=http%3A%2F%2Fi1.qhmsg.com%2Ft01b47f9a9623d41035.jpg'
        },{
           title:'测试商品10',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        },{
           title:'测试商品11',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952677&di=7085f53cdeedb021399966c0319d2cdc&imgtype=0&src=http%3A%2F%2Fwww.js.xinhuanet.com%2Ftitlepic%2F111649%2F1116494016_1441679015569_title0h.jpg'
        }
      ]
    }
  }
}
</script>