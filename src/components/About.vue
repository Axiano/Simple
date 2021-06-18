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
          欢迎来到小破站，我是 Axian，90 后，一个折腾的青少年。 <br />
          最喜欢的一句话：生活中只有一种英雄主义，那就是在认清生活真相之后依然热爱生活。 <br />
          对大部分未知事物感兴趣 <br />
          喜欢 🏓 🍦 ⛅ 🎵 💻 and Emoji 😆 <br />
          一个正在努力的在校大三生。 <br />
          🎉 欢迎你来到我的小破站 🎉 <br />

          如果你想联系我，可以直接在评论里留言或者通过邮件 <br />
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
