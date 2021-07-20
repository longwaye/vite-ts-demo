/*
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-14 14:09:01
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-15 10:30:09
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '../layouts/HomeLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect: '/discover',
    children: [
      {
        path: '/discover',
        name: 'discover',
        component: () => import(/* webpackChunkName: "Discover" */ 'pages/Discover/index.vue'),
        redirect: '/discover/recommend',
        children: [
          {
            path: '/discover/recommend',
            name: 'recommend',
            component: () => import(/* webpackChunkName: "Recommend" */ 'pages/Discover/Recommend/index.vue')
          },
          {
            path: '/discover/singer/:id',
            name: 'singer',
            component: () => import(/* webpackChunkName: "Singer" */ 'pages/Singer/index.vue')
          },
          {
            path: '/discover/album',
            name: 'album',
            component: () => import(/* webpackChunkName: "Album" */ 'pages/Discover/Album/index.vue')
          },
          {
            path: '/discover/playlist',
            name: 'playlist',
            component: () => import(/* webpackChunkName: "Playlist" */ 'pages/Discover/Playlist/index.vue')
          },
          {
            path: '/discover/playlist/:id',
            name: 'playlistDetail',
            component: () => import(/* webpackChunkName: "PlaylistDetail" */ 'pages/PlaylistDetail/index.vue')
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
