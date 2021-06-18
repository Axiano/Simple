<template>
  <div>
    <div class="pageListH1">
      文章列表
    </div>

    <div class="pageListBox">
      <el-table :data="pageList"
                style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"
                     inline
                     class="demo-table-expand">
              <el-form-item label="文章简述：">
                <span>{{ props.row.pagedescribe }}</span>
              </el-form-item> <br />
              <el-form-item label="文章时间：">
                <span>{{ props.row.pagetime }}</span>
              </el-form-item> <br />
              <el-form-item label="文章分类：">
                <span>{{ props.row.pageclass }}</span>
              </el-form-item> <br />
              <el-form-item label="文章标签：">
                <span>{{ props.row.pagetag }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="文章地址"
                         prop="pagepath">
        </el-table-column>
        <el-table-column label="文章标题"
                         prop="pagetitle">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <button data-v-74b9c10d=""
                    type="button"
                    class="ant-btn ant-btn-primary"
                    @click="editPage(scope.row.id)"
                    style="
                          height: 22px;
                          width: 52px;
                          padding-left: 0px;
                          padding-right: 0px;
                        "><span>编辑</span></button>
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
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

// console.log(this.pageList)
export default {
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getPageList')
    // console.log(this.pageList)
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
    removePage (row) {
      console.log(row)
    },
    async confirm (id, e) {
      const { data: res } = await this.$http.get(`http://api.axian.fun/my/deletepage/${id}`)
      if (res.status !== 0) return this.nosuccessmessage()
      this.$message.success('成功删除！')
      this.$store.commit('getPageList')
    },
    cancel (e) {
      console.log(e)
      this.$message.warning('取消删除！')
    },
    editPage (id) {
      this.$store.commit('getNowId', id)
      this.$router.push('/editpage')
      console.log(this.$store.state.nowId)
    }
  },
  computed: {
    ...mapState(['pageList'])
  }
}
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .pageListBox {
    width: 90% !important;
    /* height: 211px !important; */
  }
  .pagedescribe {
    display: none !important;
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
  /* margin-top: 50px; */
  text-align: center;
  font-size: 25px;
  font-weight: 500;
}
.pageListBox {
  padding: 20px;
  width: 400px;
  height: 600px;
  margin: 0 auto;
  /* background-color: teal; */
}
.pageBox {
  position: relative;
  margin: 15px auto;
  padding: 20px 20px;
  width: 360px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
}
.pagetitle {
  font-size: 18px;
  font-weight: 500;
}
.pagesm {
  margin-top: 10px;
  font-size: 15px;
}
.pageclss {
  position: absolute;
  top: 0%;
  left: 59%;
}
.pageclass {
  margin-right: 10px;
  padding: 5px 8px 5px 8px;
  font-size: 15px;
  display: inline-block;
  background-color: #c2c2c2;
  border-radius: 7px;
}
.pageLabel {
  display: inline-block;
  margin-top: 6px;
  padding: 5px 8px 5px 8px;
  background-color: #c2c2c241;
  border-radius: 7px;
  font-size: 15px;
}
/* .removePage {
  position: absolute;
  top: 67px;
  left: 141px;
  font-size: 15px;
} */
/* .demo-table-expand {
  font-size: 0 !important;
}
.demo-table-expand label {
  width: 90px !important;
  color: #99a9bf !important;
}
.demo-table-expand .el-form-item {
  margin-right: 0 !important;
  margin-bottom: 0 !important;
  width: 50% !important;
} */
</style>
