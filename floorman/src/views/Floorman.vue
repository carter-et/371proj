<template>
  <div id="floorman">
    <b-button class="setup-button" variant="outline-light" href="/setup">
      Setup
    </b-button>
    <br>
    <b-button class="reset-button" variant="warning">
      Preset
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
    background-color: darkgreen;
    height: vh;
    min-height: 100%;
  }
  .setup-button{
    padding: 8px;
  }
</style>
