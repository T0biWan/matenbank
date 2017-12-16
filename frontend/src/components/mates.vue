<template>
<div>
  {{results}}
</div>
</template>

<script>
const MatenbankBaseURL = "http://127.0.0.1:3000/mate";

export default {
  name: "mates",

  data() {
    return {
      results: []
    };
  },

  mounted() {
    this.getMates();
  },

  methods: {
    getMates() {
      let url = MatenbankBaseURL;
      axios.get(url).then((response) => {this.results = response.data.results;
      console.log(response.data.results);})
      .catch(error => {console.log(error);});
    },
  },

};
</script>
