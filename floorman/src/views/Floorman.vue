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
      <table>
        <thead>
          <tr>
            <th>Colors</th>
            <th>Total Chips</th>
            <th>Players</th>
            <th>Speed</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        json test:
        {{ json }}
      </table>
    </b-modal>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Floorman extends Vue {
  private json: any;
  private url: string = "http://localhost:5000/";

  private getAPI(){
    axios
      .get(this.url).then(response => {
        console.log("response: ", response)
        this.json = response.data;
      });
  }

  private mounted(){
    this.getAPI();
    console.log("data: ", this.json)
  }
}
</script>

<style lang="scss">
</style>
