<template>
  <div>
    <Navbar />
    <div class="depann">
      <p>
        Maintenance / Dépannages<br />Assistance / Conseils <br />Prestations
            de Services Informatiques<br />
      </p>
      <div class="depannLogo">
        <img
          style="height: 5rem; width: 5rem"
          x="0"
          y="0"
          height="100"
          width="100"
          src="../assets/004.webp"
          alt="logo pctest"
        />
      </div>
      <br />
      <h2>Dépannages pc fixes ou portables</h2>
      <p class="depannText">
        <br />
        le décompactage de votre ordinateur neuf. la préparation de votre
        ordinateur selon vos besoins spécifiques. l'installation et la mise à
        jour des logiciels. Le nettoyage de votre ordinateur <strong>« hors garantie »
        </strong>constructeur. Le nettoyage et la mise à jour des applications logiciels
        (ex : Analyse et réparation des entrées de registre). Linstallation de
        périphériques USB, selon vos besoins. le nettoyage et la mise à jour de
        logiciels légers. La réinstallation complète de votre Windows ou la
        migration vers Windows 10 et 11.
      </p>
      <br />
      <div class="depannLogo">
        <img
          style="height: 5rem; width: 5rem"
          x="0"
          y="0"
          height="100"
          width="100"
          src="../assets/xps_laptop_icon_by_freaky_design.webp"
          alt="logo pctest"
        />
      </div>
      <h2>Installation, conseille, migration vers Windows 10 et 11.</h2>
      <p class="depannText">
        <br />
        Comme indiqué dans les pages sur le cycle de vie de Windows 10
        Entreprise et Éducation et Windows 10 Famille et Professionnel, la fin
        du support de Windows 10 aura lieu le 14 octobre 2025. Il est très
        important d'avoir un système à jour et sécurisé. Onglet « Contact » pour
        plus d'informations sur la meilleure solution pour vous aider à faire la
        transition vers Windows 11.
      </p>
      <br />
      <div class="depannLogo">
        <img
          style="height: 5rem; width: 5rem"
          x="0"
          y="0"
          height="100"
          width="100"
          src="../assets/ubuntu.webp"
          alt="logo pctest"
        />
      </div>
      <br />
      <h2>Votre ordinateur et linux</h2>
      <p class="depannText">
        <br />
        L'installation de Linux sur votre ordinateur vieillissant pour la
        bureautique et la communication. la solution pour différer l'achat d'un
        ordinateur neuf. Ubuntu est l'une des alternatives possibles pour
        prolonger la durée de vie de votre ordinateur, s'il ne peut pas faire
        tourner Windows 10 et 11. Onglet « Contact » pour plus de
        renseignements. Voir une vidéo de présentation.
      </p>
    </div>

    <Footteur />
  </div>
</template>

<script>
import Navbar from "@/views/Navbar.vue";
import Footteur from "@/views/Footteur.vue";
export default {
  name: "Depannages",
  components: {
    Navbar,
    Footteur,
  },
  //   props: {
  //     msg: String,
  //   },
};
</script>

<style lang="scss" scoped>
.depann {
  width: 50%;
  margin: auto;
  padding: 1rem;
  background-color: #ffffff;
}
.depannLogo {
  display: flex;
  justify-content: center;
  margin: auto;
}
.depannText {
  text-align: justify;
}
</style>