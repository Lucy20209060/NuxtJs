<template>
	<div 
		class="slide_wrap"
        :style="{
			height: itemHeight + 'px',
			width: itemWidth + 'px'
		}"
	>
	  <slideItem v-for="(item,index) in totalItem" key="index">
          <div></div>
      </slideItem>
	  <i class="iconfont zuo icon-zuoyou"></i>
	  <i class="iconfont you icon-zuoyou"></i>
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
                

            }
        },
        mounted () {
            console.log(111,this.totalItem)
        },
        destroyed () {
        // clearInterval(this.timer)
        },
        methods: {
            
        },
        computed:{
            // 处理数据
            totalItem(){
                const arr = this.resources;
                const arrTem = [];
                const len = Math.ceil(arr.length/6);
                for(let i=0;i<len;i++){
                    console.log(i)
                    let array = {};
                    array = Object.assign({},arr.slice(i*8,i*8 + 8))
                    arrTem.push(array)
                }
                return arrTem
            }
        }
        // [
        //     {
        //         slideData:[
        //             {},
        //             {}
        //         ]
        //     },
        //     {},
        //     {}
        // ]
    }
</script>

<style lang="scss" scoped>
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
	.zuo{
		left: -100px;
	}
	.you{
		right: -100px;
		transform:rotate(180deg);
	}
</style>