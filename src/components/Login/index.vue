<template>
  <div>
    <div class="frame">
      <div class="box"></div>
      <div class="manubtn"
           :offset-top="top">
        <a href="javascript:;"
           type="primary"
           @click="showDrawer">
          <svg class="icon"
               aria-hidden="true"
               style="width: 60px; height:60px">
            <use xlink:href="#icon-duanxin"></use>
          </svg>
        </a>
      </div>
      <a-drawer :placement="placement"
                :closable="false"
                :visible="visible"
                @close="onClose">
        <a-menu style="width: 150px padding: 0"
                :default-selected-keys="['1']"
                :default-open-keys="['sub1']"
                mode="inline">
          <a-menu-item key="1"
                       @click="gohome">
            <svg class="icon"
                 aria-hidden="true"
                 style="display: inline-block; width: 15px; height:15px; margin-right: 10px">
              <use xlink:href="#icon-shouye"></use>
            </svg>
            返回博客
          </a-menu-item>
          <a-menu-item key="2"
                       @click="goWrite">
            <svg class="icon"
                 aria-hidden="true"
                 style="display: inline-block; width: 15px; height:15px; margin-right: 10px">
              <use xlink:href="#icon-xiewenzhang"></use>
            </svg>
            来灵感了
          </a-menu-item>
          <a-menu-item key="3"
                       @click="goList">
            <svg class="icon"
                 aria-hidden="true"
                 style="display: inline-block; width: 15px; height:15px; margin-right: 10px">
              <use xlink:href="#icon-liebiao"></use>
            </svg>
            文章列表
          </a-menu-item>
          <a-menu-item key="4"
                       @click="goTimeLinks">
            <svg class="icon"
                 aria-hidden="true"
                 style="display: inline-block; width: 15px; height:15px; margin-right: 10px">
              <use xlink:href="#icon-feichuan2"></use>
            </svg>
            时光机
          </a-menu-item>
          <a-menu-item key="5"
                       @click="getComments">
            <svg class="icon"
                 aria-hidden="true"
                 style="display: inline-block; width: 15px; height:15px; margin-right: 10px">
              <use xlink:href="#icon-liuyan"></use>
            </svg>
            评论管理
          </a-menu-item>
          <a-menu-item key="6"
                       @click="goBanck">
            注销
          </a-menu-item>
        </a-menu>
      </a-drawer>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: 10,
      visible: false,
      placement: 'left'
    }
  },
  created () {

  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    onChange (e) {
      this.placement = e.target.value
    },
    goWrite () {
      this.$router.push('/wirtepage')
      this.visible = false
    },
    goList () {
      this.$router.push('/pagelist')
      this.visible = false
    },
    gohome () {
      this.$router.push('/blog')
      this.visible = false
    },
    goBanck () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/blog')
    },
    goTimeLinks () {
      this.$router.push('/timelinks')
    },
    getComments () {
      this.$router.push('/comment')
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.icon {
  display: flex;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.manubtn {
  position: fixed;
  top: 114px;
  z-index: 20;
}
/* .box {
  width: 50px;
  height: 800px;
  background-color: wheat;
} */
</style>
