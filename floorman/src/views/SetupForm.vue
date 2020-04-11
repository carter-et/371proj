<template>
  <div id="setup-form">
    <div id="chips-form">
      <div v-for="(chip, index) in chips" :key="index">
        <div id="chip-form">
          <div class="color-input">

          </div>
          <div class="amount-input">
            <label>Amount: </label>
            <b-form-input type="number" />
          </div>
        </div>
      </div>
      <b-button varient="primary" @click="addChip">
        Add Chip
      </b-button>
    </div>

    <div id="form-players">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Players: <strong>{{ selected }}</strong></div>
    </div>

    <div id="form-speed">
      <b-form-group label="Choose game speed: ">
        <b-form-radio v-model="radio" name="blitz" value=10>Blitz</b-form-radio>
        <b-form-radio v-model="radio" name="blitz" value=15>Normal</b-form-radio>
        <b-form-radio v-model="radio" name="blitz" value=25>Long</b-form-radio>
      </b-form-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Chip from '../types/chips'
@Component
export default class SetupForm extends Vue {
  private selected: number = 2;
  private options = [
    {value: 2, text: "2"},
    {value: 3, text: "3"},
    {value: 4, text: "4"},
    {value: 5, text: "5"},
    {value: 6, text: "6"},
    {value: 7, text: "7"},
    {value: 8, text: "8"},
  ];
  private chips: Chip[] = [];
  private addChip(){
    let emptyChip = {
      color: null,
      amount: 0,
      value: 0
    }
    this.chips.push(emptyChip)
  }
}

</script>

<style lang="scss">

</style>
