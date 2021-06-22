<template>
  <div>
    <div class="pageInfo">
      <div class="pageInfoH1">
        <a-icon type="inbox" />
        {{$route.params.class}}
      </div>
    </div>
    <div class="pageBoxs">
      <div v-for="item in pageList"
           :key="item.id">
        <router-link :to="'/post/' + item.pagepath"
                     v-if="item.pageclass === $route.params.class">
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
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['params'],
  data () {
    return {
      isDisplay: 'none'
    }
  },
  created () {
    this.$store.dispatch('getPageList')
  },
  methods: {
    // async goPost (id) {
    //   // console.log(id)
    //   const { data: res } = await this.$http.get(`http://api.axian.fun/api/getpage/${id}`)
    //   if (res.status !== 0) return
    //   this.$router.push(`/post/${res.data[0].pagepath}`)
    // }
  },
  computed: {
    ...mapState(['pageList'])
  }
}
</script>

<style scoped>
.pageInfo {
  margin: 50px 0;
  height: 0;
}
.pageInfoH1 {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
@media screen and (max-width: 500px) {
  .pageBox {
    width: 90%;
    height: 150px !important;
    padding: 20px 10px 10px 25px !important;
  }
  .pageBoxs {
    padding-top: 1px !important;
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

.pageBoxs {
  padding-top: 50px;
}
.pageBox {
  box-sizing: border-box;
  padding: 50px 20px 20px 50px;
  transition: all 0.6s;
  margin: 50px auto;
  background-color: white;
  height: 220px;
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
</style>
