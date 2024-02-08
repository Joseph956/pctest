<template>
  <div>
    <Navbar />
    <div class="depann">
      <p>
        Ordinateurs / Tablettes / Périphériques / imprimantes /
        Maintenance / Dépannages<br />Assistance / Conseils <br />
      </p>
      <div class="depannLogo">
        <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100" src="../../assets/004.webp"
          alt="logo pctest" />
      </div>
      <p><br /></p>
      <br />
      <h2>Prestations de Services Informatiques</h2>
      <h3>Achat d'un ordinateur</h3>
      <p class="depannText">
        <br />
        j'assure la reception de votre ordinateur, son décompactage et la mise à jour de votre système Windows. la
        préparation de votre nouveau poste selon vos besoins spécifiques. l'installation et la mise à jour des logiciels.
      </p>
      <br>
      <h3>Maintenance</h3>
      <br>
      <p class="depannText">
        Le nettoyage de votre ordinateur <strong>« hors garantie »</strong>constructeur. Le nettoyage et la mise à jour
        des applications logiciels. (ex : Analyse et réparation des entrées de registre). Linstallation de périphériques
        USB, selon vos besoins. le nettoyage et la mise à jour de logiciels légers. La réinstallation complète de votre
        Windows ou la migration vers Windows 10 et 11.
      </p>
      <br />
      <div class="depannLogo">
        <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100"
          src="../../assets/xps_laptop_icon_by_freaky_design.webp" alt="logo pctest" />
      </div>
      <h2>Installation / recommandation / migration</h2>
      <h3>vers les versions 10 et 11 de Windows.</h3>
      <p class="depannText">
        <br />
        Comme indiqué dans les pages sur le cycle de vie de Windows 10 Entreprise et Éducation et Windows 10 Famille et
        Professionnel, la fin du support de Windows 10 aura lieu le 14 octobre 2025. Il est très important d'avoir un
        système à jour et sécurisé. Onglet « Contact » pour plus d'informations sur la meilleure solution pour vous aider
        à faire la transition vers Windows 11.
      </p>
      <br />
      <div class="depannLogo">
        <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100" src="../../assets/ubuntu.webp"
          alt="logo pctest" />
      </div>
      <br />
      <h2>Votre ordinateur et linux</h2>
      <p class="depannText">
        <br />
        L'installation de Linux sur votre ordinateur vieillissant pour la bureautique et la communication. la solution
        pour différer l'achat d'un ordinateur neuf. Ubuntu est l'une des alternatives possibles pour prolonger la durée de
        vie de votre ordinateur, s'il ne peut pas faire tourner Windows 10 et 11. Onglet « Contact » pour plus de
        renseignements. Voir une vidéo de présentation.
      </p>
    </div>

    <Footteur />
  </div>
</template>

<script>
import Navbar from "@/views/public/Navbar.vue";
import Footteur from "@/views/public/Footteur.vue";
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
  width: 55%;
  margin: auto;
  padding: 1rem;
  background-color: #f9f9f9;
}

.depannLogo {
  display: flex;
  justify-content: center;
  margin: auto;
}

.depannText {
  text-align: justify;
}</style>