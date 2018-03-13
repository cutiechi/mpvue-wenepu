<template>
  <div id="home"></div>
</template>

<script>
import { getStorage } from '../../utils/storage'
import { navigateTo } from '../../utils/navigate'

export default {
  name: 'Home',
  methods: {
    // 判断是否绑定学号
    async isBindStudent () {
      try {
        // 通过 Key 'student' 从 Storage 中获取 student, 没获取到时会抛出异常
        await getStorage('student')
      } catch (error) {
        // 没获取到 student 说明没有绑定学号, 跳转到绑定学号页面
        navigateTo('/pages/bind/main')
      }
    }
  },
  onShow () {
    // 页面显示时判断是否绑定学号
    this.isBindStudent()
  }
}
</script>
