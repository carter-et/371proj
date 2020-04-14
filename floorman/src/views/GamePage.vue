<template>
  <div id="game-page">
    <b-container id="game-page-body">
      <b-row id="chip-display">
        <b-col v-for="(chip, index) in chips" :key="index" :index="index">
          <img src="../../public/assets/red-chip.png" height="120px" width="120px">
        </b-col>
      </b-row>
      <b-row id="time-display">
        <h1>14:59</h1>
      </b-row>
      <b-row id="controls">
        <b-col>
          <b-button variant="warning">
            <template>
              <b-icon icon="skip-backward"></b-icon>
            </template>              
          </b-button>
         </b-col>
        <b-col>
          <b-button-group>
            <b-button variant="danger">
              <template>
                <b-icon icon="pause-fill"></b-icon>
              </template>              
            </b-button>
            <b-button variant="warning">
              <template>
                <b-icon icon="play"></b-icon>
              </template>              
            </b-button>
          </b-button-group>
        </b-col>
        <b-col>
          <b-button variant="warning">
            <template>
              <b-icon icon="skip-forward"></b-icon>
            </template>              
          </b-button>   
        </b-col>
      </b-row>
      <b-row id="blind-info">
        <b-col>
          <b-row id="blind-titles">
            <b-col>
              <h2>Prev sb/Bb</h2>
            </b-col>
            <b-col>
              <h1>sb/Bb</h1>
            </b-col>
            <b-col>
              <h2>Next sb/Bb</h2>
            </b-col>
          </b-row>
          <b-row id="blind-values">
            <b-col>
              <h2></h2>
            </b-col>
            <b-col>
              <h1>1/2</h1>
            </b-col>
            <b-col>
              <h2>2/4</h2>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Chip from '../types/chips';
@Component
export default class GamePage extends Vue {
  get chips(): Chip[] {
    console.log(this.$store.state.chips);
    return this.$store.state.chips;
  }
}
</script>

<style lang="scss">

</style>
