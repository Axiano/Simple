<template>
  <div>
    <div class="pageListH1"> 留言板 </div>

    <div class="pageListBox">
      <div class="noPostBox"
           v-if="comments.length === 0">
        没有留言，快去留言吧。💬
      </div>
      <a-comment v-for="item in comments"
                 :key="item.id">
        <template slot="actions">
          <a-popconfirm title="确定要删除这篇文章码？"
                        ok-text="Yes"
                        cancel-text="No"
                        @confirm="removecomment(item.id)"
                        ref="id"
                        @cancel="cancel">
            <span>删除</span>
          </a-popconfirm>
        </template>
        <span slot="author">{{item.nickname}}</span>
        <a-avatar slot="avatar"
                  :src="commentavatar(item.email)"
                  alt="Han Solo" />
        <p slot="content"
           v-html="item.content">
        </p>
        <a-tooltip slot="datetime"
                   :title="item.time">
          <span>{{ moment(item.time).fromNow() }}</span>
        </a-tooltip>
        <div v-for="ritem in reply"
             :key="ritem.id">
          <a-comment v-if="ritem.fid == item.id">

            <template slot="actions">
              <a-popconfirm title="确定要删除这篇文章码？"
                            ok-text="Yes"
                            cancel-text="No"
                            @confirm="removereply(ritem.id)"
                            ref="id"
                            @cancel="cancel">
                <span>删除</span>
              </a-popconfirm>
            </template>
            <span slot="author">{{ritem.nickname}}
              <a-icon type="arrow-right" /> {{ritem.replypeople}}
            </span>
            <a-avatar slot="avatar"
                      :src="commentavatar(ritem.email)"
                      alt="Han Solo" />
            <p slot="content"
               v-html="ritem.content">
            </p>
            <a-tooltip slot="datetime"
                       :title="ritem.time">
              <span>{{ moment(ritem.item).fromNow() }}</span>
            </a-tooltip>
          </a-comment>
        </div>
      </a-comment>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
moment.locale('zh-cn')
export default {
  name: 'Demo',
  data () {
    return {
      moment
    }
  },
  created () {
    this.$store.dispatch('getComments')
    this.$store.dispatch('getReply')
  },
  methods: {
    successmessage () {
      this.$notify({
        title: '删除成功',
        type: 'success',
        showClose: false
      })
    },
    nosuccessmessage () {
      this.$notify.error({
        title: '删除失败',
        showClose: false
      })
    },
    cancel (e) {
      this.$message.warning('取消删除！')
    },
    commentavatar (qq) {
      return `http://q1.qlogo.cn/g?b=qq&nk=${qq}&s=100`
    },
    async removecomment (id) {
      const { data: res } = await this.$http.get(`http://api.axian.fun/my/deletecomments/${id}`)
      if (res.status !== 0) return this.nosuccessmessage()
      this.$message.success('成功删除！')
      this.$store.dispatch('getComments')
    },
    async removereply (id) {
      const { data: res } = await this.$http.get(`http://api.axian.fun/my/deletereply/${id}`)
      if (res.status !== 0) return this.nosuccessmessage()
      this.$message.success('成功删除！')
      this.$store.dispatch('getReply')
    }
  },
  computed: {
    ...mapState(['comments', 'reply'])
  }
}
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .pageListBox {
    width: 90% !important;
    /* height: 211px !important; */
  }
}
@media screen and (min-width: 501px) {
  .pageListBox {
    width: 50% !important;
  }
}
@media screen and (max-width: 900px) {
  .pageListBox {
    width: 90% !important;
  }
}
@media screen and (min-width: 901px) {
  .pageListBox {
    width: 50% !important;
  }
}
.pageListH1 {
  text-align: center;
  font-size: 25px;
  font-weight: 500;
}
.pageListBox {
  padding: 20px;
  margin: 50px auto;
  background-color: white;
}

.footer {
  height: 20px;
}
.noPostBox {
  margin: 0 auto;
  font-size: 20px;
}
</style>
