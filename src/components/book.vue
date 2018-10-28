<template>
  <div id="PROJECT" class="wrap">
    <nav class="head">
      <div class="main">
        <h1>
          <span @click="ui.menu = ! ui.menu" style="cursor: pointer;user-select: none;" title="别说话，点我(～￣▽￣)～*">
            {{ui.menu ? 'o(*￣▽￣*)ブ' : 'o(^▽^)o' }}
          </span>
          {{title}}
        </h1>
      </div>
    </nav>
    <div class="mainWrap" :class="{showMenuInMainWrap: ui.menu}">
      <div class="slider scrollbar" :class="{hidemenu: !ui.menu}">
        <ol>
          <li v-for="data in project_list" :key="data.order">
            <span><a :href="'#' + data.title">{{data.title}}</a></span>
            <ul>
              <li v-for="(list, index) in data.list" v-if="data.list.length > 0" :key="index"><a :href="'#' + list.list ">{{list.list}}</a></li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="main">
        <main v-for="data in project_list" :key="data.order">
          <h1 :id="data.title">{{data.title}}</h1>
          <p class="small-font">
            {{data.subTitle}}
          </p>
          <ul>
            <li v-for="(list, index) in data.list" v-if="data.list.length > 0" :key="index">
              <p :id="list.list">{{list.list}}</p>
              <pre v-if="list.content && list.content.length > 0" class="content scrollbar" v-html="list.content"></pre>
              <div class="imgContent" v-if="list.imgContent && list.imgContent.length > 0" v-html="list.imgContent"></div>
            </li>
          </ul>
          <article class="content" v-if="data.content.length > 0">
            <pre v-html="data.content"></pre>
          </article>
        </main>
      </div>
    </div>

  </div>
</template>

<script>
import { Data } from '@/data';
export default {
  name: 'Book',
  data() {
    return Data
  },
  methods: {},
  mounted() {},
  created() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#PROJECT,
.slider {
  height: 100%;
}
.small-font {
  font-size: 16px;
  color: grey;
}
nav.head {
  width: 100%;
  height: 60px;
  display: flex;
  background: #2282c0;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 2px 2px 3px #eeeeee;
  position: fixed;
  top: 0;
}
.content {
  display: block;
  padding: 10px 20px;
  border: 1px dashed #1b2b34;
  font-family: '微软雅黑';
  word-wrap: break-word;
  overflow-x: auto;
}
.imgContent {
  display: flex;
  align-items: center;
}
pre.content {
  background: #eee;
}
.mainWrap {
  display: flex;
  justify-content: space-between;
  height: 100%;
  transition: all 600ms;
}
.showMenuInMainWrap {
  padding-left: 300px;
}
.main {
  width: 80%;
  min-width: 300px;
  margin: 0 auto;
}
.scrollbar {
  overflow: auto;
}

.scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #d1d4da;
  border-radius: 10px;
}
.slider {
  position: fixed;
  top: 60px;
  left: 0;
  width: 300px;
  background: #eee;
  transition: all 600ms;
  overflow-x: hidden;
  overflow-y: auto;
}
.slider a {
  font-size: 12px;
  text-decoration: none;
  color: #1b2b34;
}
.slider a:hover {
  color: #2282c0;
}
.hidemenu {
  transform: translateX(-100%);
  visibility: hidden;
}
</style>
