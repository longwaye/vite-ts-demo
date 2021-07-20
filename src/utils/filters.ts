/*
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-15 10:33:56
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-15 11:10:06
 */

import { ISingerData } from "@/typings";

export default {

  /**
   * 格式化数量
   * @param {Number} count
   */
     formatCount(count: number): string | number {
      if (count < 0) return '';
      if (count >= 100000000) {
        return (count / 100000000).toFixed(1) + '亿';
      }
      if (count >= 10000) {
        return (count / 10000).toFixed(1) + '万';
      }
      return count;
    },
  /**
   * 格式化歌手名字
   * @param {Array} singerList
   */
   formatSingerName(singerList: ISingerData[]): string {
    return singerList.map(item => item.name).join(' / ');
  },    
}