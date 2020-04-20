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
                    <b-icon class="h2 mb-2" icon="arrow-clockwise" variant="primary">icon here</b-icon>
                  </tr>
                </thead>
                <tbody>
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
  private fields: any = ['amount', 'color'];
  
  //getters and setters
  get sortedChips(): Chip[] {
    console.log(this.$store.state.chips);
    return this.$store.state.chips.sort((a: Chip, b: Chip) => a.amount > b.amount ? 1:-1);
  }

  get players(): number {
    return this.$store.state.players;
  }

  //private methods
  private setStack(){
    //basically what this does, is it gives a value to each chip based on what the user entered before
    let chipValues = [1, 5, 10, 50, 100, 500, 10000];
    let stackValue = 100;

    console.log(this.sortedChips)

    //lets add values to each chip, now that it's sorted...
    for(let i = 0; i < this.sortedChips.length; i++){
      this.sortedChips[i].value = chipValues[i];
    }
  }
  
}
</script>

<style lang="scss">

</style>
