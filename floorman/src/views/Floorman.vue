<template>
  <div id="floorman">
    <br>
    <b-button class="setup-button" variant="outline-light" href="/setup">
      <h1>Setup</h1>
    </b-button>
    <br>
    <br>
    <b-button class="reset-button" variant="warning" href="/info">
      <h2>Preset</h2>
    </b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class Floorman extends Vue {
}
</script>

<style lang="scss">
  #floorman{
    
    height: vh;
    min-height: 100%;
  }
  .setup-button{
    padding: 8px;
  }
</style>
