<template>
  <div class="text-h3 pa-mb-4">Chaos Bag Composition</div>
  <v-container>
    <v-row align="center">
      <v-col cols="auto"> <p>Apply a preset config to the token bag?</p></v-col>
      <v-col cols="5">
        <v-select label="Preset token config" :items="mainstore.tokenConfigs"></v-select>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" @click="mainstore.applyTokenConfig"
          ><v-icon icon="mdi-set-right" start></v-icon>Apply token config</v-btn
        ></v-col
      >
    </v-row>
  </v-container>

  <v-divider></v-divider>

  <v-form>
    <v-container>
      <v-row v-for="token in mainstore.orderedTokens" align="center">
        <v-col cols="2">
          <v-list-header class="text-h5 token-title">{{
            mainstore.tokens[token].fullName
          }}</v-list-header>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="mainstore.tokens[token].count"
            label="Count"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="mainstore.tokens[token].value"
            label="Value"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-checkbox
            v-model="mainstore.tokens[token].redraw"
            label="Redraw?"
          ></v-checkbox>
        </v-col>
        <v-col cols="auto">
          <v-checkbox
            v-model="mainstore.tokens[token].autofail"
            label="Autofail?"
          ></v-checkbox>
        </v-col>
        <v-col cols="3">
          <v-select
            clearable
            label="Autofail after"
            :items="[
              'Bless',
              'Curse',
              'Cultist',
              'Elder Thing',
              'Frost',
              'Skull',
              'Tablet',
            ]"
            v-model="mainstore.tokens[token].autofailAfter"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { useMainStore } from "@/stores/MainStore";

const mainstore = useMainStore();
</script>

<style scoped></style>
