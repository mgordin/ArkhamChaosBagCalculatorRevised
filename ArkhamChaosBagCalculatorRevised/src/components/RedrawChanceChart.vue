<template>
  <Bar id="redraw-chance-chart" :options="chartOptions" :data="chartData" />
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
    labels: mainstore.range(1, parseInt(mainstore.redrawMax)),
    datasets: [
      {
        data: mainstore.redrawChanceChart_y,
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
        text: "# of Redraws",
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
        text: ["Probability of that", "many redraws (%)"],
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
#redraw-chance-chart {
  max-height: 40vh;
  max-width: 80vw;
}
</style>
