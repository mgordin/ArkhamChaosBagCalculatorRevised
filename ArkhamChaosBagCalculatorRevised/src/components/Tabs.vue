<template>
  <v-card>
    <v-tabs v-model="mainstore.tab" bg-color="primary">
      <v-tab value="one">Tokens</v-tab>
      <v-tab value="two">Abilities</v-tab>
      <v-tab value="three" @click="mainstore.chanceOfNRedraws(mainstore.redrawMax)"
        >Settings</v-tab
      >
    </v-tabs>

    <v-card-text>
      <v-window v-model="mainstore.tab">
        <v-window-item value="one"> <TokensTab></TokensTab> </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> <SettingsTab></SettingsTab> </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useMainStore } from "@/stores/MainStore";

import TokensTab from "./TokensTab";
import SettingsTab from "./SettingsTab";

const mainstore = useMainStore();
</script>

<style scoped></style>
