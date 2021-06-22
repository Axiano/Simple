<template>
  <div>
    <content>
      <div class="myinfo">
        <img src="../../assets/avatar.jpg"
             alt="">
        <div class="myinfoH1">阿贤哦</div>
        <div class="myinfotext">🌱简洁，但是不失优雅</div>
        <div class="mylinks">

          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>🙋‍♂️ 主页</span>
            </template>
            <router-link to="/">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-shouye"></use>
              </svg>
            </router-link>

          </a-tooltip>
          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>⌛ 时光机</span>
            </template>
            <router-link :to="{name: 'times'}">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-feichuan2"></use>
              </svg>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>💬 留言</span>
            </template>
            <router-link :to="{name: 'comments'}">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-liuyan"></use>
              </svg>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>🙇‍♂️ 关于</span>
            </template>
            <router-link to="/about">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-guanyu1"></use>
              </svg>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="top"
                     overlayClassName="bgc_tooltip">
            <template slot="title">
              <span>👷 登录</span>
            </template>
            <router-link to="/welcome">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-wode"></use>
              </svg>
            </router-link>
          </a-tooltip>
        </div>
      </div>
      <div class="noPostBox"
           v-if="total === 0">
        没有文章啦，快去写一篇吧。📝
      </div>
      <div class="pageBoxs">
        <div v-for="item in postList"
             :key="item.id">
          <router-link :to="'/post/' + item.pagepath"
                       v-if="item.pagepath !== '草稿' ">
            <div class="pageBox">
              <div class="pageBoxH1">
                {{item.pagetitle}}
              </div>
              <div class="pageBoxP pagemargin">
                {{item.pagedescribe}}
              </div>
              <div class="pageBoxTime pagemargin">
                {{item.pagetime}}
              </div>
              <div class="pageBoxTag pagemargin">
                <router-link :to="{name: 'class', params:{class: item.pageclass}}">
                  <div class="pageClass">
                    <a-icon type="inbox" />
                    {{item.pageclass}}
                  </div>
                </router-link>
                <router-link :to="{name: 'tags', params: {tag: tag}}">
                  <div class="pageLabel"
                       v-for="(item2, i) in item.pagetag.split(' ')"
                       :key="i"
                       @click="goTagPage(item2)">
                    <a-icon type="tag" />
                    {{item2}}
                  </div>
                </router-link>
              </div>
            </div>
          </router-link>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <a-pagination v-model="current"
                        :total="total"
                        :defaultPageSize="size"
                        show-less-items
                        @change="changePno"
                        :hideOnSinglePage="true" />
        </div>
      </div>
    </content>
  </div>
</template>

<script>
import '../../assets/markdown/css/markdown.scss'
import '../../assets/markdown/css/code.scss'

export default {
  data () {
    return {
      transitionName: 'slide-left', // 默认动画
      postList: [],
      tag: '',
      strtag: '',
      total: 0,
      current: 1,
      size: 6
    }
  },
  created () {
    this.getTotal()
    this.getPageList()
  },
  mounted () {

  },
  methods: {
    async getPageList () {
      const { data: res } = await this.$http.get('http://api.axian.fun/api/lists', { params: { pno: this.current--, size: this.size } })
      this.postList = res
      this.current++
    },
    async getTotal () {
      const { data: res } = await this.$http.get('http://api.axian.fun/api/showtotalnum')
      this.total = res[0].total
    },
    goTagPage (tag) {
      this.tag = tag
    },
    changePno (pno, size) {
      this.current = pno
      this.size = size
      this.getPageList()
    },
    handleCurrentChange () {

    }
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
    padding: 30px 10px 10px 30px !important;
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
.myinfo {
  margin: 0 auto;
  padding: 40px 0;
  /* width: 3.651234rem; */
  /* height: 260px; */
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
  margin-top: 20px;
  text-align: center;
}
.mylinks .icon {
  font-size: 20px;
  margin: 0 8px;
}
.pageBox {
  box-sizing: border-box;
  padding: 50px 20px 20px 50px;
  transition: all 0.6s;
  margin: 50px auto;
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
.pagination {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) !important;
}
.noPostBox {
  width: 300px;
  margin: 0 auto;
  font-size: 20px;
}
</style>
