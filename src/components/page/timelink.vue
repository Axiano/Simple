<template>
  <div>
    <div class="pageListH1"> 时光机 </div>

    <div class="pageListBox">
      <el-table :data="timelinks"
                style="width: 100%"
                border>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"
                     inline
                     class="demo-table-expand">
              <el-form-item label="设备信息:">
                <span>{{ props.row.timeinfo }}</span>
              </el-form-item> <br />
              <el-form-item label="发布时间:">
                <span>{{ props.row.time }}</span>
              </el-form-item> <br />
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="内容"
                         prop="timecontent">
        </el-table-column>
        <el-table-column label="操作"
                         width="100px">
          <template slot-scope="scope">
            <div class="removePage">
              <a-popconfirm title="确定要删除这篇文章码？"
                            ok-text="Yes"
                            cancel-text="No"
                            @confirm="confirm(scope.row.id,$event)"
                            ref="id"
                            @cancel="cancel">
                <button data-v-74b9c10d=""
                        type="button"
                        class="ant-btn ant-btn-danger"
                        style="
                                height: 22px;
                                width: 52px;
                                padding-left: 0px;
                                padding-right: 0px;
                                margin-top: 8px
                            "><span>删除</span></button>
              </a-popconfirm>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <a-comment>
        <a-avatar slot="avatar"
                  src="https://s1.ax1x.com/2020/07/03/NX2SuF.jpg" />
        <div slot="content">
          <a-form-item>
            <a-textarea :rows="4"
                        @change="handleChange"
                        :value="timeForm.timecontent" />
          </a-form-item>
          <a-form-item>
            <a-button html-type="submit"
                      @click="addtimelink">
              发布
            </a-button>
          </a-form-item>
          <!-- <a-form-item>
            <a-button html-type="submit"
                      @click="showtimelink">
              预览
            </a-button>
          </a-form-item> -->
        </div>
      </a-comment>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Demo',
  data () {
    return {
      timeForm: {
        time: '',
        timeinfo: '',
        timecontent: ''
      },
      tt: ''
    }
  },
  created () {
    this.$store.dispatch('getTimeLinks')
    this.getTime()
    this.getTianQi()
    this.timeForm.timeinfo = this.getOS()
  },
  methods: {
    successmessage () {
      this.$notify({
        title: '成功',
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
    async confirm (id, e) {
      const { data: res } = await this.$http.get(`https://api.axian.fun/my/deletelink/${id}`)
      if (res.status !== 0) return this.nosuccessmessage()
      this.$message.success('成功删除！')
      this.$store.dispatch('getTimeLinks')
    },
    async addtimelink () {
      if (this.timeForm.timecontent === '') return this.$message.error('请填写内容')
      const { data: res } = await this.$http.post('https://api.axian.fun/my/addlink', this.timeForm)
      if (res.status !== 0) return this.nosuccessmessage()
      this.$message.success('添加成功！')
      this.timeForm.time = ''
      this.timeForm.timeinfo = ''
      this.timeForm.timecontent = ''
      this.$store.dispatch('getTimeLinks')
    },
    showtimelink () {

    },
    handleChange (e) {
      this.timeForm.timecontent = e.target.value
    },
    getTime () {
      const tm = new Date()
      const YY = tm.getFullYear()
      const MM = (tm.getMonth() + 1) <= 9 ? '0' + (tm.getMonth() + 1) : (tm.getMonth() + 1)
      const DD = tm.getDate() <= 9 ? '0' + tm.getDate() : tm.getDate()
      const hh = tm.getHours()
      if (hh >= 22) {
        this.tt = '深夜'
      } else if (hh >= 18) {
        this.tt = '傍晚'
      } else if (hh >= 14) {
        this.tt = '下午'
      } else if (hh >= 6) {
        this.tt = '上午'
      } else if (hh >= 0) {
        this.tt = '凌晨'
      }
      // + ' ' + result.data.data.forecast[0].type
      this.timeForm.time = YY + '-' + MM + '-' + DD + ' ' + this.tt
    },
    getOS () {
      var u = navigator.userAgent
      if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
        return 'windows10'
      } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
        return 'macOS'
      } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
        return 'ios'
      } else if (u.match(/android/i)) {
        return 'android'
      } else if (u.match(/Ubuntu/i)) {
        return 'Ubuntu'
      } else {
        return 'other'
      }
    },
    async getTianQi () {
      var result = await this.$http.get('http://wthrcdn.etouch.cn/weather_mini?city=北京')
      const weather = result.data.data.forecast[0].type
      this.timeForm.time += ' ' + weather
    },
    cancel (e) {
      this.$message.warning('取消删除！')
    }
  },
  computed: {
    ...mapState(['timelinks'])
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
    width: 70% !important;
  }
}
@media screen and (max-width: 900px) {
  .pageListBox {
    width: 90% !important;
  }
}
@media screen and (min-width: 901px) {
  .pageListBox {
    width: 70% !important;
  }
}
.pageListH1 {
  text-align: center;
  font-size: 25px;
  font-weight: 500;
}
.pageListBox {
  padding: 20px;
  width: 400px;
  margin: 50px auto;
}

.footer {
  height: 20px;
}
</style>
