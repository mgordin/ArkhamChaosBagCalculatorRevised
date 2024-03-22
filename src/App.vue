<template>
  <v-app>
    <v-main>
      <TopNav></TopNav>
      <ProbabilitiesChart></ProbabilitiesChart>
      <v-divider class="pa-md-4 mx-lg-auto"></v-divider>
      <ChanceToDrawChart></ChanceToDrawChart>
      <Tabs></Tabs>
    </v-main>
  </v-app>
</template>

<script setup>
import TopNav from "./components/TopNav.vue";
import Tabs from "./components/Tabs.vue";
import ProbabilitiesChart from "./components/ProbabilitiesChart";
import ChanceToDrawChart from "./components/ChanceToDrawChart";

import { useTheme } from "vuetify";
const theme = useTheme();
theme.global.name.value = "light";
</script>
