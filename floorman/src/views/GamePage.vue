<template>
  <div id="game-page">
    <br>
    <b-container id="game-page-body">
      <b-jumbotron>

        <b-row id="chip-display">
          <b-col v-for="(chip, index) in chips" :key="index" :index="index">
            <div v-if="chip.color.substring(0, 5) === 'white'" class="imagebox-b">
              <img :src="getImgUrl(chip.color + '-chip.png')" height="150px" width="150px">
              <div class="centered"><h1>${{chip.value}}</h1></div>
            </div>
            <div v-else class="imagebox">
              <img :src="getImgUrl(chip.color + '-chip.png')" height="150px" width="150px">
              <div class="centered"><h1>${{chip.value}}</h1></div>
            </div>
          </b-col>
        </b-row>
        <br>

        <b-row id="time-display">
          <b-col>
            <b-row>
              <b-col><h1>Timer</h1></b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-jumbotron  border-variant="primary">
                  <h1> {{ minutes | addZero }} : {{ seconds | addZero }}</h1>
                </b-jumbotron>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row id="controls">
          <b-col>

            <b-button variant="warning">
              <template>
                <b-icon icon="skip-backward" @click="prevGameState()"></b-icon>
              </template>              
            </b-button>

          </b-col>
          <b-col>

            <b-button-group>
              <b-button variant="warning" >
                <template>
                  <b-icon icon="arrow-clockwise" @click="resetClick()"></b-icon>
                </template>              
              </b-button>
              <b-button v-if="!isPlay" variant="warning" >
                <template>
                  <b-icon icon="play" @click="startClick()"></b-icon>
                </template>              
              </b-button>
              <b-button v-else variant="danger">
                <template>
                  <b-icon icon="pause-fill" @click="stopClick()"></b-icon>
                </template>              
              </b-button>
            </b-button-group>

          </b-col>
          <b-col>

            <b-button variant="warning">
              <template>
                <b-icon icon="skip-forward" @click="nextGameState()"></b-icon>
              </template>              
            </b-button>  

          </b-col>
        </b-row>

        <b-row id="blind-info">
          <b-col>

            <b-row id="blind-titles">
              <b-col>
                <h2>Prev Blinds</h2>
              </b-col>
              <b-col>
                <h1>Blinds</h1>
              </b-col>
              <b-col>
                <h2>Next Blinds</h2>
              </b-col>
            </b-row>

            <b-row id="blind-values">
              <b-col>
                <h2>
                  ${{ getBlinds(gameState-1).sb }}|
                  ${{ getBlinds(gameState-1).bb }}
                </h2>
              </b-col>
              <b-col>
                <h1>
                  ${{ getBlinds(gameState).sb }}|
                  ${{ getBlinds(gameState).bb }}
                </h1>
              </b-col>
              <b-col>
                <h2>
                  ${{ getBlinds(gameState+1).sb }}|
                  ${{ getBlinds(gameState+1).bb }}
                </h2>
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
import bb from '../components/bb.vue'
import sb from '../components/sb.vue'
Vue.filter("addZero", (value) => {
  console.log(value);
  let num = Number(value);
  console.log("num: ", num)

  let i = "";

  if (num < 10) {
    i = "0" + num;
  }
  else if(num == 0){
    i = "00";
  }
  else{
    return num;
  }
  return i;
});

@Component({
  components: {
    bb: bb,
    sb: sb,
  }
})
export default class GamePage extends Vue {
  private isPlay: boolean = false;
  private gameState: number = 0;

  private timer: any;
  // private defaultTime: number = 0;
  private blinds: any[] = [
    {sb: "1", bb: "2"},
    {sb: "2", bb: "4"},
    {sb: "4", bb: "8"},
    {sb: "5", bb: "10"},
    {sb: "10", bb: "20"},
    {sb: "20", bb: "40"},
    {sb: "40", bb: "80"},
    {sb: "50", bb: "100"},
    {sb: "100", bb: "200"},
    {sb: "200", bb: "400"},
    {sb: "400", bb: "800"},
    {sb: "500", bb: "1000"},
    {sb: "1000", bb: "2000"},
    {sb: "2000", bb: "4000"},
    {sb: "4000", bb: "8000"},
    {sb: "5000", bb: "10000"},
    {sb: "10000", bb: "20000"}
  ]

  private minutes: number = this.initialTime;
  private seconds: number = 0;

  private nextGameState(){
    this.gameState++;
    console.log("gamestate", this.gameState);
    //reset clock
  }

  private prevGameState(){
    if(this.gameState === 0){
      console.log("Game can't regress anymore");
    }
    else{
      this.gameState--;
      console.log("gamestate", this.gameState);
      //reset clock
    }
  }

  private getBlinds(gs: number){
    if(gs < 0){
      return {sb: "", bb: ""};
    }
    else if(gs > this.blinds.length){
      return {sb: "Game", bb: "End"};
    }
    else{
      return this.blinds[gs];
    }
  }

  private countDown(){
    if(this.isPlay){
      if(this.seconds === 0 && this.minutes === 0){
        this.seconds = 0;
        this.minutes = this.initialTime;
        this.nextGameState();
      }
      else if(this.seconds === 0){
        this.seconds = 59;
        this.minutes--;
      }
      else{
        this.seconds--;
      }
    }
  }

  private startClick(){
    this.isPlay = true;
    this.timer = window.setInterval(this.countDown, 1000);
  }

  private stopClick(){
    this.isPlay = false;
    window.clearInterval(this.timer);
  }

  private resetClick(){
    this.isPlay = false;
    this.seconds = 0;
    this.minutes = this.initialTime;
    window.clearInterval(this.timer);
  }

  private getImgUrl(pic: String) {
    // This is super sketch.
    return require('../../public/assets/' + pic)
  }

  get chips(): Chip[] {
    console.log(this.$store.state.chips);
    return this.$store.state.chips;
  }

  get initialTime(): number {
    console.log("starting clock times: ", this.$store.state.timePerPerson);
    return this.$store.state.timePerPerson;
  }

  private mounted(){
    console.log("mounting components...");
    // this.defaultTime = this.initialTime;
    console.log("minutes: ", this.minutes);
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
