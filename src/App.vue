<template>
  <!-- 使用动态的 transition name -->
  <transition name="component-fade"
              mode="out-in">
    <router-view></router-view>
  </transition>

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      index: '/',
      names: 'left',
      transitionName: 'slide-left'
    }
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  watch: {
    $route (to, from) {
      // 目标导航下标和离开导航下标进行比较
      if (to.meta.index < from.meta.index) {
        this.names = 'left'
      } else {
        this.names = 'right'
      }
    }
  }
}

</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
