<template>
  <div class="writeBigbox">
    <div class="writeBoxH1">
      {{pageForm.pagetitle}}
    </div>
    <el-form :model="pageForm"
             :rules="pageFormRules"
             ref="pageFormRef"
             :inline="true"
             class="demo-form-inline">

      <a-collapse accordion
                  expandIconPosition="right">
        <a-collapse-panel header="✍️这里修改">
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
      <router-link to="/pagelist">
        <button @click="addPage"
                :style="btnstyle">改完啦</button>
      </router-link>
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
      bdc: '123',
      nowPage: [],
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
    this.getNowPage()
  },
  mounted () {

  },
  methods: {
    successmessage () {
      this.$notify({
        title: '更新成功',
        type: 'success',
        showClose: false
      })
    },
    nosuccessmessage () {
      this.$notify.error({
        title: '更新失败',
        showClose: false
      })
    },
    async getNowPage () {
      const { data: res } = await this.$http.get(`https://api.axian.fun/my/getpage/${this.$store.state.nowId}`)
      this.pageForm.pagepath = res.data[0].pagepath
      this.pageForm.pagetitle = res.data[0].pagetitle
      this.pageForm.pagedescribe = res.data[0].pagedescribe
      this.pageForm.pagetime = res.data[0].pagetime
      this.pageForm.pageclass = res.data[0].pageclass
      this.pageForm.pagetag = res.data[0].pagetag
      this.pageForm.pagepic = res.data[0].pagepic
      this.value = res.data[0].pagecontent
      this.nowPage = res.data[0]
    },
    addPage () {
      this.$refs.pageFormRef.validate(async valid => {
        if (!valid) return
        this.pageForm.pagecontent = this.value
        const { data: res } = await this.$http.post(`https://api.axian.fun/my/undatepage/${this.$store.state.nowId}`, this.pageForm)
        if (res.status !== 0) return this.nosuccessmessage()
        // this.$refs.pageFormRef.resetFields()
        this.successmessage()
        // this.$router.push({ name: 'postlist' })
      })
    },
    inputChange () {
      this.mdhtml = this.$refs.md.d_render
    }
  },
  computed: {
    // ...mapState(['nowPage'])
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
  /* margin-top: 50px; */
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
