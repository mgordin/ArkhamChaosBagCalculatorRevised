import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainstore', {
  state: () => ({
    probabilitiesChart_x: ["-2","-1","0","+1","+2","+3","+4","+5","+6","+7","+8"],
    probabilitiesChart_y: [0, 10, 25, 40, 50, 80, 92, 92, 92, 92, 92],
    tab: "one",
    redrawMax: 4,
    orderedTokens: ['+1', '0', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', 
        'skull', 'cultist','tablet','elderThing','star','autofail', 'bless', 'curse', 'frost'],
    tokens: {
        "+1": { count: 1, value: 1, redraw: false, autofailAfter: null, autofail: false, fullName: "+1", order: 0 },
        "0": { count: 2, value: 0, redraw: false, autofailAfter: null, autofail: false, fullName: "0", order: 1 },
        "-1": { count: 3, value: -1, redraw: false, autofailAfter: null, autofail: false, fullName: "-1", order: 2 },
        "-2": { count: 2, value: -2, redraw: false, autofailAfter: null, autofail: false, fullName: "-2", order: 3 },
        "-3": { count: 1, value: -3, redraw: false, autofailAfter: null, autofail: false, fullName: "-3", order: 4 },
        "-4": { count: 1, value: -4, redraw: false, autofailAfter: null, autofail: false, fullName: "-4", order: 5 },
        "-5": { count: 0, value: -5, redraw: false, autofailAfter: null, autofail: false, fullName: "-5", order: 6 },
        "-6": { count: 0, value: -6, redraw: false, autofailAfter: null, autofail: false, fullName: "-6", order: 7 },
        "-7": { count: 0, value: -7, redraw: false, autofailAfter: null, autofail: false, fullName: "-7", order: 8 },
        "-8": { count: 0, value: -8, redraw: false, autofailAfter: null, autofail: false, fullName: "-8", order: 9 },
        "skull": { count: 0, value: 0, redraw: false, autofailAfter: null, autofail: false, fullName: "Skull", order: 10 },
        "cultist": { count: 0, value: 0, redraw: false, autofailAfter: null, autofail: false, fullName: "Cultist", order: 11 },
        "tablet": { count: 0, value: 0, redraw: false, autofailAfter: null, autofail: false, fullName: "Tablet", order: 12 },
        "elderThing": { count: 0, value: 0, redraw: false, autofailAfter: null, autofail: false, fullName: "Elder Thing", order: 13 },
        "star": { count: 1, value: 1, redraw: false, autofailAfter: null, autofail: false, fullName: "Star", order: 14 },
        "autofail": { count: 1, value: -999, redraw: false, autofailAfter: null, autofail: true, fullName: "Autofail", order: 15 },
        "bless": { count: 0, value: 2, redraw: true, autofailAfter: null, autofail: false, fullName: "Bless", order: 16 },
        "curse": { count: 0, value: -2, redraw: true, autofailAfter: null, autofail: false, fullName: "Curse", order: 17 },
        "frost": { count: 0, value: -1, redraw: true, autofailAfter: "frost", autofail: false, fullName: "Frost", order: 18 }
    }
  }),
  getters: {},
  actions: {},
})