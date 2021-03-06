/*
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-15 10:33:56
 * @LastEditors: LWYð
 * @LastEditTime: 2021-07-15 11:10:06
 */

import { ISingerData } from "@/typings";

export default {

  /**
   * æ ¼å¼åæ°é
   * @param {Number} count
   */
     formatCount(count: number): string | number {
      if (count < 0) return '';
      if (count >= 100000000) {
        return (count / 100000000).toFixed(1) + 'äº¿';
      }
      if (count >= 10000) {
        return (count / 10000).toFixed(1) + 'ä¸';
      }
      return count;
    },
  /**
   * æ ¼å¼åæ­æåå­
   * @param {Array} singerList
   */
   formatSingerName(singerList: ISingerData[]): string {
    return singerList.map(item => item.name).join(' / ');
  },    
}