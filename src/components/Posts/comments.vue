<template>
  <div>
    <div class="pageInfo">
      <div class="pageInfoH1">
        <a-icon type="message" />留言板
      </div>
      <div class="pageInfodescribe">
      </div>
    </div>
    <transition name="slide-fade"
                mode="out-in">
      <div class="pagecontent markdown-body">
        <div class="myInfo">
          <a-comment>
            <a-avatar slot="avatar"
                      src="https://z3.ax1x.com/2021/06/21/RAyHyT.jpg"
                      alt="Han Solo" />
            <div slot="content">
              <a-form-item>
                <div class="ainputBox">
                  <a-input addon-before="昵称"
                           placeholder="必填"
                           v-model="commentForm.nickname"
                           class="ainput" />
                  <a-input addon-before="Q Q"
                           placeholder="必填"
                           v-model="commentForm.email"
                           class="ainput" />
                  <a-input addon-before="网址"
                           placeholder="large size"
                           v-model="commentForm.url"
                           class="ainput" />
                </div>
              </a-form-item>
              <a-form-item>
                <a-textarea :rows="4"
                            ref='commentRef'
                            :value="commentText"
                            @change="changeText" />
              </a-form-item>
              <a-form-item>
                <a-popover trigger="click"
                           class="fonticon"
                           placement="bottomLeft">
                  <template slot="content">
                    <div class="emoji">
                      <div class="box1"
                           v-if="showBox === 1">
                        <div class="aru"
                             v-for="(item,i) in emoji1"
                             :key="i"
                             v-html="item.icon"
                             @click="getimgId(item.text)">
                        </div>
                      </div>
                      <div class="box1"
                           v-if="showBox === 2">
                        <div class="aru"
                             v-for="(item,i) in emoji2"
                             :key="i"
                             v-html="item.icon"
                             @click="getimgId(item.text)">
                        </div>
                      </div>
                      <div class="box1"
                           v-if="showBox === 3">
                        <div class="aru"
                             v-for="(item,i) in emoji3"
                             :key="i"
                             v-html="item.icon"
                             @click="getimgId(item.text)">
                        </div>
                      </div>
                      <div class="box2">
                        <div class="emjioLi"
                             @click="showBoxbtn(key = 1)">
                          <img src="https://z3.ax1x.com/2021/06/22/RejX4g.jpg" />
                        </div>
                        <div class="emjioLi"
                             @click="showBoxbtn(key = 2)">
                          <img src="https://7.dusays.com/2021/01/15/3c76dffbc08a5.png" />
                        </div>
                        <div class="emjioLi"
                             @click="showBoxbtn(key = 3)">
                          <img src="https://7.dusays.com/2021/01/18/d71d6b0630e7a.jpg" />
                        </div>
                      </div>
                    </div>
                  </template>
                  <svg class="icon"
                       aria-hidden="true"
                       style="cursor: pointer;"
                       @click="showemojiBoxbtn('commentRef')">
                    <use xlink:href="#icon-biaoqing"></use>
                  </svg>
                </a-popover>
                <a-button html-type="submit"
                          @click="addComment"
                          class="sendbtn">
                  发送
                </a-button>
              </a-form-item>
            </div>
          </a-comment>
          <a-comment v-for="item in comments"
                     :key="item.id">
            <template slot="actions">
              <span @click="addReply2(item.id,item.nickname)">回复</span>
            </template>
            <span slot="author"
                  style="margin-right:10px; font-size: 15px">{{item.nickname}}<a-tag color="blue"
                     style="margin-left:5px; "
                     v-if="item.email === '577914237'">站长</a-tag>
              <a-tag color="green"
                     style="margin-left:5px; "
                     v-if="item.email !== '577914237'">友友</a-tag>
            </span>
            <a-avatar slot="avatar"
                      :src="commentavatar(item.email)"
                      alt="Han Solo"
                      @click="gourl(item.url)" />
            <p slot="content"
               v-html="item.content">
            </p>
            <a-tooltip slot="datetime"
                       :title="item.time">
              <span>{{ moment(item.time).fromNow() }}</span>
            </a-tooltip>
            <a-comment v-if="item.id === commentId">
              <a-avatar slot="avatar"
                        src="https://z3.ax1x.com/2021/06/21/RAyHyT.jpg"
                        alt="Han Solo" />
              <div slot="content">
                <a-form-item>
                  <div class="ainputBox">
                    <a-input addon-before="昵称"
                             placeholder="必填"
                             v-model="replyForm.nickname"
                             class="ainput" />
                    <a-input addon-before="Q Q"
                             placeholder="必填"
                             v-model="replyForm.email"
                             class="ainput" />
                    <a-input addon-before="网址"
                             placeholder="large size"
                             v-model="replyForm.url"
                             class="ainput" />
                  </div>
                </a-form-item>
                <a-form-item>
                  <a-textarea :rows="4"
                              id="replyRef"
                              :value="contentText"
                              @change="changeText2" />
                </a-form-item>
                <a-popover trigger="click"
                           class="fonticon"
                           placement="bottomLeft">
                  <template slot="content">
                    <div class="emoji">
                      <div class="box1"
                           v-if="showBox === 1">
                        <div class="aru"
                             v-for="(item,i) in emoji1"
                             :key="i"
                             v-html="item.icon"
                             @click="getimgId2(item.text)">
                        </div>
                      </div>
                      <div class="box1"
                           v-if="showBox === 2">
                        <div class="aru"
                             v-for="(item,i) in emoji2"
                             :key="i"
                             v-html="item.icon"
                             @click="getimgId2(item.text)">
                        </div>
                      </div>
                      <div class="box1"
                           v-if="showBox === 3">
                        <div class="aru"
                             v-for="(item,i) in emoji3"
                             :key="i"
                             v-html="item.icon"
                             @click="getimgId2(item.text)">
                        </div>
                      </div>
                      <div class="box2">
                        <div class="emjioLi"
                             @click="showBoxbtn(key = 1)">
                          <img src="https://z3.ax1x.com/2021/06/22/RejX4g.jpg" />
                        </div>
                        <div class="emjioLi"
                             @click="showBoxbtn(key = 2)">
                          <img src="https://7.dusays.com/2021/01/15/3c76dffbc08a5.png" />
                        </div>
                        <div class="emjioLi"
                             @click="showBoxbtn(key = 3)">
                          <img src="https://7.dusays.com/2021/01/18/d71d6b0630e7a.jpg" />
                        </div>
                      </div>
                    </div>
                  </template>
                  <svg class="icon"
                       aria-hidden="true"
                       style="cursor: pointer;"
                       @click="showemojiBoxbtn('replyRef')">
                    <use xlink:href="#icon-biaoqing"></use>
                  </svg>
                </a-popover>
                <a-form-item>
                  <a-button html-type="submit"
                            @click="addReplyBtn"
                            class="sendbtn">
                    发送
                  </a-button>
                </a-form-item>
              </div>
            </a-comment>
            <div v-for="ritem in reply"
                 :key="ritem.id">
              <a-comment v-if="ritem.fid == item.id">
                <template slot="actions">
                  <span @click="addReply(ritem.id, ritem.nickname, item.id)">回复</span>
                </template>
                <span slot="author"
                      style="margin-right:10px; font-size: 15px">{{ritem.nickname}}<a-tag color="blue"
                         style="margin-left:5px; "
                         v-if="ritem.email === '577914237'">站长</a-tag>
                  <a-tag color="green"
                         style="margin-left:5px; "
                         v-if="ritem.email !== '577914237'">友友</a-tag>
                  <svg class="icon"
                       aria-hidden="true"
                       style="width:15px; height: 15px;">
                    <use xlink:href="#icon-huifu"></use>
                  </svg> {{ritem.replypeople}}
                </span>
                <a-avatar slot="avatar"
                          :src="commentavatar(ritem.email)"
                          alt="Han Solo"
                          @click="gourl(ritem.url)" />
                <p slot="content"
                   v-html="ritem.content">
                </p>
                <a-tooltip slot="datetime"
                           :title="ritem.time">
                  <span>{{ moment(ritem.item).fromNow() }}</span>
                </a-tooltip>
              </a-comment>
              <a-comment v-if="ritem.id === replyId && ritem.fid === item.id">
                <a-avatar slot="avatar"
                          src="https://z3.ax1x.com/2021/06/21/RAyHyT.jpg"
                          alt="Han Solo" />
                <div slot="content">
                  <a-form-item>
                    <div class="ainputBox">
                      <a-input addon-before="昵称"
                               placeholder="必填"
                               v-model="replyForm.nickname"
                               class="ainput" />
                      <a-input addon-before="Q Q"
                               placeholder="必填"
                               v-model="replyForm.email"
                               class="ainput" />
                      <a-input addon-before="网址"
                               placeholder="large size"
                               v-model="replyForm.url"
                               class="ainput" />
                    </div>
                  </a-form-item>
                  <a-form-item>
                    <a-textarea :rows="4"
                                :value="contentText"
                                id="replyRef2"
                                @change="changeText2" />
                  </a-form-item>
                  <a-popover trigger="click"
                             class="fonticon"
                             placement="bottomLeft">
                    <template slot="content">
                      <div class="emoji">
                        <div class="box1"
                             v-if="showBox === 1">
                          <div class="aru"
                               v-for="(item,i) in emoji1"
                               :key="i"
                               v-html="item.icon"
                               @click="getimgId2(item.text)">
                          </div>
                        </div>
                        <div class="box1"
                             v-if="showBox === 2">
                          <div class="aru"
                               v-for="(item,i) in emoji2"
                               :key="i"
                               v-html="item.icon"
                               @click="getimgId2(item.text)">
                          </div>
                        </div>
                        <div class="box1"
                             v-if="showBox === 3">
                          <div class="aru"
                               v-for="(item,i) in emoji3"
                               :key="i"
                               v-html="item.icon"
                               @click="getimgId2(item.text)">
                          </div>
                        </div>
                        <div class="box2 ">
                          <div class="emjioLi"
                               style="background-color: brown;"
                               @click="showBoxbtn(key = 1)"
                               v-if="showBox === 1 ">
                            <img src="https://z3.ax1x.com/2021/06/22/RejX4g.jpg" />
                          </div>
                          <div class="emjioLi"
                               @click="showBoxbtn(key = 2)">
                            <img src="https://7.dusays.com/2021/01/15/3c76dffbc08a5.png" />
                          </div>
                          <div class="emjioLi"
                               @click="showBoxbtn(key = 3)">
                            <img src="https://7.dusays.com/2021/01/18/d71d6b0630e7a.jpg" />
                          </div>
                        </div>
                      </div>
                    </template>
                    <svg class="icon"
                         aria-hidden="true"
                         style="cursor: pointer;"
                         @click="showemojiBoxbtn('replyRef2')">
                      <use xlink:href="#icon-biaoqing"></use>
                    </svg>
                  </a-popover>
                  <a-form-item>
                    <a-button html-type="submit"
                              @click="addReplyBtn"
                              class="sendbtn">
                      发送
                    </a-button>
                  </a-form-item>
                </div>
              </a-comment>
            </div>
          </a-comment>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from 'moment'

