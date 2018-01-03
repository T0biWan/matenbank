<template>
  <div id="app">
    <hero title="Matenbank" subtitle="Choose your source of energy"></hero>
    <div class="container">
      <mates :mates="mates"></mates>
    </div>
  </div>
</template>

<script>
import json from "./data/mate.json"
import hero from "./components/hero.vue"
import mates from "./components/mates.vue"

export default {
  name: 'app',

  components: {
    'hero': hero,
    'mates': mates,
  },

  data() {
    return {
      mates: json
    };
  },
}
</script>

<style lang="scss"></style>
