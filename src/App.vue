<!--
 * @Descripttion: 
 * @Author: LongWeiYi
 * @Date: 2021-07-14 13:45:30
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-14 14:40:51
-->
<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import createToast from 'components/Toast/index'

export default defineComponent({
	name: 'App',
	setup() {
		// onMounted((): void => {
		//   createToast({
		//     message: '本项目仿网易云音乐开发，使用开源接口，仅供学习交流使用！网易云音乐官方网址: music.163.com'
		//   })
		// })
	},
})
</script>
