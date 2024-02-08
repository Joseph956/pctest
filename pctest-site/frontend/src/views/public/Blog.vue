<div></div>
<template>
    <Navbar />
    <div>
        <h1>Blog actualités chez Pctest</h1>
          <h2>Articles informatifs</h2>
          <p>Partagez des articles informatifs (IT Connect a voir !!!) sur les dernières tendances, les conseils de maintenance etc...</p>
    </div>
</template>

<script>
import Navbar from "@/views/public/Navbar.vue";
export default {
  name: "Blog",
  components: {
    Navbar,
    // Navbar: () => import("@/views/public/Navbar.vue"),
  }
};
</script>

<style>
</style>