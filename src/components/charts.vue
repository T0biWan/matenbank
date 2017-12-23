<template lang="html">
  <div>
    <!-- use ref to acces dom in vue -->
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: "charts",

    mounted() {
      let canvas = this.$refs.canvas
      new Chart(this.$refs.canvas, {
        type: 'doughnut',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2478, 5267, 734, 784, 433]
          }]
        },

      });
    }
  }
</script>
