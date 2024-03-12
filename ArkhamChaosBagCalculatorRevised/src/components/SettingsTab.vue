<template>
  <div class="text-h3 pa-mb-4">Redraw handling</div>
  <div class="text-body-1">
    With many "draw another token" tokens in the bag (e.g., Bless and Curse), calculating
    draw probabilities becomes very slow. The settings below let you customize redraw
    handling - setting a max number of redraws to calculate, and how to resolve redraws
    past that max. Clicking the "Plot redraw probabilities" button below will plot the
    probability of getting 1 - 10 redraws given your current token settings - i.e., what
    part of your overall token draw probability will be incorrect for a redraw max below
    your actual possible redraws. This can help inform what you set "Redraw max" to. For
    most cases, keeping your redraw max to 5 or lower is probably best, as this leaves
    little redraw chance unaccounted for, but the calculation runs in a manageable time.
  </div>

  <v-container>
    <v-row>
      <v-col cols="2">
        <v-text-field label="Redraw max" v-model="mainstore.redrawMax"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          label="Handling redraws over max"
          :items="['Treat as autofail']"
          v-model="mainstore.redrawHandling"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useMainStore } from "@/stores/MainStore";

const mainstore = useMainStore();
</script>

<style scoped></style>
