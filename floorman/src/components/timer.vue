<template>
  <div>
    <div class="minutes">
      {{minutes}}
    </div>
    <div class="seconds">
      {{seconds}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class timer extends Vue{
  private minutes: number = 15;
  private seconds: number = 0;
}
</script>

<style lang="scss">

</style>
