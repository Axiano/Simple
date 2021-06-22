<template>
  <div>
    <div class="pageInfo">
      <div class="pageInfoH1">🙋‍♂️关于我</div>
      <div class="pageInfodescribe">
        <!-- 占位 -->
        <!-- <span>{{postInfo.pagetime}}</span> -->
      </div>
    </div>
    <transition name="slide-fade"
                mode="out-in">
      <div class="pagecontent markdown-body">
        <div class="myInfo">
          <span>欢迎来到我的 Blog，我是 Axian，90 后，爱折腾，爱生活。</span> <br />
          <span>最喜欢的一句话：<br />
            生活中只有一种英雄主义，那就是在认清生活真相之后依然热爱生活。</span> <br />
          <span>对大部分未知事物感兴趣🧑‍💻</span> <br />
          <span>喜欢 🏓 🍦 ⛅ 🎵 💻 😺 and Emoji 😆</span> <br />
          <span>如果你想联系我，可以在留言板评论或者通过邮件<a href="javascript:;"> 577914237@qq.com</a> </span>
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
@media screen and (max-width: 500px) {
  .pagecontent {
    width: 90% !important;
    padding: 20px !important;
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
.pageInfo {
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
