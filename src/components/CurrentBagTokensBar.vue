<template>
  <v-container class="ma-0 full-width bg-grey-lighten-3 elevation-6">
    <v-row justify="start" align="center">
      <v-col cols="auto">
        <v-list-header class="text-h5">Current Tokens:</v-list-header>
      </v-col>
      <v-col v-for="token in mainstore.bag" cols="auto">
        <v-img
          :width="mainstore.tokenSize"
          aspect-ratio="1"
          cover
          :src="`./../../public/ChaosTokens/Chaos Token ${token.name}.png`"
          @click="console.log(mainstore.bag)"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useMainStore } from "@/stores/MainStore";
import { computed } from "vue";

const mainstore = useMainStore();

const bag = computed(() => {
  return mainstore.currentBag;
});
</script>

<style scoped>
.full-width {
  max-width: 100vw;
}
</style>
