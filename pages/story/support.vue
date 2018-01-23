<template>
  <section class="support-page_wrap">
    <slideMain :itemWidth="670" :itemHeight="300" :resources="itemData"></slideMain>
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
          link:'0',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'1',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'2',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'3',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'4',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'5',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'6',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'7',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },{
          link:'8',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952680&di=1313e7164baaba60dc356217faee2b72&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F09%2F20151109191137_RKrZG.jpeg'
        },
        
        {
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
        },

        {
          link:'17',
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516734952675&di=b666c9096d20d12707fe632a9b129604&imgtype=0&src=http%3A%2F%2Fimage.cnpp.cn%2Fupload%2Fimages%2F20151204%2F1449219120_6969_11.jpg'
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