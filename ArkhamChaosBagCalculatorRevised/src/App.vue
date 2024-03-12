<template>
  <v-app>
    <v-main>
      <TopNav></TopNav>
      <ProbabilitiesChart></ProbabilitiesChart>
      <Tabs></Tabs>
    </v-main>
  </v-app>
</template>

<script setup>
import TopNav from "./components/TopNav.vue";
import Tab from "./components/Tabs.vue";
import ProbabilitiesChart from "./components/ProbabilitiesChart";

import { useTheme } from "vuetify";
const theme = useTheme();
theme.global.name.value = "light";
</script>
