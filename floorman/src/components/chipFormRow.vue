<template>
    <tr class="chipFormRow">
        <td>
            <div class="color-input">
              <b-dropdown size="lg" variant="light" no-caret>
                  <!-- This is the default image -->
                  <template v-slot:button-content>
                      <img src="../../public/assets/red-chip.png" height="30px" width="30px">
                      <span class="sr-only">Search</span>
                  </template>

                  <b-dropdown-item-button v-for="(option, index) in chipOptions" :key="index">
                    <img :src="'../../public/assets/' + option.link" height="30px" width="30px">
                      {{option.color}} Chip
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
            <b-button variant="danger" @click="removeChip()">Remove</b-button>
        </td>
    </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class chipFormRow extends Vue{
    @Prop() private index!: number;

    private chipOptions: any[] = [
      {color: "Red", link: "red-chip.png"},
      {color: "Blue", link: "blue-chip.png"}
    ]

    private removeChip(){
        this.$store.commit("removeChip", this.index);
    }
}
</script>

<style lang="scss">
    b-dropdown-item-button{
        width: 30px;
    }
</style>
