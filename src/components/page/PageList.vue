<template>
  <div>
    <div class="pageListH1"> 文章列表 </div>

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
                         prop="pagepath"
                         column-key="草稿"
                         :filters="[{text: '草稿', value: '草稿'}]"
                         :filter-method="filterHandler">
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
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getPageList')
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
      const { data: res } = await this.$http.get(`my/deletepage/${id}`)
      if (res.status !== 0) return this.nosuccessmessage()
      this.$message.success('成功删除！')
      this.$store.dispatch('getPageList')
    },
    cancel (e) {
      this.$message.warning('取消删除！')
    },
    editPage (id) {
      this.$store.commit('getNowId', id)
      this.$router.push('/editpage')
    },
    filterHandler (value, row, column) {
      return value === row.pagepath
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
