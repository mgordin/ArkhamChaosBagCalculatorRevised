<template>
  <div class="text-h3 pa-mb-4">Chaos Bag Composition</div>
  <v-form>
    <v-container>
      <v-row v-for="token in mainstore.orderedTokens">
        <v-col cols="2">
          <v-list-header class="text-h5">{{
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
