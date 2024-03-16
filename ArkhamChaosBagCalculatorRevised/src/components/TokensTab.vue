<template>
  <div class="text-h3 pa-mb-4">Chaos Bag Composition</div>
  <v-container>
    <v-row align="center">
      <v-col cols="auto">
        <p class="text-body-1">Apply a preset config to the token bag?</p></v-col
      >
      <v-col cols="5">
        <v-select
          label="Preset token config"
          :items="mainstore.campaignOptions"
          v-model="mainstore.selectedCampaignTokenSet"
        ></v-select>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary" @click="mainstore.applyTokenConfig"
          ><v-icon icon="mdi-set-right" start></v-icon>Apply token config</v-btn
        ></v-col
      >
    </v-row>
    <v-row align="center">
      <v-col cols="auto">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="blue" text="Open Dialog" variant="flat"
              ><v-icon icon="mdi-content-save" start></v-icon>Save Custom Token Bag
              Config</v-btn
            >
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
              <v-card-text>
                <v-text-field
                  label="Save name"
                  v-model="mainstore.saveName"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                <v-btn
                  text="Save"
                  @click="
                    mainstore.save();
                    if ((mainstore.saveName != null) & (mainstore.saveName != '')) {
                      isActive.value = false;
                    }
                  "
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      <v-col cols="auto">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="blue" text="Open Dialog" variant="flat"
              ><v-icon icon="mdi-import" start></v-icon>Load Custom Token Bag
              Config</v-btn
            >
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
              <v-card-text>
                <v-select
                  label="Load token bag config"
                  :items="mainstore.savedTokenBagConfigs"
                  v-model="mainstore.loadName"
                ></v-select>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Delete Selected"
                  color="warning"
                  @click="
                    mainstore.deleteSave();
                    if (mainstore.loadName == null) {
                      isActive.value = false;
                    }
                  "
                ></v-btn>
                <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                <v-btn
                  text="Load"
                  color="blue"
                  @click="
                    mainstore.load();
                    isActive.value = false;
                  "
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
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
            :disabled="mainstore.tokens[token].autofail"
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
            @click="mainstore.toggleTokenValueOnAutofailSelect(token)"
          ></v-checkbox>
        </v-col>
        <v-col cols="3">
          <v-select
            clearable
            label="Treat as autofail if after..."
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

mainstore.listAllSaved();
</script>

<style scoped></style>