import { mapState } from 'vuex'

moment.locale('zh-cn')
export default {
  data () {
    return {
      IsColor: true,
      showBox: 1,
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
      commentForm: {
        email: '',
        nickname: '',
        content: '',
        time: '',
        url: 'http://'
      },
      replyForm: {
        fid: '',
        email: '',
        replypeople: '',
        nickname: '',
        content: '',
        url: 'http://',
        time: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      contentText: '',
      commentText: '',
      replyId: '',
      commentId: '',
      clickNum: 0,
      clickNum2: 0
    }
  },
  beforeCreate () {
  },
  created () {
    this.$store.dispatch('getaru')
    this.$store.dispatch('getComments')
    this.$store.dispatch('getReply')
  },
  mounted () {

  },
  methods: {
    showemojiBoxbtn (text) {
      if (text === 'commentRef') {
        this.$refs.commentRef.focus()
      } else if (text === 'replyRef') {
        document.getElementById('replyRef').focus()
      } else if (text === 'replyRef2') {
        document.getElementById('replyRef2').focus()
        // this.$refs.replyRef2.focus()
      }
    },
    getimgId (text) {
      this.commentText = this.commentText + '<' + text + ':'
    },
    getimgId2 (text) {
      this.contentText = this.contentText + '<' + text + ':'
    },
    showBoxbtn (key) {
      this.showBox = key
    },
    success () {
      this.$message.success('评论成功！')
    },
    error () {
      this.$message.error('评论失败！')
    },
    warning () {
      this.$message.warning('请填写必填项！')
    },
    async addComment () {
      this.commentForm.content = this.commentText
      this.commentForm.nickname.trim()
      this.commentForm.email.trim()
      this.commentForm.url.trim()
      if (this.commentForm.nickname === '' || this.commentForm.email === '' || this.commentForm.url === '') { return this.warning() }
      this.commentForm.time = moment().format('YYYY-MM-DD HH:mm:ss')
      const { data: res } = await this.$http.post('https://api.axian.fun/api/addcomments', this.commentForm)
      if (res.status !== 0) return this.error()
      this.commentForm.nickname = ''
      this.commentForm.email = ''
      this.commentForm.url = 'https://'
      this.commentText = ''
      this.$store.dispatch('getComments')
    },
    changeText (e) {
      this.commentText = e.target.value
    },
    changeText2 (e) {
      this.contentText = e.target.value
    },
    commentavatar (qq) {
      return `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=100`
    },
    addReply (id, nickname, fid) {
      this.clickNum++
      this.replyForm.time = moment().format('YYYY-MM-DD HH:mm:ss')
      this.replyForm.replypeople = nickname
      this.replyForm.fid = fid
      this.replyId = id
      if (this.clickNum === 2) {
        this.replyId = ''
        this.clickNum = 0
      }
    },
    async addReplyBtn () {
      this.replyForm.content = this.contentText
      this.replyForm.nickname.trim()
      this.replyForm.email.trim()
      this.replyForm.url.trim()
      if (this.replyForm.nickname === '' || this.replyForm.email === '' || this.replyForm.url === '') { return this.warning() }
      this.replyForm.time = moment().format('YYYY-MM-DD HH:mm:ss')
      const { data: res } = await this.$http.post('https://api.axian.fun/api/addreply', this.replyForm)
      if (res.status !== 0) return this.error()
      this.success()
      this.replyForm.nickname = ''
      this.replyForm.email = ''
      this.replyForm.url = ''
      this.contentText = ''
      this.replyForm.url = 'https://'
      this.commentId = ''
      this.clickNum2 = 0
      this.clickNum = 0
      this.replyId = ''
      this.$store.dispatch('getReply')
    },
    addReply2 (id, nickname) {
      this.replyForm.time = moment().format('YYYY-MM-DD HH:mm:ss')
      this.commentId = id
      this.replyForm.fid = id
      this.replyForm.replypeople = nickname
      this.clickNum2++
      if (this.clickNum2 === 2) {
        this.commentId = ''
        this.clickNum2 = 0
      }
    },
    gourl (url) {
      window.open(url, '_blank')
    }
  },
  computed: {
    ...mapState(['comments', 'reply', 'aru', 'emoji1', 'emoji2', 'emoji3'])
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 500px) {
  .pagecontent {
    width: 90% !important;
    padding: 20px !important;
  }
  .ainputBox {
    display: block !important;
  }
  .emoji {
    width: 240px !important;
    height: 180px !important;
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
  padding: 30px;
  width: 748px;
  background-color: white;
}
.myInfo {
  font-size: 18px;
}
.ainputBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.ainput {
  margin-left: 10px;
}
.sendbtn {
  float: right;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.fonticon {
  font-size: 25px;
}
.emoji {
  width: 400px;
  height: 200px;
  .box1 {
    width: 100%;
    height: 80%;
    overflow: auto;
    .aru {
      display: inline-block;
      margin-right: 5px;
      cursor: pointer;
    }
  }
  .box2 {
    border: 1px #b2b2b2 solid;
    cursor: pointer;
    width: 100%;
    height: 20%;
    .emjioLi {
      display: inline-flex;
      margin-right: 10px;
      width: 50px;
      height: 100%;
      img {
        height: 30px;
        transform: translate(25%, 15%);
      }
    }
    .emjioLi:hover {
      background-color: #f1f1f2;
    }
  }
}
.aCard {
  height: 100%;
}
</style>
