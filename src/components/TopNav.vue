<template>
  <v-app-bar :elevation="2" color="grey-darken-3">
    <template v-slot:prepend>
      <v-icon icon="mdi-pentagram" start></v-icon>
    </template>

    <v-app-bar-title class="grow"
      >Arkham Chaos Bag Probability Calculator</v-app-bar-title
    >
    <v-text-field
      class="title-bar-input-field"
      label="Bless"
      v-model="mainstore.tokens['bless'].count"
      type="number"
    ></v-text-field
    ><v-text-field
      class="title-bar-input-field"
      label="Curse"
      v-model="mainstore.tokens['curse'].count"
      type="number"
    ></v-text-field
    ><v-text-field
      class="title-bar-input-field"
      label="Frost"
      v-model="mainstore.tokens['frost'].count"
      type="number"
    ></v-text-field>

    <v-btn variant="tonal" color="green" @click="mainstore.chanceOfSuccess">
      <v-icon icon="mdi-play" start></v-icon>
      Calculate Probabilities
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useMainStore } from "@/stores/MainStore";

const mainstore = useMainStore();
</script>

<style scoped>
.title-bar-input-field {
  max-width: 10vw;
  margin-right: 1vw;
}
</style>
