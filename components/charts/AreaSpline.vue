<script lang="ts" setup>
import Highcharts from "highcharts";
const area_container = ref(null);
onMounted(() => {
  Highcharts.chart(area_container.value, {
    chart: {
      type: "areaspline",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: true,
    },

    tooltip: {
      valueDecimals: 2,
      valueSuffix: " TWh",
    },

    xAxis: {
      plotBands: [
        {
          // Highlight the two last years
          from: 2019,
          to: 2020,
          color: "rgba(68, 170, 213, .2)",
        },
      ],
    },
    yAxis: {
      labels: {
        enabled: true,
      },
      title: {
        text: null,
      },
    },
    plotOptions: {
      responsive: true,
      series: {
        pointStart: 2000,
      },
      areaspline: {
        fillOpacity: 0.5,
      },
    },
    colors: ["#FF847A"],

    series: [
      {
        name: "Moose",
        data: [
          38000, 37300, 37892, 38564, 36770, 36026, 34978, 35657, 35620, 35971,
          36409, 36435, 34643, 34956, 33199, 31136, 30835, 31611, 30666, 30319,
          31766,
        ],
      },
    ],
  });
});
</script>

<template>
  <div id="area_container" ref="area_container"></div>
</template>

<style lang="scss">
#area_container {
  height: 230px;
}
</style>
