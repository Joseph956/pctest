<template>
  <div>
    <Navbar />
    <div class="tarifs">
      <h6>- TVA non applicable art 293 B du CGI -</h6>
      <div class="logitheqLogo">
        <img
          style="height: 5rem; width: 5rem"
          x="0"
          y="0"
          height="100"
          width="100"
          src="../assets/zz-18.webp"
          alt="logo pctest"
        />
      </div>
      
      <div class="textPrestations">
        <div>
          <p>
            Pour obtenir un devis descriptif onglet « Contact » saisir vos
            coordonnées, en mentionnant le type d'appareils informatique, et les
            problèmes rencontrés.
          </p>
          <br />
          <h2>Tarifs des prestations réalisés à domicile</h2>
        </div>
        <div>
          <p>
            Dépannages à domicile (déplacement inclus Toulon) Temps max 1h30
            35€<br />
            Déplacement (La Valette, La garde, Le Pradet) Forfait 10€
          </p>
          <br />
         
          <br />
        </div>
        <h2>Tarifs des prestations réalisés en atelier</h2>
        <p>
          Forfait optimisation : Améliorer les performances de votre ordinateur
          ou le débloquer. Windows 50€
        </p>
        <br />
        <p>
          Forfait installation / réinstallation (sans sauvegardes de données) :
          Formatage du disque dur, et réinstallation de votre système
          d'exploitation. Windows 80€.
        </p>
        <br />
        <p>
          Forfait préparation de poste (avec sauvegardes de données) : Formatage
          du disque dur, et réinstallation de votre système d'exploitation
          Windows 100€
        </p>
        <br />
        
        <br />
        <br />
        <p>
          Toutes interventions techniques sur vos appareils informatiques
          peuvent engendrer des pertes de données irréversibles. Il est
          fortement conseillé de faire des copies de sauvegarde fréquentes sur
          différents supports pour prévenir à long terme les risques de pertes
          de données.
        </p>
        <br />
      </div>
    </div>
    <Footteur />
  </div>
</template>

<script>
import Navbar from "@/views/Navbar.vue";
import Footteur from "@/views/Footteur.vue";
export default {
  name: "Tarifs",

  components: {
    Navbar,
    Footteur,
  },
};
</script>

<style lang="scss" scoped>

.tarifs {
  width: 50%;
  margin: auto;
  text-align: justify;
  padding: 1rem;
  background-color: #ffffff;
  .logitheqLogo {
    display: flex;
    justify-content: center;
  }
  .textPrestations {
    text-align: justify;
    padding: 1rem;
      font-family: 'latoblack_italic';
  }
}
</style>