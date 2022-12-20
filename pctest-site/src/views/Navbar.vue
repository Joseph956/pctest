<template>
  <div>
    <header>
      <div>
        <a href="/">
          <img alt="Vue logo" src="@/assets/newdepan02-1.jpg" />
        </a>
        <nav>
          <!-- <router-link to="/">Accueil</router-link> -->
          <router-link to="/accueil">Accueil</router-link>
          <router-link to="/depannages">Dépannages informatiques</router-link>
          <router-link to="/logitheque">Logithèque</router-link>
          <router-link to="/tarifs">Tarifs</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/about">A propos</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import Footer from "@/views/Footer.vue";
export default {
  name: "Navbar",
  components: {
    Footer,
  },
  //   props: {
  //     msg: String,
  //   },
};
</script>

<style>
</style>