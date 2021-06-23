<template>
  <div>
    <header>
      <div class="headerBox">
      </div>
      <router-link to="/">
        <div class="headerH1">
          Axian
        </div>
      </router-link>
    </header>
    <div class="box">
      <!-- 盒子区域 -->
      <div class="cards">
        <div class="card">
          <div v-bind:style="{backgroundColor: 'white', color: 'black'}"
               v-show="!isToggle"
               class="animated flipInX flashcard ">
            <!-- <div class="card-header"
             style="padding-bottom: 15px;"> 正面顶部文字 </div> -->
            <div class="card-content center">
              <p v-bind:style="{fontSize: '25px',fontWeight: 'bold'}">My Blog</p>
              <div class="tags">
                <!-- 占位 -->
              </div>
              <!-- <img v-if="imgFront!=''"
               :src="imgFront"
               width="200"
               height="200"> -->
            </div>
            <div class="card-footer"
                 @click="isToggle=!isToggle">详细点击</div>
          </div>
          <div v-bind:style="{backgroundColor: '#2ecc71', color: 'black'}"
               v-show="isToggle"
               class="animated flipInX flashcard">
            <!-- <div class="card-header"
             style="padding-bottom: 15px;">背面头部文字</div> -->
            <div class="card-content center">
              <p v-bind:style="{fontSize: '25px', fontWeight: 'bold'}">我的博客项目</p>
              <div class="tags">
                <a href="javascipt:;">
                  <a-tag color="#108ee9"
                         class="tag">
                    <a-icon type="bulb" />
                    Demo
                  </a-tag>
                </a>
                <a href="javascipt:;">
                  <a-tag color="black"
                         class="tag">
                    <a-icon type="github" />
                    Github
                  </a-tag>
                </a>
              </div>
              <!-- <img v-if="imgBack!=''"
               :src="imgBack"
               width="200"
               height="200"> -->
            </div>
            <div class="card-footer"
                 @click="isToggle=!isToggle">返回正面</div>
          </div>
        </div>
        <div class="card">
          <div v-bind:style="{backgroundColor: 'white', color: 'black'}"
               v-show="!isToggle2"
               class="animated flipInX flashcard ">
            <!-- <div class="card-header"
             style="padding-bottom: 15px;"> 正面顶部文字 </div> -->
            <div class="card-content center">
              <p v-bind:style="{fontSize: '25px',fontWeight: 'bold'}">Vue Shop</p>
              <div class="tags">
                <!-- 占位 -->
              </div>
              <!-- <img v-if="imgFront!=''"
               :src="imgFront"
               width="200"
               height="200"> -->
            </div>
            <div class="card-footer"
                 @click="isToggle2=!isToggle2">详细点击</div>
          </div>
          <div v-bind:style="{backgroundColor: '#2ecc71', color: 'black'}"
               v-show="isToggle2"
               class="animated flipInX flashcard">
            <!-- <div class="card-header"
             style="padding-bottom: 15px;">背面头部文字</div> -->
            <div class="card-content center">
              <p v-bind:style="{fontSize: '25px', fontWeight: 'bold'}">Shop for vue</p>
              <div class="tags">
                <a href="javascipt:;">
                  <a-tag color="#108ee9"
                         class="tag">
                    <a-icon type="bulb" />
                    Demo
                  </a-tag>
                </a>
                <a href="javascipt:;">
                  <a-tag color="black"
                         class="tag">
                    <a-icon type="github" />
                    Github
                  </a-tag>
                </a>
              </div>
              <!-- <img v-if="imgBack!=''"
               :src="imgBack"
               width="200"
               height="200"> -->
            </div>
            <div class="card-footer"
                 @click="isToggle2=!isToggle2">返回正面</div>
          </div>
        </div>

      </div>
    </div>
    <footer>
      <p>©2021 | <a href="https://beian.miit.gov.cn/"
           target="_block">蒙ICP备20002340号-2</a></p>
      <p>@Axian</p>
    </footer>
  </div>
</template>

<script>
// import vueFlashcard from 'vue-flashcard'
export default {
  data () {
    return {
      isToggle: false,
      isToggle2: false
    }
  }
  // components: { vueFlashcard }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .cards {
    padding: 10px !important;
    width: 100% !important;
  }
  .card {
    width: 100% !important;
  }
  .center {
    height: 70px;
  }
}
@media screen and (min-width: 501px) {
}
@media screen and (max-width: 900px) {
}
@media screen and (min-width: 901px) {
}
.cards {
  width: 500px;
  padding: 30px;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.flashcard {
  border-radius: 10px;
  margin: 20px;
  padding: 25px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  height: 160px;
}

@keyframes flipInX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

.flipInX {
  backface-visibility: visible !important;
  animation-name: flipInX;
}
.box {
  margin-bottom: 90px;
  padding-top: 10px;
}
.avatar {
  margin: 0 auto;
  display: block;
  width: 120px;
  border-radius: 50%;
}
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
}
footer {
  height: 100px;
  padding-top: 20px;
  margin-bottom: 20px;
  /* background-color: white; */
  color: black;
  font-size: 15px;
}

footer p a {
  color: black;
}

footer p {
  margin: 0;
  text-align: center;
  color: black;
}
.card2 {
  margin-top: 40px;
}
.card-footer {
  font-size: 18px;
  cursor: pointer;
}
.card-content {
  display: inline-block;
  p {
    margin: 0;
  }
}
.tags {
  margin: 10px 0;
  .tag {
    margin: 0 6px;
    cursor: pointer;
  }
}
.card {
  width: 400px;
  height: 160px;
}
</style>
