/*
 * @Descripttion: 专辑
 * @Author: LongWeiYi
 * @Date: 2021-07-15 09:35:09
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-15 09:35:42
 */

import { GET_HOT_ALBUM } from "@/configs/api";
import { ajaxGet } from "@/utils/http";


/**
 * 请求热门专辑数据
 */
 export const httpGetHotAlbum = () => {
  return ajaxGet(GET_HOT_ALBUM);
};