<template>
  <div>
    <div class="pageInfo">
      <div class="pageInfoH1">{{postInfo.pagetitle}}</div>
      <div class="pageInfodescribe">
        <span>{{postInfo.pagetime}}</span>
      </div>
    </div>
    <div class="postBox">
      <div class="pagecontent markdown-body"
           v-highlight
           v-html="pagecontent">
      </div>
    </div>

  </div>
</template>

<script>
import marked from 'marked'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.css'
import '../assets/markdown/css/markdown.scss'

export default {
  data () {
    return {
      code: '```javascript\nfunction(){\n\tconsole.log(123)\n}\n```',
      postInfo: [],
      pagecontent: ''
    }
  },
  created () {
    const path = this.$route.path.slice(6)
    this.getPost(path)
  },
  mounted () {
    // var rendererMD = new marked.Renderer()
    // marked.setOptions({
    //   renderer: rendererMD,
    //   highlight: function (code) {
    //     return hljs.highlightAuto(code).value
    //   },
    //   pedantic: false,
    //   gfm: true,
    //   tables: true,
    //   breaks: false,
    //   sanitize: false,
    //   smartLists: true,
    //   smartypants: false,
    //   xhtml: false
    // })
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
@media screen and (max-width: 500px) {
  .postBox {
    width: 90% !important;
  }
  .postBox {
    padding: 20px 15px !important;
  }
}
@media screen and (min-width: 501px) {
}
@media screen and (max-width: 900px) {
  .postBox {
    width: 90% !important;
  }
}
@media screen and (min-width: 901px) {
}
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
  // box-shadow: white;
}
.postBox {
  padding: 56px;
  background-color: white;
  overflow: hidden;
  width: 748px;
  margin: 0 auto;
}
</style>
