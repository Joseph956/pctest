<template>
  <div>
    <div class="tarifs">
      <h6>- TVA non applicable art 293 B du CGI -</h6>
      <div class="logitheqLogo">
        <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100"
          src="../../assets/icons_pages/zz-18.webp" alt="logo pctest" />
      </div>

      <div class="Prestations">
        <div class="textPrestations">
          <div>
            <p>
              Pour obtenir un devis descriptif onglet « Contact » saisir vos
              coordonnées, en mentionnant le type d'appareils informatique, et les
              problèmes rencontrés.
            </p>
          </div>
          <h2>Tarifs des prestations réalisés à domicile</h2>

          <div>
            <p>
              Dépannages à domicile (déplacement inclus Toulon) Temps max 1h30
              35€<br />
              Déplacement (La Valette, La garde, Le Pradet) Forfait 10€
            </p>
          </div>
          <h2>Tarifs des prestations réalisés en atelier</h2>
          <p>
            Forfait optimisation : Améliorer les performances de votre ordinateur
            ou le débloquer. Windows 50€
          </p>
          <p>
            Forfait installation / réinstallation (sans sauvegardes de données) :
            Formatage du disque dur, et réinstallation de votre système
            d'exploitation. Windows 80€.
          </p>
          <p>
            Forfait préparation de poste (avec sauvegardes de données) : Formatage
            du disque dur, et réinstallation de votre système d'exploitation
            Windows 100€
          </p>
          <p>
            Toutes interventions techniques sur vos appareils informatiques
            peuvent engendrer des pertes de données irréversibles. Il est
            fortement conseillé de faire des copies de sauvegarde fréquentes sur
            différents supports pour prévenir à long terme les risques de pertes
            de données.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tarifs",
};
</script>

<style lang="scss" scoped>
.tarifs {
  text-align: justify;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;


}

.logitheqLogo {
  display: flex;
  justify-content: center;
}

.prestations {
  padding: 1rem;
  margin: 2rem 1rem 2rem 1rem;
  border-radius: 1rem;
  text-align: center;
}

.textPrestations {
  text-align: justify;
  padding: 1rem;
  margin: 2rem 1rem 2rem 1rem;
  font-family: 'latoblack_italic';
  h2 {
    padding: 1rem 2rem 0 2rem
  }

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