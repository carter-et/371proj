<template>
  <div id="setup-form" class="container-md">
    <br>
    <b-jumbotron header="Setup">
      <b-row>
        <b-col>
          <b-container>
            <div id="chips-form">
              <br>
              <table class="table">
                <thead>
                  <tr>
                    <th>Color</th>
                    <th>Quantity</th>
                    <!-- This last one is where we can choose to remove it if we don't like it -->
                    <th><div style="padding: 15px">&nbsp;</div></th>
                  </tr>
                </thead>
                <tbody>
                  <!-- For every chip in the array, make a row to display it -->
                  <chipFormRow v-for="(chip, index) in chips" :key="chip.id" :index="index" :cId="chip.id"></chipFormRow>
                  <!-- Always keep a row at the bottom to add a new chip -->
                </tbody>
              </table>
              <br>
                <b-button block variant="outline-primary" @click="addChip">
                  <b-icon icon="plus"></b-icon>
                  New Chip
                </b-button>
            </div>
          </b-container>
        </b-col>
        <b-col>
          <b-container>
            <div id="form-players">
              <div class="mt-3">Players: <strong>{{ players }}</strong></div>
              <b-form-select v-model="players" :options="options"></b-form-select>
            </div>
            <br>
            <div id="form-speed">
              <b-container >
                <b-form-group label="">
                  <b-button :pressed="isTpp(10)" block variant="outline-primary" @click="setTpp(10)">
                    <b-icon icon="lightning"></b-icon> Blitz
                  </b-button>
                  <b-button :pressed="isTpp(15)" block variant="outline-primary" @click="setTpp(15)">
                    <b-icon icon="play"></b-icon> Normal 
                  </b-button>
                  <b-button :pressed="isTpp(25)" block variant="outline-primary" @click="setTpp(25)">
                    <b-icon icon="clock"></b-icon> Long
                  </b-button>
                </b-form-group>
              </b-container>
            </div>
          </b-container>
        </b-col>
      </b-row>
      <b-row>
        <b-col>

        </b-col>
        <b-col align-v="end">
          <b-button class="float-right" variant="primary" href="/info">
            Next  
            <b-icon icon="box-arrow-in-right"></b-icon>
          </b-button>
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Chip from '../types/chips';
import chipFormRow from '../components/chipFormRow.vue';
@Component({
  components: {
    chipFormRow,
  }
})
export default class SetupForm extends Vue {
  private tPP: number = 0;

  private options = [
    {value: 2, text: "2"},
    {value: 3, text: "3"},
    {value: 4, text: "4"},
    {value: 5, text: "5"},
    {value: 6, text: "6"},
    {value: 7, text: "7"},
    {value: 8, text: "8"},
  ];

  private isTpp(val: number){
    return val === this.tPP;
  }

  private setTpp(val: number){
    this.tPP = val;
    this.$store.commit("timePerPerson", val);
  }

  private addChip(){
    this.$store.commit("addChip");
  }

  // GETTERS AND SETTERS
  get players(): number {
    return this.$store.state.players;
  }

  set players(value) {
    console.log('Setting players to: ', value)
    this.$store.commit("players", value);
  }

  get timePerPerson(): number {
    return this.$store.state.timePerPerson;
  }

  private mounted(){
    this.tPP = this.$store.state.timePerPerson;
  }

  get chips(): Chip[] {
    console.log(this.$store.state.chips);
    return this.$store.state.chips;
  }
}

</script>

<style lang="scss">
  #form-speed{
    text-align: left;
  }
</style>
