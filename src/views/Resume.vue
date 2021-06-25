<template>
  <div class="box">
    <header style="z-index: 1200">
      <div class="headerBox">
      </div>
      <router-link to="/">
        <div class="headerH1">
          Axian
        </div>
      </router-link>
    </header>
    <div class="resume">
      <div id="wrapper">
        <div class="basic">
          <section v-if="d.basic">
            <h1 class="left">
              {{ d.basic.cnName }}
              <small>{{ d.basic.enName }}</small>
            </h1>
            <h2 class="right">
              {{ renderData.basic.objective }}
              <small>/ {{ renderData.basic.city }}</small>
            </h2>
          </section>
          <div class="relative"
               v-if="d.basic">
            <div class="left">
              <div class="age">
                {{ renderData.basic.sex }} / {{ renderData.basic.birth }}
              </div>
              <div class="overall">{{ renderData.basic.overall }}</div>
              <div class="college">{{ renderData.basic.college }}</div>
            </div>
            <div class="right">
              <a :href="`tel:${renderData.basic.phone}`">
                <span>{{ renderData.basic.phone }}</span>
                <i class="fa fa-phone-square"></i>
              </a>
              <a :href="`https://www.${renderData.basic.git}`">
                <span>{{ renderData.basic.git }}</span>
                <i class="fa fa-git-square"></i>
              </a>
              <a :href="`https://www.${renderData.basic.homepage}`">
                <span>{{ renderData.basic.homepage }}</span>
                <i class="fa fa-h-square"></i>
              </a>
              <a :href="`Mailto:${renderData.basic.email}`">
                <span>{{ renderData.basic.email }}</span>
                <i class="fa fa-envelope-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="skill"
             v-if="d.skill">
          <h5>{{ d.conf.lv.l1 }}</h5>
          <ul>
            <li v-for="item in d.skill"
                :key="item"
                v-html="inlineCompiler(item)"></li>
          </ul>
        </div>
        <div class="exp"
             v-if="d.exp">
          <h5>{{ d.conf.lv.l2 }}</h5>
          <ul>
            <li v-for="(item, index) in d.exp"
                :key="index">
              <div class="title">
                <span class="name">{{ item.name }}</span>
                <a v-if="item.link"
                   :href="item.link"
                   target="_blank"
                   class="link">link</a>
              </div>
              <div class="des">
                <span v-if="d.conf.lv.l4 !== ''">{{ d.conf.lv.l4 }}</span>
                <span v-html="inlineCompiler(item.des.join(''))"></span>
              </div>
              <div class="stack"
                   v-if="item.stack">
                <b>{{ d.conf.lv.l5 }}：</b>
                <span v-html="stackCompiler(item.stack)"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="project"
             v-if="d.project">
          <h5>{{ d.conf.lv.l3 }}</h5>
          <ul>
            <li v-for="(item, index) in d.project"
                :key="index">
              <a :href="item.link"
                 target="_blank"
                 class="name">{{
              item.title
            }}</a>
              <span>：</span>
              <span>{{ item.des }}</span>
            </li>
          </ul>
        </div>
        <!-- <a class="pdf"
           href="javascipr:;">
          <i class="fa fa-file-pdf-o"></i> PDF简历
        </a> -->
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      d: {},
      renderData: {},
      lastModifyTime: ''
    }
  },
  watch: {
    renderData: {
      handler (n) {
        this.d = n
      },
      deep: true
    }
  },
  methods: {
    async getConfData () {
      let [src, res] = [{}, '']
      src = await this.$http.get('https://axian.fun/conf.yml')
      try {
        res = this.$Y.safeLoad(src.data)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
      return res
    }
  },
  async mounted () {
    this.renderData = await this.getConfData()
    this.lastModifyTime = await this.renderData.conf.last
  },
  computed: {
    stackCompiler () {
      return (str) => {
        const list = str.split(' ')
        list.forEach((item, index) => {
          list[index] = `<label class='tip'>${item}</label>`
        })
        return list.join('')
      }
    },
    inlineCompiler () {
      const re = /`{1,2}[^`](.*?)`{1,2}/g
      return (str) => {
        let res = str
        if (str.match(re)) {
          let temp = res
          str.match(re).forEach((item) => {
            temp = temp.replace(
              new RegExp(item, 'g'),
              `<label class='tip-grey'>${item.replace(/`/g, '')}</label>`
            )
          })
          res = temp
        }
        return res
      }
    }
  }

}
</script>
<style lang="scss" scoped>
@import "../assets/resume/core.scss";
// 打印样式表
@import "../assets/resume/print.scss";
header {
  height: 60px;
}
.headerBox {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba(250, 250, 250, 0.8);
}

.headerH1 {
  position: fixed;
  left: 20px;
  font-size: 20px;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
  z-index: 1200;
}
.resume {
  position: relative;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  line-height: 1.57142857;
  color: #333;
  padding-top: 5px;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    padding-top: 0;
  }
  .last-modify {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 1000px;
    transform: translateX(-50%);
    text-align: right;
    font-size: 12px;
    color: #bbb;
    transition: all 0.2s ease-in-out;
    animation: fade 1.6s;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
}
.box {
  * {
    transition: all 0.5s;
    box-sizing: border-box;
    color: #333;
  }

  ul {
    list-style-type: square;
  }

  body,
  ul,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .tip {
    display: inline-block;
    background: #ccc;
    padding: 1px 5px;
    border-radius: 3px;
    margin: 0 5px 5px 0;
    font-size: 12px;
    color: #fff;
    letter-spacing: 1px;
  }

  .tip-grey {
    font-size: 13px;
    line-height: 15px;
    font-weight: 500;
    color: #494949;
    margin: 0 3px;
    padding: 0 4px;
    border-bottom: 1px solid #eee;
    box-shadow: inset 0 -8px #eee;
  }

  .link {
    line-height: 1.2;
    padding: 1px 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    color: #ccc;
  }

  .pdf {
    display: inline-block;
    position: fixed;
    z-index: 10;
    bottom: 6px;
    left: 50%;
    margin-left: 520px;
    padding: 0 8px;
    border-radius: 3px;
    font-size: 12px;
    line-height: 26px;
    color: #fff;
    background-color: #ccc;
    transition: all 0.2s ease-in-out;
    animation: fade 1.6s;
    i {
      color: #fff;
    }
    @media screen and (max-width: 1246px) {
      left: auto;
      right: 8px;
      margin-left: 0;
    }
  }
}
</style>
