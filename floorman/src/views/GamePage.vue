<template>
  <div id="game-page">
    <br>
    <b-container id="game-page-body">
      <b-jumbotron>

        <b-row id="chip-display">
          <b-col v-for="(chip, index) in chips" :key="index" :index="index">
            <div v-if="chip.color.substring(0, 5) === 'white'" class="imagebox-b">
              <img :src="getImgUrl(chip.color + '-chip.png')" height="150px" width="150px">
              <div class="centered"><h1>{{chip.value}}$</h1></div>
            </div>
            <div v-else class="imagebox">
              <img :src="getImgUrl(chip.color + '-chip.png')" height="150px" width="150px">
              <div class="centered"><h1>{{chip.value}}$</h1></div>
            </div>
          </b-col>
        </b-row>
        <br>

        <b-row id="time-display">
          <b-col>
            <b-jumbotron  border-variant="danger">
              <h1> {{minutes}} : {{seconds}}</h1>
            </b-jumbotron>
          </b-col>
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
              <b-button variant="warning" >
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
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Chip from '../types/chips';


@Component
export default class GamePage extends Vue {


  private startTime: any = new Date();

  private hours: any = "0";
  private minutes: any = this.addZero("15");
  private seconds: any = this.addZero("0");

  private  addZero(i: String) {
    if(!!i){
      let num: Number = Number(i);

      if (num < 10) {
        i = "0" + i;
      }
      return i;
      }
  }

  private startClick(){
    this.startTime = new Date(); //this grabs the current time when start is clicked
    //do something for the timer? idk
    let startHours = this.addZero(this.startTime.getHours());
    let startMinutes = this.addZero(this.startTime.getMinutes());
    let startSeconds = this.addZero(this.startTime.getSeconds());
  }

  

  private getImgUrl(pic: String) {
    // This is super sketch.
    return require('../../public/assets/' + pic)
  }

  get chips(): Chip[] {
    console.log(this.$store.state.chips);
    return this.$store.state.chips;
  }
}
</script>

<style lang="scss">
  .imagebox {
    position: relative;
    text-align: center;
    color: white;
  }
  .imagebox-b {
    position: relative;
    text-align: center;
    color: black;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
