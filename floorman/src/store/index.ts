import Vue from 'vue'
import Vuex from 'vuex'
import Chip from '@/types/chips';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: 2,
    chips: [] as Chip[],
    timePerPerson: 15
  },
  mutations: {
    players: (state, value) => {
      state.players = value;
      console.log("players: " + value);
    },
    addChip: (state) => {
      let emptyChip = {
        color: null,
        amount: 0,
        value: 0
      }
      state.chips.push(emptyChip)
    }, 
    removeChip: (state, index) => {
      state.chips.splice(index, 1);
    },
    timePerPerson: (state, value) => {
      state.timePerPerson = value;
      console.log("tPP: " + value);
    },
    updateChip: (state, {index, color, amount}) => {
      state.chips[index].color = color;
      state.chips[index].amount = amount;
    }
  },
  actions: {
  },
  modules: {
  }
})
