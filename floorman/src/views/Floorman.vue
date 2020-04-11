<template>
  <div id="floorman">
    This is the home page
    <b-button lg="4" variant="outline-primary" href="/setup">
      Setup
    </b-button>
    <b-button variant="primary">
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

</style>
