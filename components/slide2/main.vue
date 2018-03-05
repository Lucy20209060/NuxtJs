<template>
	<div 
        class="image-wrap"
        :style="{
			height: itemHeight + 'px',
			width: itemWidth + 'px'
		}"
    >
        <slideItem 
            v-for="(item,index) in totalItem" 
            :key="index" 
            :keys="index" 
            :currentActive="itemActive"
        >
            <img :src="item.image" />
        </slideItem>
	</div>
</template>

<script>
  import slideItem from '~/components/slide2/item'
	export default {
        props: {
            itemWidth:Number,
            itemHeight:Number,
            interval:Number,
            resources:Array
        },
        components: {
            slideItem
        },
        data () {
            return {
                // activeIndex:1,      // 当前幻灯片index
                // itemLen: 0,			// 子元素数组的长度
                itemActive: 0,		// 当前
                // timer: null,
                // clicktag: 0
            }
        },
        mounted () {
            console.log(this.totalItem)
        //   this.itemLen = this.totalItem.length
        //   this.setInterval()
        },
        destroyed () {
          // 组件卸载时 一定要清除定时器
        //   clearInterval(this.timer)
        },
        methods: {
          
        },
        computed:{
            // 处理数据 分页
            totalItem(){
                const arr = this.resources;
                const arrTem = [];
                if(arr.length === 0){
                    console.error('数组不可为空')
                    return false
                }
                if(arr.length < 6){
                    
                }else{
                    // 不做处理
                    return arr
                }
                // const len = Math.ceil(arr.length/6);
                // // 不满三页 补足三页
                // if(arr.length <=8){
                //   arrTem.push(arr.slice(0,8))
                //   arrTem.push(arr.slice(0,8))
                //   arrTem.push(arr.slice(0,8))
                // }else if(arr.length <=16){
                //   arrTem.push(arr.slice(0,8))
                //   arrTem.push(arr.slice(8,16))
                //   arrTem.push(arr.slice(0,8))
                // }else{
                //   for(let i=0;i<len;i++){
                //     let array = [];
                //     array = Object.assign({},arr.slice(i*8,i*8 + 8))
                //     arrTem.push(array)
                //   }
                // }
                // return arrTem
            }
        }
    }
</script>

<style lang="scss" scoped>
  .image-wrap{
      border: 1px solid #333;
      background: #fff;
      overflow: hidden;
  }
</style>