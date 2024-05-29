<template>  
      <div class="present">
        <h1>Bienvenue chez pctest !</h1>
        <div class="textPresent">
          <p>
            Joseph ANGILERI 06 35 21 25 31 / Ordinateurs / Tablettes / Périphériques / imprimantes / Maintenance / Depannages / Assistance / Conseils et prestations de services informatiques à domicile.

          </p>
          <p>
            Sur la ville de Toulon et sa périphérie pour la <strong>reparation</strong> , la mise à jour, la maintenance ou la mise en service de vos appareils informatiques.
          </p>
          <p>
            L'onglet « Contact » permet une prise en compte rapide de votre demande et le rappel dans la première heure pour une intervention à domicile.
          </p>
          <p>
             <strong>A domicile : </strong> Un devis détaillé personnalisé est produit pour une prestation ou un ensemble de prestations dont le prix total est supérieur à 100€ ou sur simple demande quelqu'en soit le montant.
          </p>
          <p>
            <strong>En atelier :</strong> Toutes les prestations sont proposées sur devis estimatif, détaillé et chiffré. La validation de ce devis par le client est nécessaire avant toutes prises en charges de vos appareils.
          </p>
        </div>
      </div>
</template>

<script>
// import Navbar from "@/views/public/Navbar.vue";
// import Footteur from "@/views/public/Footteur.vue";
import { mapState } from "vuex";
export default {
  name: "Accueil",
  data() {
    return {
      username: "",
      isValidUsername: false,
    };
  },
  computed: {
    ...mapState(["status"]),
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

// h1 {
//   font-family: "Lato";
// }

.textPresent {
  padding: 0 1rem;
  margin: 0 1rem 0 1rem;
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