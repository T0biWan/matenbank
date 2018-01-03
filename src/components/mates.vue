<template lang="html">
  <div>
    <canvas ref="bar_chart"></canvas>
    <div class="columns is-multiline is-centered">
      <mate v-for="mate in mates" :key="mate.name" class="column is-one-quarter" :mate="mate"></mate>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import mate from "./mate.vue"

export default {
  name: "mates",

  components: {
    'mate': mate,
  },

  props: {
    mates: this.mates,
  },

  data() {
    return {
      producers: getProducers(this.mates),
      names: getNames(this.mates),
      caffeinePerEuros: getCaffeinePerEuros(this.mates),
    };
  },

  mounted() {
    new Chart(this.$refs.bar_chart, {
      type: 'bar',
      data: {
        labels: this.names,
        datasets: [{
          label: "(g / l) / €",
          backgroundColor: [
            "#ffa726",
            "#ffee58",
            "#26a69a",
            "#26c6da",
            "#42a5f5",
            "#e91e63",
            "#00bcd4",
            "#03a9f4",
            "#3f51b5",
            "#d81b60",
            "#2196f3"
          ],
          data: this.caffeinePerEuros
        }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Amount of caffeine per price'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            // Change here
            // barPercentage: 0.2
          }]
        },
      }
    });
  },
}

function getProducers(mates) {
  let producer = new Set();
  for (let mate of mates) {
    producer.add(mate.producer);
  }
  return [...producer];
};

function getNames(mates) {
  let names = new Set();
  for (let mate of mates) names.add(mate.name);
  return [...names];
};

function getCaffeinePerEuros(mates) {
  let caffeinePerEuros = [];
  for (let mate of mates) caffeinePerEuros.push(Math.round((mate.caffeine / mate.price) * 100) / 100);
  return caffeinePerEuros;
};
</script>


<style lang="scss">
canvas {
    margin-bottom: 50px;
}

.column {
    margin: 10px;
}
</style>
