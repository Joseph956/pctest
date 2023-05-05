<template>
  <div>
    <Navbar />
    <div>
      <!-- <main> -->
      <div>
        <input type="text" v-model="username" v-on:input="checkValidity" />
        <p v-if="isValidUsername">{{ username }} is a valid username!</p>
      </div>
      <h1>Bienvenue chez pctest !</h1>
      <!-- <button @click="sendMessage">Envoyer un message</button> -->
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <!-- </main> -->
    </div>
    <Footteur />
  </div>
</template>

<script>
import Navbar from "@/views/Navbar.vue";
import Footteur from "@/views/Footteur.vue";
export default {
  name: "Accueil",
  data() {
    return {
      username: "",
      isValidUsername: false,
    };
  },
  methods: {
    checkValidity() {
      // Vérifier la validité du nom d'utilisateur
      const regex = /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/;
      this.isValidUsername = regex.test(this.username);
    },
  },
  // methods: {
  //   sendMessage() {
  //     this.$emit('message-sent',
  //     message: 'Mon message',

  //     )}
  // },
  components: {
    Navbar,
    Footteur,
  },
};
</script>

<style>
</style>