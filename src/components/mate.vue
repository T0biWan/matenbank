<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <h4 class="title is-4">{{mate.name}}</h4>
          <h6 class="subtitle is-6">{{mate.producer}}</h6>
          <p>Amount: {{mate.liter}} l</p>
          <p>Price: {{mate.price}} €</p>
          <p>Caffeine: {{mate.caffeine}} g/l</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mate",

  props: {
    mate: this.mate,
  },
};
</script>
