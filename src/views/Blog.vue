<template>
  <div>
    <header>
      <div class="headerBox">
      </div>
      <router-link to="/blog">
        <div class="headerH1">
          Axian
        </div>
      </router-link>
    </header>
    <transition name="slide-fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
    <footer>
      <p>©2021 | <a href="https://beian.miit.gov.cn/"
           target="_block">蒙ICP备20002340号-2</a></p>
      <p>@Axian</p>
    </footer>
    <div>
      <a-back-top>
        <svg class="icon backTopIcon"
             aria-hidden="true">
          <use xlink:href="#icon-fanhuidingbu"></use>
        </svg>
      </a-back-top>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
  }

}
</script>

<style scoped>
header {
  height: 60px;
}
.headerBox {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba(250, 250, 250, 0.8);
}

.headerH1 {
  position: fixed;
  left: 20px;
  font-size: 20px;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
}
.myinfo {
  margin: 0 auto;
  padding: 40px 0;
  height: 260px;
}
.myinfo img {
  margin: 0 auto;
  display: block;
  width: 90px;
  border-radius: 50%;
}
.myinfoH1 {
  margin: 20px 0 20px 0;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  z-index: 100;
}
.myinfotext {
  text-align: center;
  font-size: 15px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.backTopIcon {
  font-size: 30px;
}
footer {
  height: 100px;
  padding-top: 20px;
  margin-top: 97px;
  /* background-color: white; */
  color: black;
  font-size: 15px;
}

footer p a {
  color: black;
}

footer p {
  margin: 0;
  text-align: center;
  color: black;
}
/*app.vue  的style*/
/* .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
} */

/* 过度动画CSS */
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
</style>
