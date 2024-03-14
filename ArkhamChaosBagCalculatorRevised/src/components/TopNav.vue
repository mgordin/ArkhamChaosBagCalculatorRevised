<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="grow">Arkham Chaos Bag Calculator</v-app-bar-title>
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

    <v-btn variant="tonal" @click="mainstore.chanceOfSuccess">
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
}
</style>
