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
          <span>站位</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  // name: 'height',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.pageInfo {
  margin: 50px 0;
  height: 134px;
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
</style>
