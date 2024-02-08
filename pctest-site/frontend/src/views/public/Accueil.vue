<template>
  <div>
    <Navbar />
    <div>
      <!-- <main> -->
      <!-- <div>
        <input type="text" v-model="username" v-on:input="checkValidity" />
        <p v-if="isValidUsername">{{ username }} is a valid username!</p>
      </div> -->
      <div class="present">
        <h1>Bienvenue chez pctest !</h1>
        <!-- <button @click="sendMessage">Envoyer un message</button> -->
  
        <br />
        <p>
          Joseph ANGILERI 06 35 21 25 31 / Dépannages / Assistance / Conseils et
          prestations de services informatiques à domicile
        </p>
        <br />
        <p>
          Sur la ville de Toulon et sa périphérie pour la réparation, la
          maintenance ou la mise en service de vos appareils informatiques,
          Ordinateurs / Tablettes / Périphériques / imprimantes.
        </p>
        <br />
        <p>
          L'onglet « Contact » permet une prise en compte rapide de votre demande
          et le rappel dans la première heure pour une intervention à domicile.
        </p>
        <br />
        <p>
          En atelier toutes les prestations sont proposées sur devis estimatif
          détaillé et chiffré fait avant toutes prises en charges de vos
          appareils.
        </p>
      </div>
    
      <!-- </main> -->
    </div>
    <Footteur />
  </div>
</template>

<script>
import Navbar from "@/views/public/Navbar.vue";
import Footteur from "@/views/public/Footteur.vue";
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

<style lang="scss" scoped>
.present {
  width: 55%;
  margin: auto;
  text-align: justify;
  padding: 1rem;
  background-color: #ffffff;
}
</style>