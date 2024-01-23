<template>
  <div>
    <a href="/"><Accueil /></a>
    <div>
      <h1>Dépannages informatiques</h1>
      <!-- <a href="/">Accueil</a> -->
      <!-- <h1 class="depann">{{ msg }}</h1> -->
    </div>
  </div>
</template>

<script>
import Accueil from "@/views/Accueil.vue";
export default {
  name: "Depannages",
  components: {
    Accueil,
  },
  //   props: {
  //     msg: String,
  //   },
};
</script>

<style>
</style>