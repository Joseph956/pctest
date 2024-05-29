
<template>
    <div class="container">
        <h1>Blog actualités chez Pctest</h1>
          <h2>Articles informatifs</h2>
          <p>Partagez des articles informatifs (IT Connect a voir !!!) sur les dernières tendances, les conseils de maintenance etc...</p>
    </div>
</template>

<script>

import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "Blog",
  components: {
    axios
  },
  computed: {
      ...mapState(["status"]),
    },
};
</script>

<style lang="scss" scoped >
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

h1 {
  font-family: "Lato";
}
.container {
  padding: 3rem;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}
</style>