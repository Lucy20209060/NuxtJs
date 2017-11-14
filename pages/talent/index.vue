<template>
  <section class="talent-page_wrap">
    <div class="talent-photoWall">
    	<img :src="talentData.photoWall" alt="">
    </div>

    <ul class="talent-leader">
    	<li 
	    	v-for="(leader,index) in talentData.leader" 
	    	:key="index"
	    	:style="{
	    		width:`${(100-(talentData.leader.length-1)*1) / talentData.leader.length}%`
	    	}"
    	>
    		<p>
    			<img :src="leader.portrait" alt="">
    		</p>
    		<p class="describe">
	    		<i>{{leader.name}}</i>
	    		<span>{{leader.describe}}</span>
    		</p>
    	</li>
    </ul>

    <div class="talent-text">
    	<underlineTitle title="加入安厨为改变农村电商而努力"></underlineTitle>
    </div>

  </section>
</template>

<script>
	import { talentData } from '~/assets/getData'
	import underlineTitle from '~/components/underlineTitle'
	export default {
	  head: {
	    title: '兵强马壮'
	  },
	  data () {
      return {
        talentData:{}
      }
		},
	  components: {
      underlineTitle
    },
    created () {
    	this.talentData = talentData()
			console.log(this.talentData)
    }
	}
</script>

<style lang="scss" scoped>
	$class-pre:'talent';
	.#{$class-pre}{
		&-page_wrap{
			text-align: center;
		}
		&-photoWall{
			width: 100%;
			height: auto;
			background: #EEEFF6;
			text-align: center;
			line-height: 0;
			img{
				display: inline-block;
				width: 1200px;
				height: auto;
			}
		}
		&-leader{
			width: 1200px;
			height: auto;
			display: inline-block;
			padding-top: 36px;
			li{
				display: inline-block;
				margin-right: 1%;
				border: 1px solid #E8E9F4;
				box-sizing:border-box;
				border-radius: 4px;
				overflow: hidden;
				&:last-child{
					margin-right: 0;
				}
				&:hover{
					box-shadow: 0 0 10px 0 rgba(217,217,217,0.50);
					.describe{
						background: #129E83;
						color: #fff;
					}
					i:after{
						background: #fff;
					}
				}
				p{
					width: 100%;
					height: auto;
					text-align: left;
					img{
						width: 100%;
						height: auto;
					}
				}
				i{
					display: block;
					font-size: 16px;
					padding-bottom: 20px;
					position: relative;
					&:after{
						content:'';
						position: absolute;
						width: 20px;
						height: 1px;
						background: #375d77;
						transition: background .5s;
						bottom: 10px;
						left: 0;
					}
				}
				span{
					display: block;
					font-size: 14px;
					line-height: 26px;
				}
			}
			.describe{
				background: #fff;
				transition: all .5s;

				padding: 16px;
				cursor: pointer;
				box-sizing:border-box;
				height: 200px;
			}
		}
		&-text{
			padding-top: 46px;
		}
	}
</style>