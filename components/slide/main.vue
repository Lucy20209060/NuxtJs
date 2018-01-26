<template>
	<div 
		class="slide_wrap"
    :style="{
			height: itemHeight + 'px',
			width: itemWidth + 'px'
		}"
    @mouseover="carouselOver"
		@mouseout="carouselOut"
	>
    <div class="items-wrap">
      <slideItem 
        v-for="(item,index) in totalItem" 
        :key="index" 
        :keys="index" 
        :currentActive="itemActive"
      >
        <a 
          target="_blank"
          v-for="(child,index2) in item" 
          :href="[child.link == ''?'javascript:;':child.link]"
          class="image-wrap"  
          :key="index2"
        >
          <img :src="child.image" />
        </a>
      </slideItem>
    </div>
	  <i class="iconfont left icon-zuoyou" @click="leftClick"></i>
	  <i class="iconfont right icon-zuoyou" @click="rightClick"></i>
	</div>
</template>

<script>
  import slideItem from '~/components/slide/item'
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
                itemLen: 0,			// 子元素数组的长度
                itemActive: 0,		// 当前
                timer: null,
                clicktag: 0
            }
        },
        mounted () {
          this.itemLen = this.totalItem.length
          this.setInterval()
        },
        destroyed () {
          // 组件卸载时 一定要清除定时器
          clearInterval(this.timer)
        },
        methods: {
          // 左点击
          leftClick () {
            // 防止频繁点击
            if (this.clicktag == 0) {
              this.clicktag = 1;
              this.itemActive <= 0 ? this.itemActive = this.itemLen - 1 : this.itemActive --
              setTimeout( () => { 
                this.clicktag = 0
              }, 1000);
            }
          },
          // 右点击
          rightClick () {
            // 防止频繁点击
            if (this.clicktag == 0) {
              this.clicktag = 1;
              this.itemActive >= this.itemLen - 1 ? this.itemActive = 0 : this.itemActive ++
              setTimeout( () => { 
                this.clicktag = 0
              }, 1000);
            }
          },
          // 滑入
          carouselOver () {
            clearInterval(this.timer)
          },
          // 滑出
          carouselOut () {
            this.setInterval()
          },
          // 定时器
          setInterval () {
            // 没有设置定时 则不打开定时器
            if(!this.interval){
              return false
            }
            this.timer = setInterval(() =>{
              this.itemActive >= this.itemLen - 1 ? this.itemActive = 0 : this.itemActive ++
            },this.interval)
          }
        },
        computed:{
            // 处理数据 分页
            totalItem(){
                const arr = this.resources;
                const arrTem = [];
                const len = Math.ceil(arr.length/6);
                // 不满三页 补足三页
                if(arr.length <=8){
                  arrTem.push(arr.slice(0,8))
                  arrTem.push(arr.slice(0,8))
                  arrTem.push(arr.slice(0,8))
                }else if(arr.length <=16){
                  arrTem.push(arr.slice(0,8))
                  arrTem.push(arr.slice(8,16))
                  arrTem.push(arr.slice(0,8))
                }else{
                  for(let i=0;i<len;i++){
                    let array = [];
                    array = Object.assign({},arr.slice(i*8,i*8 + 8))
                    arrTem.push(array)
                  }
                }
                return arrTem
            }
        }
    }
</script>

<style lang="scss" scoped>
  .items-wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
	.slide_wrap{
		position: relative;
		display: inline-block;
	}
	.iconfont{
		display: block;
		width: 80px;
		height: 80px;
		position: absolute;
		top: 50%;
		margin-top: -40px;
		text-align: center;
		line-height: 80px;
		font-size: 50px;
		cursor: pointer;
		color: #375D77;
		opacity: .6;
		&:hover{
			opacity: 1;

		}
	}
	.left{
		left: -100px;
	}
	.right{
		right: -100px;
		transform:rotate(180deg);
	}
  .image-wrap{
    // width: 24.62%;
    width: 25%;
    height: 50%;
    float: left;
    padding: .3%;
    box-sizing: border-box;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>