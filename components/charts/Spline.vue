<script lang="ts" setup>
import Highcharts from "highcharts";
const spline_container = ref(null);
onMounted(() => {
  Highcharts.chart(spline_container.value, {
    chart: {
      backgroundColor: null,
      borderWidth: 0,
      type: "area",
      margin: [2, 0, 2, 0],
      width: 120,
      height: 40,
      style: {
        overflow: "visible",
      },
      // small optimalization, saves 1-2 ms each sparkline
      skipClone: true,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      hideDelay: 0,
      outside: true,
      shared: true,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null,
      },
      startOnTick: false,
      endOnTick: false,
      tickPositions: [],
    },
    yAxis: {
      endOnTick: false,
      startOnTick: false,
      labels: {
        enabled: false,
      },
      title: {
        text: null,
      },
      tickPositions: [0],
    },
    plotOptions: {
      series: {
        animation: false,
        lineWidth: 2,
        shadow: false,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        marker: {
          radius: 1,
          states: {
            hover: {
              radius: 2,
            },
          },
        },
        fillOpacity: 0.25,
      },
      column: {
        negativeColor: "#910000",
        borderColor: "silver",
      },
    },

    colors: ["#2F60AD"],
    series: [
      {
        name: "USA",
        data: [50, 170, 299, 438, 841],
      },
    ],
  });
});
</script>

<template>
  <div id="spline_container" ref="spline_container"></div>
</template>
