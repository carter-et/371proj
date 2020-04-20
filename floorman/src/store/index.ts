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
    updateChipValue: (state, {color, value}) => {
      state.chips.forEach(chip => {
        if(chip.color === color){
          chip.value = value;
        }
      });
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
