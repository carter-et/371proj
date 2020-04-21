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
                <b-form-input type="number" v-model="amount"/>
            </div>
        </td>
        <td>
            <b-button-group>
                <b-button variant="outline-primary" @click="saveChip()"><b-icon icon="check"></b-icon></b-button>
                <b-button variant="outline-danger" @click="removeChip()"><b-icon icon="trash"></b-icon></b-button>
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

    //default value set to 0
    private amount: number = 0;

    private chipOptions: any[] = [
      {color: "red", text: "Red", link: "red-chip.png"},
      {color: "blue", text: "Blue", link: "blue-chip.png"},
      {color: "black", text: "Black", link: "black-chip.png"},
      {color: "white2", text: "White", link: "white2-chip.png"},
      {color: "white", text: "White", link: "white-chip.png"},
      {color: "green", text: "Green", link: "green-chip.png"},
      {color: "cyan", text: "Cyan", link: "cyan-chip.png"},
      {color: "grey", text: "Grey", link: "grey-chip.png"},
      {color: "brown", text: "Brown", link: "brown-chip.png"},
      {color: "orange", text: "Orange", link: "orange-chip.png"},
      {color: "purple", text: "Purple", link: "purple-chip.png"},
      {color: "pink", text: "Pink", link: "pink-chip.png"},
      {color: "yellow", text: "Yellow", link: "yellow-chip.png"}
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
            this.amount = tempChip.amount;
        }

        if(this.chipColor === undefined){
            console.log('Could not find a matching chip');
            this.chipColor = this.chipOptions[0].color;
            this.amount = 0;
        }
    }
}

</script>

<style lang="scss">
    b-dropdown-item-button{
        width: 30px;
    }
</style>
