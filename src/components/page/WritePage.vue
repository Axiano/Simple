<template>
  <div class="writeBigbox">
    <div class="writeBoxH1">
      写文章
    </div>
    <el-form :model="pageForm"
             :rules="pageFormRules"
             ref="pageFormRef"
             label-position="right"
             :inline="true"
             class="demo-form-inline">
      <a-collapse accordion>
        <a-collapse-panel key="1"
                          header="✍️请写填写这里">
          <el-form-item prop="pagepath">
            <el-input v-model="pageForm.pagepath"
                      placeholder="地址"></el-input>
          </el-form-item>
          <el-form-item prop="pagetitle">
            <el-input v-model="pageForm.pagetitle"
                      placeholder="标题"></el-input>
          </el-form-item>
          <el-form-item prop="pagetime">
            <el-input v-model="pageForm.pagetime"
                      placeholder="日期"></el-input>
          </el-form-item>
          <el-form-item prop="pagedescribe">
            <el-input v-model="pageForm.pagedescribe"
                      placeholder="文章描述"></el-input>
          </el-form-item>
          <el-form-item prop="pageclass">
            <el-input v-model="pageForm.pageclass"
                      placeholder="文章分类"></el-input>
          </el-form-item>
          <el-form-item prop="pagetag">
            <el-input v-model="pageForm.pagetag"
                      placeholder="文章标签"></el-input>
          </el-form-item>
        </a-collapse-panel>
      </a-collapse>
      <button @click="addPage"
              :style="btnstyle">写完啦</button>
    </el-form>

    <div class="writeBox">
      <mavon-editor v-model="value"
                    class="mavonBox"
                    :autofocus="false"
                    ref="md"
                    @change="inputChange" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      pageForm: {
        pagepath: '',
        pagetitle: '',
        pagedescribe: '',
        pagetime: '',
        pageclass: '',
        pagetag: '',
        pagepic: '',
        pagecontent: ''
      },
      pageFormRules: {
        pagepath: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        pagetitle: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        pagetime: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        pageclass: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        pagetag: [
          { required: true, message: ' ', trigger: 'blur' }
        ]
      },
      btnstyle: {
        fontSize: '15px',
        marginTop: '20px',
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    }
  },
  created () {
    this.value = window.localStorage.getItem('saveHtml')
    this.getTime()
    this.info()
  },
  mounted () {
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
        title: '失败',
        showClose: false
      })
    },
    addPage () {
      this.$refs.pageFormRef.validate(async valid => {
        if (!valid) return
        this.pageForm.pagecontent = this.value
        const { data: res } = await this.$http.post('http://api.axian.fun/my/addpage', this.pageForm)
        if (res.status !== 0) return this.nosuccessmessage()
        window.localStorage.setItem('saveHtml', ' ')
        // this.$refs.pageFormRef.clearSelection()
        this.$refs.pageFormRef.resetFields()
        this.successmessage()
        this.$router.push('/pagelist')
      })
    },
    inputChange () {
      this.mdhtml = this.$refs.md.d_render
      window.localStorage.setItem('saveHtml', this.value)
    },
    getTime () {
      const tm = new Date()
      const yy = tm.getFullYear()
      const mm = (tm.getMonth() + 1) <= 9 ? '0' + (tm.getMonth() + 1) : (tm.getMonth() + 1)
      const dd = tm.getDate() <= 9 ? '0' + tm.getDate() : tm.getDate()
      this.pageForm.pagetime = yy + '-' + mm + '-' + dd
    },
    info () {
      this.$notification.open({
        duration: 0,
        message: '写作提醒',
        description:
          `✏️在地址栏内填写 "草稿" 可自动生成草稿。
          ✏️文章分类只能填写一种。
          ✏️如果填写多个标签以空格相隔。 `,
        icon: <a-icon type="smile" style="color: #108ee9" />
      })
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .mavonBox {
    width: 95% !important;
  }
  .demo-form-inline {
    width: 100% !important;
  }
}
@media screen and (min-width: 501px) {
  .mavonBox {
    width: 90% !important;
  }
}
@media screen and (max-width: 900px) {
  .mavonBox {
    margin: 0 auto;
    width: 800px;
    height: 600px;
  }
}
@media screen and (min-width: 901px) {
  .mavonBox {
    margin: 0 auto;
    width: 800px;
    height: 600px;
  }
}
.writeBoxH1 {
  text-align: center;
  font-size: 25px;
  font-weight: 500;
}
.writeBox {
  padding: 20px;
}
.mavonBox {
  z-index: 9;
  margin: 0 auto;
  width: 800px;
  height: 600px;
}
.demo-form-inline {
  margin: 0 auto;
  width: 400px;
  height: auto;
}
.el-input {
  margin: 0 !important;
}
.el-form-item {
  margin: 0 !important;
}
</style>
