<template>
  <div>
    <div class="pageInfo">
      <div class="pageInfoH1">{{postInfo.pagetitle}}</div>
      <div class="pageInfodescribe">
        <span>{{postInfo.pagetime}}</span>
      </div>
    </div>
    <div class="pagecontent markdown-body"
         v-html="pagecontent">
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import '../assets/markdown/css/markdown.scss'
import '../assets/markdown/css/code.scss'
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  // name: 'height',
  data () {
    return {
      postInfo: [],
      pagecontent: ''
    }
  },
  created () {
    const path = this.$route.path.slice(6)
    this.getPost(path)
  },
  mounted () {
    // const link = document.createElement('link')
    // link.type = 'text/css'
    // link.rel = 'stylesheet'
    // link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
    // document.head.appendChild(link)
  },
  methods: {
    async getPost (path) {
      const { data: res } = await this.$http.get(`http://api.axian.fun/api/getpagebypath/${path}`)
      this.postInfo = res.data[0]
      this.pagecontent = marked(res.data[0].pagecontent)
    }
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.pageInfo {
  margin: 50px 0;
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
  padding: 56px;
  width: 748px;
  background-color: white;
}
/* 文章CSS */
</style>
