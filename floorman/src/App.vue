<template>
  <div id="app">
    <fmNav/>
    <router-view/>
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

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #2c3e50;
}

body{
  min-height: 100vh;
  height: 100%;
  background-color: #254a6e !important;
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
</style>
