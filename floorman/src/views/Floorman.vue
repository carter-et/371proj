<template>
  <div id="floorman">
    <br>
    <b-container>
      <br>
      <b-jumbotron header="Floorman">
        <br>
        <b-row>
          <b-col>
            <b-button class="setup-button" variant="primary" href="/setup">
              <h1>Setup</h1>
            </b-button>
            &nbsp;
            <b-button class="reset-button" variant="outline-primary" href="/info">
              <h1>Preset</h1>
            </b-button>
          </b-col>
        </b-row>
        <br>
        <b-row>
          <b-col>
            <b-button class="reset-button" v-b-modal.presets variant="outline-primary">
              <h3>Load Popular Preset</h3>
            </b-button>
          </b-col>
        </b-row>
      </b-jumbotron>
      <b-modal id="presets" title="Popular Presets">
        <b-row>
          <b-col>
            <table class="table">
              <thead>
                <tr>
                  <th>Total Chips</th>
                  <th>Players</th>
                  <th>Speed</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="!!serverData">
                <tr v-for="(state, index) in serverData" :key="index" :index="index">
                  <td>{{ getTotalChips(state.chips) }}</td>
                  <td>{{ state.players }}</td>
                  <td>{{ state.timePerPerson }}</td>
                  <td><b-button variant = "primary" @click="choose(index)" href="/setup">Choose</b-button></td>
                </tr>
              </tbody>
              <tbody v-else>
                Loading data...
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-modal>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import axios from 'axios'
import Chip from '../types/chips'
@Component
export default class Floorman extends Vue {
  private serverData: any = null;
  private url: string = "http://localhost:5000/";

  private choose(index: number){
    console.log("Setting current set to preset: ", index);
    this.$store.commit("setState", this.serverData[index]);
  }

  private getTotalChips(chips: Chip[]){
    let total = 0;
    chips.forEach((chip) => {
      total += Number(chip.amount);
    })
    return total;
  }

  private getAPI(){
    axios
      .get(this.url).then(response => {
        console.log("response: ", response)
        this.setServerData(response.data);
      });
  }

  private setServerData(json: any){
    this.serverData = json;
    console.log("Setting server data...", this.serverData)
  }

  private mounted(){
    this.getAPI();
    console.log("Startup data: ", this.serverData)
  }
}
</script>

<style lang="scss">
  th{
    padding: 5px;
    margin: 5px;
  }
</style>
