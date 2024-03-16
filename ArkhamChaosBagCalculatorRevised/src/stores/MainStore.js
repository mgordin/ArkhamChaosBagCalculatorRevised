import { defineStore } from 'pinia'
import CampaignsAndCards from '../assets/CampaignsAndCards.json';


export const useMainStore = defineStore('mainstore', {
  state: () => ({
    probabilitiesChart_x: ["-2", "-1","0","+1","+2","+3","+4","+5","+6","+7","+8"],
    probabilitiesChart_y: [0, 10, 25, 40, 50, 80, 92, 92, 92, 92, 92],
    tab: "one",
    redrawMax: 4,
    redrawHandling: 'Treat next token as -2',
    redrawChanceChart_y: [],
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
    },
    abilitiesActive: [],
    abilities: CampaignsAndCards["abilityOptions"],
    abilityEffects: {
        "DefianceSkull": {
            "skull": { "type": "s", "value": 0, "param": "noRedraw" }
        },
        "DefianceCultist": {
            "cultist": { "type": "s", "value": 0, "param": "noRedraw" }
        },
        "DefianceTablet": {
            "tablet": { "type": "s", "value": 0, "param": "noRedraw" }
        },
        "DefianceElderThing": {
            "elderThing": { "type": "s", "value": 0, "param": "noRedraw" }
        },
        "Defiance2XP": {
            "skull": { "type": "s", "value": 0, "param": "noRedraw" },
            "cultist": { "type": "s", "value": 0, "param": "noRedraw" },
            "tablet": { "type": "s", "value": 0, "param": "noRedraw" },
            "elderThing": { "type": "s", "value": 0, "param": "noRedraw" }
        },
        "JimCulver": {
            "skull": { "type": "s", "value": 0, "param": null }
        },
        "RitualCandles1": {
            "skull": { "type": "a", "value": 1, "param": null },
            "cultist": { "type": "a", "value": 1, "param": null },
            "tablet": { "type": "a", "value": 1, "param": null },
            "elderThing": { "type": "a", "value": 1, "param": null }
        },
        "RitualCandles2": {
            "skull": { "type": "a", "value": 1, "param": null },
            "cultist": { "type": "a", "value": 1, "param": null },
            "tablet": { "type": "a", "value": 1, "param": null },
            "elderThing": { "type": "a", "value": 1, "param": null }
        }
    },
    modifiers: {
        '+1': {},
        '0': {},
        '-1': {},
        '-2': {},
        '-3': {},
        '-4': {},
        '-5': {},
        '-6': {},
        '-7': {},
        '-8': {},
        'skull': {},
        'cultist': {},
        'tablet': {},
        'elderThing': {},
        'star': {},
        'autofail': {},
        'bless': {},
        'curse': {},
        'frost': {}
    },
    defaultTokenValues: {
        '+1': 1,
        '0': 0,
        '-1': -1,
        '-2': -2,
        '-3': -3,
        '-4': -4,
        '-5': -5,
        '-6': -6,
        '-7': -7,
        '-8': -8,
        'skull': 0,
        'cultist': 0,
        'tablet': 0,
        'elderThing': 0,
        'star': 1,
        'autofail': -999,
        'bless': 2,
        'curse': -2,
        'frost': -1
    },
    campaignOptions: CampaignsAndCards["campaignOptions"],
    presetTokenBags: CampaignsAndCards["campaignTokenSets"],
    selectedCampaignTokenSet: null,
    saveName: null,
    loadName: null,
    savedTokenBagConfigs: []
  }),
  getters: {

  },
  actions: {

    /* Do all the steps of calculating success chance for all relevant skill values */
    chanceOfSuccess() {
        var resultsTracker = {};
        for (let i = -8; i < 3; i++) {
            resultsTracker[i] = 0;
        }
        var bag = this.currentBag();
        this.prepareModifiers();
        this.calculationStep(bag, 0, 1 / bag.length, null, 1, this.tokens['autofail']["value"], resultsTracker);
        this.probabilitiesChart_y = this.cumulativeProb(resultsTracker);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        //saveData(saveName, data);
    },

    /* Generate the "bag" of tokens - an array with one object per token in the bag whose
    draw probabilities are to be calculated */
    currentBag() {
        var bag = []
        for (const [token_name, token] of Object.entries(this.tokens)) {
            for (let i = 1; i <= token["count"]; i++) {
                bag.push({
                    "value": token["value"],
                    "redraw": token["redraw"],
                    "name": token_name,
                    "autofailAfter": token["autofailAfter"],
                    "autofail": token["autofail"]
                })
            }
        };
        return bag
    },

    /* Go through the active abilities selected, and prepare modifiers to token values based 
    on those */
    prepareModifiers() {
        var store = this
        for (const [k, v] of Object.entries(store.modifiers)) {
            store.modifiers[k] = {};
        };
        if (store.abilitiesActive.length != 0) {
            store.abilitiesActive.forEach(function (ability, i) {
                
                var abilityEffect = store.abilityEffects[ability.trim()];
                console.log(ability, abilityEffect, store.abilityEffects, store.abilitiesActive)

                for (const [k, v] of Object.entries(abilityEffect)) {
                    if (Object.keys(store.modifiers[k]).length == 0 || abilityEffect[k]["type"] == 's') {
                        store.modifiers[k] = v
                    } else if (modifiers[k]["type"] == 'a') {
                        store.modifiers[k]["value"] += abilityEffect[k]["value"]
                    }
                };
            })
        }
    },

    // Generate an array of numbers from start value to end value incremented by one
    range(start, end) {
        var r = []
        for (let i = start; i < end + 1; i += 1) {
            r.push(i);
        }
        return r;
    },

    /* Find the max and min possible totals that the current bag of tokens could results in drawing,
    given however many redraws are present */
    getTokenRange() {
        var max = 0;
        var maxSingle = -999;
        var min = 0;
        var minSingle = 999;
        this.tokens.forEach(function (v, i) {
            if (v["value"] > 0 && v["redraw"]) {
                max += v["value"]
            } else if (v["value"] < 0 && v["redraw"]) {
                min += v["value"]
            }
            if (v["value"] > maxSingle && !(v["redraw"])) {
                maxSingle = v["value"]
            } else if (v["value"] < minSingle && !(v["redraw"]) && !(v["autofail"])) {
                minSingle = v["value"]
            }
        })

        return [min + minSingle, max + maxSingle];
    },

    /* What to do if there are more redraws than redrawMax */
    handleTooManyRedraws(total, autofail_value, resultsTracker, probMod) {
        var tokenRegex = /Treat next token as (\+|-)\d/;
        if (this.redrawHandling == "Treat as autofail") {
            this.addToResultsTracker(resultsTracker, total, probMod, autofail_value, true);
        } else if (this.redrawHandling == "median") {
            var tokenValues = []
            this.tokens.forEach(function (token, i) {
                if (!(token["redraw"]) && token["value"] != autofail_value && !(token["autofail"])) {
                    tokenValues.push(token["value"])
                }
            });
            var tokenMedian = Math.floor(math.median(tokenValues));
            this.addToResultsTracker(resultsTracker, total + tokenMedian, probMod, autofail_value, false);
        } else if (this.redrawHandling == "average") {
            var tokenValues = []
            tokens.forEach(function (token, i) {
                if (!(token["redraw"]) && token["value"] != autofail_value && !(token["autofail"])) {
                    tokenValues.push(token["value"])
                }
            });
            var tokenAverage = Math.floor(math.mean(tokenValues));
            this.addToResultsTracker(resultsTracker, total + tokenAverage, probMod, autofail_value, false);
        } else if (tokenRegex.test(this.redrawHandling)) {
            var tokenValue = parseInt(this.redrawHandling.substring(this.redrawHandling.length - 2))
            this. addToResultsTracker(resultsTracker, total + tokenValue, probMod, autofail_value, false);
        } else {
            console.log("Handling for too many redraws hit an unrecognized 'handling' parameter")
        }
    },

    /* Handle the final result of a draw */
    addToResultsTracker(resultsTracker, total, probMod, autofailValue, isAutofail) {
        if (total == autofailValue || isAutofail) {
            //pass
        } else if (total > 1) {
            resultsTracker[2] += probMod * 100;
        } else if (total == 1) {
            resultsTracker[1] += probMod * 100;
        } else if (total >= -8) {
            resultsTracker[total] += probMod * 100;
        }
    },

    calculateTotal(previousTotal, token) {
        var total = previousTotal + token["value"];
        if (Object.keys(this.modifiers[token["name"]]).length != 0) {
            if (this.modifiers[token["name"]]["type"] == 'a') {
                total += this.modifiers[token["name"]]["value"]
            } else {
                total = this.modifiers[token["name"]]["value"]
            }
        }
        return total
    },
    /* Pull a token and resolve its value - called recursively for redraws */
    calculationStep(remainingOptions, previousTotal, probMod, lastDraw, drawCount, autofail_value, resultsTracker) {
        var store = this;
        remainingOptions.forEach(function (token, i) {
            // Calculate result, assuming now additional stuff happening
            var total = store.calculateTotal(previousTotal, token);
            if (token["value"] == autofail_value || token["autofail"]) { // Special case so autofail always has same value / to recognize autofail checkbox
                store.addToResultsTracker(resultsTracker, total, probMod, autofail_value, true)
            } else if (lastDraw && lastDraw == token["autofailAfter"]) { // If the previous draw would make this an autofail, do that
                store.addToResultsTracker(resultsTracker, total, probMod, autofail_value, true)
            } else if (token["redraw"] && store.modifiers[token["name"]]["param"] != 'noRedraw') { // If this is a token that prompts a redraw, do that
                total = store.calculateTotal(previousTotal, token)
                if (drawCount + 1 > store.redrawMax) { // If this draw is too many redraws - treat as an autofail to speed up calculation
                    store.handleTooManyRedraws(total, autofail_value, resultsTracker, probMod)
                } else {
                    store.calculationStep(
                        remainingOptions.slice(0, i).concat(remainingOptions.slice(i + 1)), total, probMod / (remainingOptions.length - 1), token["name"], drawCount + 1, autofail_value, resultsTracker)
                }
            } else { // No redraw - just spit out the current total and probability
                store.addToResultsTracker(resultsTracker, total, probMod, autofail_value, false)
            }
        });
    },

    /* Get the cumulative probability of success with X+ given each specific value's probability */
    cumulativeProb(prob) {
        var probCumul = [];
        probCumul.push(this.sumStuffUp(prob, 1));
        probCumul.push(this.sumStuffUp(prob, 0));
        probCumul.push(this.sumStuffUp(prob, -1));
        probCumul.push(this.sumStuffUp(prob, -2));
        probCumul.push(this.sumStuffUp(prob, -3));
        probCumul.push(this.sumStuffUp(prob, -4));
        probCumul.push(this.sumStuffUp(prob, -5));
        probCumul.push(this.sumStuffUp(prob, -6));
        probCumul.push(this.sumStuffUp(prob, -7));
        probCumul.push(this.sumStuffUp(prob, -8));
        probCumul.push(this.sumStuffUp(prob, -9));

        return probCumul;
    },

    /* Sum for above X skill value, for cumulative probability */
    sumStuffUp(prob, target) {
        var temp = 0;
        for (const [k, v] of Object.entries(prob)) {
            if (k > target) {
                temp += v;
            }
        }
        return temp;
    },

    /* Sum for X skill value and below, for probability of failure */
    sumStuffDown(prob, target) {
        var temp = 0;
        for (const [k, v] of Object.entries(prob)) {
            if (k <= target) {
                temp += v;
            }
        }
        return temp;
    },
    /* Set up to calculate the chance of redrawing 1 to N times  given the current bag,
    then call redrawProb to actually calculate those odds */
    chanceOfNRedraws(n) {
        var redrawTokensCount = 0;
        var allTokensCount = 0;
        for (const [k, v] of Object.entries(this.tokens)) {
            allTokensCount += parseInt(v["count"]);
            if (v["redraw"]) {
                redrawTokensCount += parseInt(v["count"]);
            }
        }
        this.redrawChanceChart_y = [];
        console.log(allTokensCount, redrawTokensCount, this.redrawChanceChart_y)
        this.redrawProb(1, allTokensCount, redrawTokensCount, 1, n);
        console.log('redrawChance', this.redrawChanceChart_y)

    },

    /* Actually calculate the chance of redrawing 1 to N times */
    redrawProb(prob, allCount, redrawCount, currentN, maxN) {
        var newProb = prob * redrawCount / allCount
        this.redrawChanceChart_y.push(Math.round(newProb * 100))
        if ((currentN + 1) <= maxN) {
            this.redrawProb(newProb, allCount - 1, redrawCount - 1, currentN + 1, maxN)
        }
    },

    // Apply the selected token config
    applyTokenConfig() {
        this.tokens = this.presetTokenBags[this.selectedCampaignTokenSet];
        this.chanceOfSuccess();
    },

    // Save custom token bag config
    save() {
        if (this.saveName == null | this.saveName == "") {
            window.alert("Invalid name.")
        } else {
            if (this.savedTokenBagConfigs.includes(this.saveName)) {
                if (window.confirm('Are you sure you want to overwrite the existing token bag config with that name?')) {
                    localStorage.setItem("ArkhamChaosBagProbabilityCalculator-" + this.saveName, JSON.stringify(this.tokens));
                    this.listAllSaved();
                }
            } else {
                localStorage.setItem("ArkhamChaosBagProbabilityCalculator-" + this.saveName, JSON.stringify(this.tokens));
                this.listAllSaved();
            }
        }  
    },

    // Load custom token bag config
    load() {
        console.log(this.savedTokenBagConfigs)
        if (this.loadName == null) {
            window.alert('Invalid file.')
        } else {
            const loaded = JSON.parse(localStorage.getItem("ArkhamChaosBagProbabilityCalculator-" + this.loadName));
            this.tokens = loaded;
            this.chanceOfSuccess();
            return loaded;
        }
    },

    deleteSave() {
        if (this.loadName != null & this.loadName != "") {
            if (window.confirm('Are you sure you want to delete this saved token bag config? This cannot be undone.')) {
                localStorage.removeItem("ArkhamChaosBagProbabilityCalculator-" + this.loadName)
                this.loadName = null;
                this.listAllSaved();
            }
        } else {
            window.alert("No save selected to delete.")
        }
    },

    listAllSaved() {
        var m = []
        Object.keys(localStorage).forEach((key) => {
            m.push(
                key.replace("ArkhamChaosBagProbabilityCalculator-","")
            )
        })
        this.savedTokenBagConfigs = m;
        console.log('listed', this.savedTokenBagConfigs)
    },

    // Toggle between -999 and default when "Autofail?" is selected for a token type
    toggleTokenValueOnAutofailSelect(token) {
        if (this.tokens[token].value == -999) {
            this.tokens[token].value = this.defaultTokenValues[token];
        } else {
            this.tokens[token].value = -999;
        }
    }

  },
})