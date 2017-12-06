<template>
  <div id="app">
    <hero title="Be my mate" subtitle="Choose your source of energy"></hero>
  </div>
</template>

<script>
import json from "./data/data.json"
import hero from "./components/hero.vue"

export default {
  name: 'app',
  components: {
    'hero': hero,
  },
  data() {
    return {
      data: json
    };
  },
}
</script>

<style lang="scss"></style>
