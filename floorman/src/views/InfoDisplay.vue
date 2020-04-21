<template>
  <div id="info-display">
    <b-container>
      <br>
      <b-jumbotron header="Starting Stack">
        <b-container>

          <b-row>
            <b-col>
              <!-- <b-table :fields="fields">
              </b-table> -->
              <table class="table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(chip, index) in stack" :key="index" :index="index">
                    <td><h1><b>{{chip.amount}}</b></h1></td>

                    <td v-if="chip.color.substring(0, 5) === 'white'" class="imagebox-b">
                      <img :src="getImgUrl(chip.color + '-chip.png')" height="150px" width="150px">
                      <div class="centered"><h1>{{chip.value}}$</h1></div>
                    </td>
                    <td v-else class="imagebox">
                      <img :src="getImgUrl(chip.color + '-chip.png')" height="150px" width="150px">
                      <div class="centered"><h1>{{chip.value}}$</h1></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
            </b-col>

            <b-col align-v="end">
              <b-button class="float-right" variant="primary" href="/game">
                Next  
                <b-icon icon="box-arrow-in-right"></b-icon>
              </b-button>
            </b-col>

          </b-row>

        </b-container>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import sb from '../components/sb.vue'
import bb from '../components/bb.vue'
import Chip from '../types/chips';
import Stick from '../types/stick';
import { componentsPlugin } from 'bootstrap-vue';

@Component({
  components: {
    sb,
    bb
  }
})
export default class InfoDisplay extends Vue {
  //local variables
  private stack: any[] = [];
  
  //getters and setters
  get sortedChips(): Chip[] {
    this.$store.commit("updateChipValue");
    return this.$store.state.chips.sort((a: Chip, b: Chip) => a.amount > b.amount ? 1:-1);
  }

  get players(): number {
    return this.$store.state.players;
  }

  //private methods
  private setStack(){
    //basically what this does, is it gives a value to each chip based on what the user entered before
    let chipValues: number[] = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
    let stackValue: number = 100;

    let playerStack: number[] = [];
    let playerValue: number[] = [];
    let toRemove: number[] = [];

    let index: number = 0;
    this.sortedChips.forEach((chip)=>{
      playerStack.push(Math.floor(chip.amount / this.players));
      playerValue.push(chipValues[index]);
      //housekeeping
      chip.value = chipValues[index];
      index++;
    });
    console.log("Stack amounts: ", playerStack);
    console.log("Stack values: ", playerValue);

    let totalValue: number = 0;
    for(let i = 0; i < playerStack.length; i++){
      totalValue += playerStack[i] * playerValue[i];
    }
    console.log("Total value: ", totalValue);
  
    if(totalValue < stackValue){
      console.log("The process ends here. We can take the playerstack we have and keep it.");
      playerStack.forEach((item) =>{
        toRemove.push(0);
      })
    }
    else{
      console.log("Time to do more fun stuff!");
      let temp: number = 0;
      let change: number = totalValue - 100;
      console.log("Making change for: ", change);

      //start at the end
      for(let i = playerStack.length - 1; i > -1; i--){
        //how many can we fit?
        let thisValue = playerValue[i];
        let playerHas = playerStack[i]; 
        temp = Math.floor(change / thisValue);
        console.log("Integer division yields: ", temp);
        //if we want to remove than what the player has
        if(temp > playerHas){
          //we can only remove as many as the player has
          toRemove.push(playerHas);
          //update change to reflect this transaction
          change -= thisValue * playerHas;
        }
        else{
          //we should be okay to push this
          toRemove.push(temp);
          change = change % thisValue;
        }
      }
      //we updated toRemove using the largest numbers first, 
      //so we need to reverse it to reflect what we actually want
      toRemove.reverse();
      console.log("toRemove: ", toRemove);
    }
    for(let i = 0; i < playerStack.length; i++){
      playerStack[i] -= toRemove[i];

      let temp: any = {amount: playerStack[i], color: this.sortedChips[i].color, value: chipValues[i]};
      if(temp.amount > 0){
        this.stack.push(temp);
      }
    }
    console.log("New stack is: ", this.stack);
  }

  private getImgUrl(pic: String) {
    // This is super sketch.
    return require('../../public/assets/' + pic)
  }

  //this runs on startup
  private mounted(){
    this.setStack();
  }
  
}
</script>

<style lang="scss">
  .imagebox {
    position: relative;
    text-align: center;
    color: white;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
