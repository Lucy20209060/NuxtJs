// 获取新闻 新闻数组 当前页 每页条数
export const getNews = (arr=[],page=0,num=3) => {
	const numberTem = num*page;								// 截取起始点
	const currList =  arr.slice(numberTem,numberTem + num);		// 截取当前页 数据
  return currList;
}