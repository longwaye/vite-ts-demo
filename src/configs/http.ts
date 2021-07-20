/*
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-14 15:26:51
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-14 17:53:47
 */
const BASE_URL: string = 'https://neteasecloudmusic-api-7gcr5y986-longwaye.vercel.app';

const TIME_OUT: number = 10 * 1000;

/**
 * http请求失败后的错误统一处理
 * @param {Number} status 状态码
 */
const errorHandle = (status: number): void => {
  // HTTP状态码判断
  if (status >= 500) {
    console.log("系统开小差了, 请联系技术管理员或稍后重试")
  } else {
    console.log("网络请求失败, 请刷新重试")
  }
}

export {
  BASE_URL,
  TIME_OUT,
  errorHandle
}