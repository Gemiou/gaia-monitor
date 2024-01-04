<script lang="ts" setup>
import Highcharts from "highcharts";
const pie_container = ref(null);
onMounted(() => {
  Highcharts.chart(pie_container.value, {
    chart: {
      type: "pie",

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
      valueSuffix: "TWh",
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        responsive: false,
        showInLegend: true,
      },
      series: {
        borderWidth: 0,
        colorByPoint: true,
        type: "pie",
        innerSize: "80%",
        dataLabels: {
          enabled: true,
          crop: false,
          distance: "-10%",
          style: {
            fontWeight: "bold",
            fontSize: "16px",
          },
          connectorWidth: 0,
        },
      },
    },
    colors: ["#2F60AD", "#F46B61"],
    series: [
      {
        colorByPoint: true,
        data: [
          {
            name: "Received",
            y: 55.02,
          },
          {
            name: "Lost",
            y: 26.71,
          },
        ],
      },
    ],
  });
});
</script>

<template>
  <div id="pie_container" ref="pie_container"></div>
</template>

<style lang="scss">
#pie_container {
  height: 240px;
}
</style>
