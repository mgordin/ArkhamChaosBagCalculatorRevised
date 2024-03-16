<template>
  <div class="text-h3 pa-mb-4">Abilities Used</div>
  <v-select
    clearable
    label="Select"
    :items="mainstore.abilities"
    v-model="mainstore.abilitiesActive"
    multiple
  ></v-select>
  <v-btn @click="console.log(mainstore.abilitiesActive)">Click</v-btn>
</template>

<script setup>
import { useMainStore } from "@/stores/MainStore";

const mainstore = useMainStore();
</script>

<style scoped></style>
