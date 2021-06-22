<template>
  <div>
    <div class="pageInfo">
      <div class="pageInfoH1">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-feichuan2"></use>
        </svg>
        时光机
      </div>
    </div>
    <transition name="slide-fade"
                mode="out-in">
      <div class="pagecontent markdown-body">
        <div class="myInfo">
          <div class="timelinkBoxs"
               v-for="item in timelinks"
               :key="item.id">
            <img src="../../assets/avatar.jpg"
                 alt="">
            <div class="pBox"
                 v-html="item.timecontent">
            </div>
            <div class="timeinfo">
              <div class="equipemnt">
                <a-icon type="windows"
                        v-if="item.timeinfo === 'windows10'" />
                <a-icon type="apple"
                        v-if="item.timeinfo === 'ios'" />
                <a-icon type="android"
                        v-if="item.timeinfo === 'android'" />
                {{item.timeinfo}}
              </div>
              <div class="timeBox">{{item.time}}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // name: 'height',
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getTimeLinks')
  },
  methods: {

  },
  computed: {
    ...mapState(['timelinks'])
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 500px) {
  .pagecontent {
    width: 90% !important;
    padding: 20px !important;
  }
  .timelinkBoxs {
    width: 100% !important;
    padding: 8px !important;
  }
  .timeinfo {
    // left: 51% !important;
  }
}
@media screen and (min-width: 501px) {
}
@media screen and (max-width: 900px) {
  .pagecontent {
    width: 90% !important;
  }
}
@media screen and (min-width: 901px) {
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.pageInfo {
  margin: 50px 0;
  // height: 134px;
}
.pageInfoH1 {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.pageInfodescribe {
  margin: 15px 0;
  text-align: center;
  font-size: 20px;
}
.pagecontent {
  margin: 0 auto;
  padding: 56px;
  width: 748px;
  background-color: white;
}
.myInfo {
  font-size: 18px;
}
.timelinkBoxs {
  position: relative;
  margin: 20px auto;
  padding: 15px;
  padding-bottom: 8px;
  width: 420px;
  background-color: rgba(38, 171, 233, 0.486);
  border-radius: 13px;
  img {
    position: absolute;
    width: 50px;
    border-radius: 50%;
  }
  .pBox {
    margin-left: 74px;
    margin-top: 10px;
    font-size: 16px;
    width: 80%;
  }
  .timeinfo {
    display: flex;
    position: relative;
    z-index: 10;
  }
  .equipemnt {
    display: inline-block;
    margin-left: auto;
    justify-content: flex-end;
    font-size: 10px;
  }
  .timeBox {
    display: inline-block;
    margin-left: 10px;
    font-size: 10px;
  }
}
</style>
