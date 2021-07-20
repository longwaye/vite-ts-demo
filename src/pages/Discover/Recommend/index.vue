<!--
 * @Descripttion: 推荐
 * @Author: LongWeiYi
 * @Date: 2021-07-14 14:14:44
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-15 10:46:02
-->
<template>
  <div class="recommend-wrap">
    <!-- 导航 -->
    <Banner :bannerList="bannerList" />
    <div class="recommend-inner w-def-container">
      <section class="inner-left">
        <!-- 热门推荐 -->
        <Hot :playList="hotPlayList" />
        <!-- 新碟上架 -->
        <RecomAlbum :albumList="albumList" />
        <!-- 榜单 -->
        <RecomRank />
      </section>
       <section class="inner-right">
        <!-- 登录提示 -->
        <LoginTip />
        <!-- 入驻歌手 -->
        <RecomSinger :singerList="singerList" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { IState } from './typing';
import Banner from './Banner/index.vue';
import Hot from './Hot/index.vue';
import RecomAlbum from './RecomAlbum/index.vue';
import LoginTip from 'components/LoginTip/index.vue';
import RecomSinger from './RecomSinger/index.vue';
import RecomRank from './RecomRank/index.vue'
import { BannerTypeEnum, httpGetBanners, httpGetHotPlayList } from '@/requests/recommend';
import { httpGetHotAlbum } from '@/requests/album';
import { httpGetSingerList } from '@/requests/singer';

export default defineComponent({
  components: {
    Banner,
    Hot,
    LoginTip,
    RecomSinger,
    RecomAlbum,
    RecomRank
  },
  setup () {
    const state = reactive<IState>({
      bannerList: [], // banner
      hotPlayList: [], // 热门歌单
      albumList: [], // 热门新碟
      singerList: [], // 推荐歌手
      rankList: [] // 推荐榜单
    });

    onMounted(() => {
      getBannerList()
      getSingerList()
      getHotPlayList()
      getHotAlbumList()
    })

    /**
     * 获取banner数据
     */
    const getBannerList = async () => {
      const { banners } = await httpGetBanners(BannerTypeEnum.PC)
      state.bannerList = banners;
    }

    /**
     * 获取热门歌单数据
     */
    const getHotPlayList = async () => {
      const { result } = await httpGetHotPlayList(8);
      state.hotPlayList = result;
    };

    /**
     * 获取热门新碟数据
     */
    const getHotAlbumList = async () => {
      const { albums } = await httpGetHotAlbum()
      state.albumList = albums.slice(0, 5);
      console.log('getHotAlbumList', albums)
    }

     /**
     * 获取入驻歌手数据
     */
    const getSingerList = async () => {
      const { artists } = await httpGetSingerList({ limit: 10 });
      state.singerList = artists;
    };   

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.recommend-inner {
  display: flex;
  background-color: #fff;
  .inner-left {
    flex: 1;
    padding: 20px;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    overflow: hidden;
  }
  .inner-right {
    width: 250px;
    border-right: 1px solid #d3d3d3;
  }
}
</style>
