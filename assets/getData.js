import data from './data.json'

/*
	首页
*/
export const indexData = () => {
  return data.index
}

/*
	走近安厨
*/
export const synopsisData = () => { 			// 安厨简介
  return data.synopsis
}
export const ideaData = () => {					// 安厨理念
	return data.idea
}
export const eventData = () => {				// 安厨事记
	return data.event
}
export const storyData = () => {				// 安厨故事
	return data.story
}
export const storyList = () => {				// 安厨故事详情
	return data.story.storyList
}

/*
	安厨严选
*/
export const elaborateData = () => {			// 精雕细琢
  return data.elaborate
}
export const storageData = () => {				// 仓储服务
  return data.storage
}

/*
	安厨供应链
*/
/*
	安厨微店
*/
/*
	驰声走誉
*/
export const cooperationData = () => { 				// 政府合作
  return data.cooperation
}
export const reputationData = () => { 				// 安厨声音
  return data.reputation
}

/*
	对农服务
*/
export const agriculData = () => { 					// 政府合作
  return data.agricultural
}

/*
	求贤通道
*/
export const joinData = () => { 				// 能者来战
  return data.join
}
export const talentData = () => { 				// 兵强马壮
  return data.talent
}

/*
	底部footer
*/
export const footerData = () => {
  return data.footer
}