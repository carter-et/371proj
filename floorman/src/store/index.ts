import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import Chip from '@/types/chips';
import Stick from '@/types/stick';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    players: 2,
    chips: [] as Chip[],
    timePerPerson: 15,
  },
  mutations: {
    players: (state, value) => {
      state.players = value;
      console.log("players: " + value);
    },
    addChip: (state) => {
      //this is the default id.
      let newID: number = state.chips.length + 1;

      state.chips.forEach((chip) => {
        if(newID === chip.id){
          newID += chip.id;
        }
      });

      let emptyChip = {
        color: "red",
        amount: 0,
        value: 0,
        id: 0
      }

      emptyChip.id = newID;

      state.chips.push(emptyChip)
    }, 
    removeChip: (state, index) => {
      state.chips.splice(index, 1);
    },
    timePerPerson: (state, value) => {
      state.timePerPerson = value;
      console.log("tPP: " + value);
    },
    updateChip: (state, {id, color, amount}) => {
      console.log('trying to update: ' + id)

      state.chips.forEach((chip) => {
        if(chip.id === id){
          chip.color = color;
          chip.amount = amount;
        }
      });
    },
    setState(state, newState: any){
      state.players = newState.players;
      state.chips = newState.chips;
      state.timePerPerson = newState.timePerPerson;
    },
    updateChipValue: (state) => {
      let chipValues: number[] = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
      let sortedChips = state.chips.sort((a: Chip, b: Chip) => a.amount > b.amount ? 1:-1);

      let index: number = 0;
      sortedChips.forEach((chip)=>{
        chip.value = chipValues[index];
        index++;
      });
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
