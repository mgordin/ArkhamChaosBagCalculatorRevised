<template>
  <v-card>
    <v-tabs v-model="mainstore.tab" bg-color="primary">
      <v-tab value="tokens">
        <v-icon icon="mdi-circle-multiple" start></v-icon>Tokens</v-tab
      >
      <v-tab value="abilities"><v-icon icon="mdi-cards" start></v-icon>Abilities</v-tab>
      <v-tab value="settings" @click="mainstore.chanceOfNRedraws(mainstore.redrawMax)"
        ><v-icon icon="mdi-cog" start></v-icon>Settings</v-tab
      >
    </v-tabs>

    <v-card-text>
      <v-window v-model="mainstore.tab">
        <v-window-item value="tokens"> <TokensTab></TokensTab> </v-window-item>

        <v-window-item value="abilities"> <AbilitiesTab></AbilitiesTab> </v-window-item>

        <v-window-item value="settings"> <SettingsTab></SettingsTab> </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useMainStore } from "@/stores/MainStore";

import TokensTab from "./TokensTab";
import AbilitiesTab from "./AbilitiesTab";
import SettingsTab from "./SettingsTab";

const mainstore = useMainStore();
</script>

<style scoped></style>
