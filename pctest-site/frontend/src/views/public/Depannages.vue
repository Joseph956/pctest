<template>
  <div>
    <div class="depann">
      <div class="depannLogo">
        <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100"
          src="../../assets/icons_pages/04.png" alt="logo pctest" />
        <h2>Prestations de Services Informatiques</h2>
      </div>

      <br />
      <h3>Achat d'un ordinateur</h3>
      <br>
      <p class="depannText">
        j&rsquo;assure la reception de votre ordinateur, son décompactage et la mise à jour de votre système Windows. la préparation de votre nouveau poste selon vos besoins spécifiques. l&rsquo;installation et la mise à jour des applications logiciels.
      </p>
      <h3>Maintenance</h3>
      <br>
      <p class="depannText">
        Le nettoyage de votre ordinateur «<strong > hors garantie </strong>» constructeur. Le nettoyage et la mise à jour des applications logiciels. (ex : Analyse et réparation des entrées de registre). L&rsquo;installation de logiciels et périphériques USB, selon vos besoins. le nettoyage et la mise à jour de logiciels légers. La réinstallation de votre ordinateurws ou la migration vers Windows 10 et 11.
      </p>
      <br />
      <div class="depannLogo">
        <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100"
          src="../../assets/icons_pages/xps_laptop_icon_by_freaky_design.webp" alt="logo pctest" />
        <h2>Installations / recommandations / migrations</h2>
      </div>
      <br />
      <h3>Vers les versions 10 et 11 de Windows.</h3>
      <br>
      <p class="depannText">
        Comme indiqué dans les pages sur le cycle de vie de Windows 10 Entreprise et Éducation et Windows 10 Famille et Professionnel, la fin du support de Windows 10 aura lieu le 14 octobre 2025. Il est très important d'avoir un ordinateur mis à jour et sécurisé. Pour obtenir des renseignements supplémentaires sur la manière dont nous pouvons vous assister dans la migration vers Windows 11, veuillez utiliser l'onglet <router-link
          to="/public/contact" text-decoration="none"> <strong>«Contact» </strong>  </router-link>pour exposer votre besoin et être rappelé par nos
        services.
      </p>
      <br />
      <div class="depannLogo">
        <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100"
          src="../../assets/icons_pages/ubuntu.webp" alt="logo pctest" />
        <h2>Votre ordinateur et linux</h2>
      </div>
      <br />
      <p class="depannText">
        L&rsquo;installation de Linux sur votre ordinateur vieillissant pour la bureautique et la communication. la
        solution
        pour différer l'achat d'un ordinateur neuf. Ubuntu est l&rsquo;une des alternatives possibles pour prolonger la
        durée
        de vie de votre ordinateur, s&rsquo;il ne peut pas faire tourner Windows 10 et 11. Onglet « Contact » pour plus
        de renseignements. Voir une vidéo de présentation.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Depannages",
  //   props: {
  //     msg: String,
  //   },
};
</script>

<style lang="scss" scoped>
.depann {
  padding: 1.2rem 5rem;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;

  .depannLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0rem 10px;

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 0 3rem;
      // text-decoration: underline;
    }
  }

  h3 {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: auto;
    // text-decoration: underline;
  }
}


.depannText {
  text-align: justify;
}
</style>