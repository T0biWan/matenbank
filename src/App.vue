<template>
  <div id="app">
    <hero title="Matenbank" subtitle="Choose your source of energy"></hero>
    <div class="container">
      <charts></charts>
      <mates :mates="mates"></mates>
    </div>
  </div>
</template>

<script>
import json from "./data/mate.json"
import hero from "./components/hero.vue"
import mates from "./components/mates.vue"
import charts from "./components/charts.vue"

export default {
  name: 'app',

  components: {
    'hero': hero,
    'mates': mates,
    'charts': charts,
  },

  data() {
    return {
      mates: json
    };
  },
}
</script>

<style lang="scss"></style>
