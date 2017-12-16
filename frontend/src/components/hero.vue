<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h2 class="title is-2">{{ title }}</h2>
        <h5 class="subtitle is-5">{{ subtitle }} </h5>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "hero",
    props: {
      title: this.title,
      subtitle: this.subtitle
    },
  }
</script>
