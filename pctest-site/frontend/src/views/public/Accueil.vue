<template>
  <div>
    <div>
      <div class="present">
        <div class="textPresent">
          <h1>Bienvenue chez pctest !</h1>
          <p>
            Ordinateurs / Tablettes / Périphériques / imprimantes /
            Maintenance / Dépannages / Assistance / Conseils et prestations de services.
            Joseph ANGILERI 06 35 21 25 31 / Dépannages / Assistance / Conseils et
            prestations de services informatiques à domicile
          </p>
          <p>
            Sur la ville de Toulon et sa périphérie pour la <em>reparation</em>, la
            <em>mise en service</em>maintenance ou la mise en service de vos appareils informatiques,
            Ordinateurs / Tablettes / Périphériques / imprimantes.
          </p>
          <p>
            L'onglet « Contact » permet une prise en compte rapide de votre demande
            et le rappel dans la première heure pour une intervention à domicile.
          </p>
          <p>
            En atelier toutes les prestations sont proposées sur devis estimatif
            détaillé et chiffré fait avant toutes prises en charges de vos
            appareils.
          </p>
        </div>
      </div>
      <!-- </main> -->
    </div>
  </div>
</template>

<script>
// import Navbar from "@/views/public/Navbar.vue";
// import Footteur from "@/views/public/Footteur.vue";
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
};
</script>

<style lang="scss" scoped>
.present {
  text-align: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

h1 {
  font-family: "Lato";
}

.textPresent {
  padding: 1rem;
  margin: 2rem 1rem 2rem 1rem;
  border-radius: 1rem;
  text-align: center;
  background-color: #ffffff;

  p {
    font-family: "Lato";
    font-size: 20px;
    text-align: justify;
    padding: 1rem 2rem 0 2rem;
    color: #000000;
    line-height: 1.5;
    font-weight: 400;
    margin: 0 0 1rem 0;
  }
}
</style>