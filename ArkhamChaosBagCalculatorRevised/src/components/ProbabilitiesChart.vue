<template>
  <Bar id="probabilities-chart" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useMainStore } from "@/stores/MainStore";
import { computed } from "vue";

const mainstore = useMainStore();

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartData = computed(() => {
  return {
    labels: mainstore.probabilitiesChart_x,
    datasets: [
      {
        data: mainstore.probabilitiesChart_y,
        backgroundColor: "#64B5F6",
        xAxisID: "x-axis",
        yAxisID: "y-axis",
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
  scales: {
    "x-axis": {
      type: "category",
      axis: "x",
      title: {
        display: true,
        text: "Skill value minus test difficulty",
        font: {
          size: 20,
        },
      },
    },
    "y-axis": {
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "Probability of success (%)",
        font: {
          size: 20,
        },
      },
    },
  },
  plugins: {
    datalabels: {
      color: "white",
      font: {
        weight: "bold",
        size: "20",
      },
      formatter: function (value, context) {
        return Math.ceil(value) + "%";
      },
    },
  },
};
</script>

<style scoped>
#probabilities-chart {
  max-height: 40vh;
}
</style>
