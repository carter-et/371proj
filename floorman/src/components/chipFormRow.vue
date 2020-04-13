<template>
    <tr class="chipFormRow">
        <td>
            <div class="color-input">
              <b-dropdown size="lg" variant="light" no-caret>
                  <!-- This is the default image -->
                  <template v-slot:button-content>
                      <img :src="getImgUrl(chipOptions.find(option => option.color === chipColor).link)" height="30px" width="30px">
                      <span class="sr-only">Search</span>
                  </template>

                  <b-dropdown-item-button v-for="(option, chipIndex) in chipOptions" :key="chipIndex">
                    <img :src="getImgUrl(option.link)" height="30px" width="30px" @click="chooseChip(chipIndex)">
                      {{option.text}} Chip
                  </b-dropdown-item-button>
              </b-dropdown>
            </div>
        </td>
        <!-- Possibly abstract this out with the whole component? -->
        <td>
            <div class="amount-input">
                <b-form-input type="number" />
            </div>
        </td>
        <td>
            <b-button-group>
                <b-button variant="primary" @click="saveChip()">Save</b-button>
                <b-button variant="danger" @click="removeChip()">Remove</b-button>
            </b-button-group>
        </td>
    </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Chip from '../types/chips';
@Component
export default class chipFormRow extends Vue{
    @Prop() private cId!: number;
    @Prop() private index!: number;

    private amount: number = 0;

    private chipOptions: any[] = [
      {color: "red", text: "Red", link: "red-chip.png"},
      {color: "blue", text: "Blue", link: "blue-chip.png"}
    ]

    //defaults tp 'red'
    private chipColor: String = this.chipOptions[0].color;

    private removeChip(){
        this.$store.commit("removeChip", this.index);
    }

    private getImgUrl(pic: String) {
        // This is super sketch.
        return require('../../public/assets/' + pic)
    }

    //which chip image did we choose?
    private chooseChip(cIndex: number) {
        this.chipColor = this.chipOptions[cIndex].color;
    }

    private saveChip() {
        console.log('Chip color: ' + this.chipColor);
        console.log('Trying to change id: ' + this.cId);
        let chipData: any = {
            id: this.cId,
            color: this.chipColor,
            amount: this.amount
        }
        this.$store.commit("updateChip", chipData);
    }

    private mounted() {
        const tempChip = this.$store.state.chips.find((chip: Chip) => (this.cId === chip.id));
        if(!!tempChip){
            this.chipColor = tempChip.color;
        }

        if(this.chipColor === undefined){
            console.log('Could not find a matching chip')
            this.chipColor = this.chipOptions[0].color
        }
    }
}

</script>

<style lang="scss">
    b-dropdown-item-button{
        width: 30px;
    }
</style>
