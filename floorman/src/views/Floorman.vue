<template>
  <div id="floorman">
    <br>
    <b-container>
      <br>
      <b-jumbotron header="Floorman">
        <br>
        <b-button class="setup-button" variant="primary" href="/setup">
          <h1>Setup</h1>
        </b-button>
        &nbsp;
        <b-button class="reset-button" variant="outline-primary" href="/info">
          <h1>Preset</h1>
        </b-button>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class Floorman extends Vue {
}
</script>

<style lang="scss">
</style>
