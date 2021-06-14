<template>
  <div>
    <header>
      <div class="headerBox">
      </div>
      <div class="headerH1">
        Axian
      </div>
    </header>
    <content>
      <div class="myinfo">
        <img src="../assets/avatar.jpg"
             alt="">
        <div class="myinfoH1">阿贤哦</div>
        <div class="myinfotext">🥰你终于来啦</div>
        <div class="mylinks">

          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>🙋‍♂️ 主页</span>
            </template>
            <a href="javascript:;">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-shouye"></use>
              </svg>
            </a>
          </a-tooltip>
          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>📚 归档</span>
            </template>
            <a href="javascript:;">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-guidang"></use>
              </svg>
            </a>
          </a-tooltip>
          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>⌛ 时光机</span>
            </template>
            <a href="javascript:;">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-feichuan2"></use>
              </svg>
            </a>
          </a-tooltip>
          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>🙇‍♂️ 关于</span>
            </template>
            <a href="javascript:;">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-wode"></use>
              </svg>
            </a>
          </a-tooltip>
        </div>
      </div>
      <div class="pageBoxs">
        <a href="javascript:;">
          <div class="pageBox">
            <div class="pageBoxH1">
              文章标题
            </div>
            <div class="pageBoxP pagemargin">
              文章简介
            </div>
            <div class="pageBoxTime pagemargin">
              文章时间
            </div>
            <div class="pageBoxTag pagemargin">
              <a href="javascript:;">
                <div class="pageClass">
                  <a-icon type="inbox" />
                  文章分类
                </div>
              </a>
              <a href="javascript:;">
                <div class="pageLabel">
                  <a-icon type="tag" />
                  文章标签
                </div>
              </a>
            </div>
          </div>
        </a>

        <div class="pageBox"></div>
      </div>
    </content>
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
@media screen and (max-width: 500px) {
  .pageBox {
    width: 90%;
    height: 211px !important;
  }
  .pageBoxs {
    padding-top: 0 !important;
  }
  .pagemargin {
    margin-top: 10px !important;
  }
  .pageBoxH1 {
    font-size: 20px !important;
    font-weight: 700;
  }
  .pageBoxP {
    font-size: 15px !important;
    font-weight: 500;
  }
  .pageBoxTime {
    font-size: 10px !important;
    font-weight: 500;
  }
  .pageBoxTag {
  }
}
@media screen and (min-width: 501px) {
  .pageBox {
    width: 860px;
  }
}
@media screen and (max-width: 900px) {
  .pageBox {
    width: 90%;
  }
}
@media screen and (min-width: 901px) {
  .pageBox {
    width: 860px;
  }
}
content {
  padding: 30px 0;
}
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
  /* width: 3.651234rem; */
  height: 260px;
  /* background-color: burlywood; */
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
.mylinks {
  margin: 30px 0;
  text-align: center;
}
.mylinks .icon {
  font-size: 20px;
  margin: 0 8px;
}
.pageBoxs {
  padding-top: 50px;
}
.pageBox {
  box-sizing: border-box;
  padding: 50px 20px 20px 50px;
  transition: all 0.6s;
  margin: 56px auto;
  background-color: white;
  height: 284.438px;
}
.pageBox:hover {
  box-shadow: 1px 7px 12px 0 rgb(0 0 0 / 20%);
}
.pagemargin {
  margin-top: 20px;
}
.pageBoxH1 {
  font-size: 25px;
  font-weight: 700;
}
.pageBoxP {
  font-size: 18px;
  font-weight: 500;
}
.pageBoxTime {
  font-size: 15px;
  font-weight: 500;
}
.pageBoxTag {
}
.pageClass {
  padding: 5px 8px 5px 8px;
  font-size: 15px;
  display: inline-block;
  background-color: #c2c2c2;
  border-radius: 7px;
}

.pageClass:hover {
  background-color: #c2c2c2b6;
}
.pageLabel {
  display: inline-block;
  margin-left: 10px;
  padding: 5px 8px 5px 8px;
  background-color: #c2c2c241;
  border-radius: 7px;
  font-size: 15px;
}
.pageLabel:hover {
  background-color: #c2c2c22c;
}
.backTopIcon {
  font-size: 30px;
}
footer {
  height: 100px;
  padding-top: 20px;
  margin-bottom: 20px;
  background-color: white;
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
</style>
