/*
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-15 10:01:35
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-15 10:01:57
 */

import { GET_SINGER_LIST } from "@/configs/api";
import { IQueryParams } from "@/pages/Discover/Singers/typing";
import { ajaxGet } from "@/utils/http";


/**
 * 请求歌手列表数据
 */
 export const httpGetSingerList = (params: IQueryParams) => {
  return ajaxGet(GET_SINGER_LIST, params);
};