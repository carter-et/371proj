<template>
  <div id="setup-form" class="container-md">
    <b-row>
      <b-col>
        <b-container>
          <div id="chips-form">
            <table class="table">
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Quantity</th>
                  <!-- This last one is where we can choose to remove it if we don't like it -->
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <!-- For every chip in the array, make a row to display it -->
                <chipFormRow v-for="(chip, index) in chips" :key="chip" :index="index"></chipFormRow>
                <!-- Always keep a row at the bottom to add a new chip -->
              </tbody>
              <b-button pill block variant="primary" @click="addChip">
                <img src="../../public/assets/plus.png" style="height: 30px; width: 30px; filter: invert(100%)">
              </b-button>
            </table>
          </div>
        </b-container>
      </b-col>
      <b-col>
        <b-container>
          <div id="form-players">
            <b-form-select v-model="players" :options="options"></b-form-select>
          <div class="mt-3">Players: <strong>{{ players }}</strong></div>
          </div>

          <div id="form-speed">
            <b-form-group label="Choose game speed: ">
              <b-form-radio v-model="timePerPerson" name="blitz" value=10>Blitz</b-form-radio>
              <b-form-radio v-model="timePerPerson" name="blitz" value=15>Normal</b-form-radio>
              <b-form-radio v-model="timePerPerson" name="blitz" value=25>Long</b-form-radio>
            </b-form-group>
          </div>
        </b-container>
      </b-col>
    </b-row>
    <b-row>
      <b-col>

      </b-col>
      <b-col align-v="end">
        <b-button class="float-sm-right" pill variant="warning">Next</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Chip from '../types/chips';
import chipFormRow from '../components/chipFormRow.vue';
import fmNav from '../components/navbar.vue';
@Component({
  components: {
    chipFormRow,
  }
})
export default class SetupForm extends Vue {
  private options = [
    {value: 2, text: "2"},
    {value: 3, text: "3"},
    {value: 4, text: "4"},
    {value: 5, text: "5"},
    {value: 6, text: "6"},
    {value: 7, text: "7"},
    {value: 8, text: "8"},
  ];

  private addChip(){
    this.$store.commit("addChip");
  }

  // GETTERS AND SETTERS
  get players(): number {
    return this.$store.state.players;
  }

  set players(value) {
    this.$store.commit("players", value);
  }

  get timePerPerson(): number {
    return this.$store.state.timePerPerson;
  }

  set timePerPerson(value) {
    this.$store.commit("timePerPerson", value);
  }

  get chips(): Chip[] {
    console.log(this.$store.state.chips);
    return this.$store.state.chips;
  }

}

</script>

<style lang="scss">

</style>
