<template>
  <div id="app">
    <fmNav/>
    <router-view/>

    <div class="footer">
      <b-container>
        <div class="icons">
          <a href="https://bootstrap-vue.org/"><b-icon id="bs_logo" icon="bootstrap"/></a>
          <a href="https://github.com/carter-et/371proj"><img id="gh_logo" :src="getImgUrl('gh-logo.png')"></a>
        </div>
        <div class="hey-its-me">
          Copyright &#169; Ethan Carter
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import fmNav from './components/navbar.vue';


@Component({
  components: {
    fmNav
  }
})
export default class App extends Vue {
  getImgUrl(pic: string) {
    return require('../public/assets/' + pic)
  }
}
</script>

<style lang="scss">
html{
  background: #eee;
  min-height: 100%;
}

body{
  min-height: 100vh;
  height: 100%;
  background-color: #254a6e !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  display: grid;
  // color: #2c3e50;
  // background-color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#bs_logo {
  height: 64px;
  width: 64px;
}

#gh_logo {
  height: 64px;
  width: 64px;
}

.footer {
  // position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  // height: 20%;
  opacity: .65;
  background-color: black;
  color: white;
  text-align: center;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;

  & li{
  display: inline-block;
  margin-bottom: 4px;
  }
  & a {
  color: white;
  padding: 4px;
  display: block;
    &:active {
      color: lightblue;
    }
    &:hover {
      color: gray;
      
      #gh_logo{opacity: .65;}
    
    }
  }
}

</style>
