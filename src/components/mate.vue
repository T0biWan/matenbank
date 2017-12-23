<template>
  <div>
    {{mate}}
    {{caffeinePerEuro}}
  </div>
</template>

<script>
export default {
  name: "mate",

  props: {
    mate: this.mate,
  },

  computed: {
    caffeinePerEuro() {
      return Math.round((this.mate.caffeine / this.mate.price) * 100) / 100;
    }
  }

};
</script>
