<template>
    <tr class="chipFormRow">
        <td>
            <div class="color-input">
                <!-- TODO: Make a component row that acts as a form for chip -->
                <b-dropdown size="lg" variant="light" no-caret>
                    <template v-slot:button-content>
                        <img src="../../public/assets/red-chip.png" height="30px" width="30px">
                        <span class="sr-only">Search</span>
                    </template>
                    <b-dropdown-item-button>
                        <img src="../../public/assets/red-chip.png" height="30px" width="30px">
                         Red Chip
                    </b-dropdown-item-button>
                    <b-dropdown-item-button>
                        <img src="../../public/assets/blue-chip.png" height="30px" width="30px">
                         Blue Chip
                    </b-dropdown-item-button>
                </b-dropdown> 
            </div>
        </td>
        <!-- Possibly abstract this out with the whole component? -->
        <td>
            <div class="amount-input">
                <label>Amount: </label>
                <b-form-input type="number" />
            </div>
        </td>
        <!-- Remove this row -->
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