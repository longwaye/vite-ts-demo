<!--
 * @Descripttion: HomeLayout
 * @Author: LongWeiYi
 * @Date: 2021-07-14 14:11:02
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-14 14:39:58
-->
<template>
	<div>
		<Header v-once></Header>
		<router-view></router-view>
		<Footer v-once></Footer>
		<Player></Player>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from 'components/Header/index.vue'
import Footer from 'components/Footer/index.vue'
import Player from 'components/Player/index.vue'

export default defineComponent({
	name: 'HomeLayout',
	components: {
		Header,
		Footer,
		Player,
	},
	setup() {
		return {}
	},
})
</script>

<style lang="scss" scoped>
.home-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
}
</style>
