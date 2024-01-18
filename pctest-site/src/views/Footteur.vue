<template>
  <footer>
    <div class="containerFooter">
      <div class="textFooter">
        <h3>Pctest.fr </h3>
        <p>
          
          Joseph ANGILERI <br>83000 TOULON <br> 06 35 21 25 31 <br />Siret 880 616 818 00014
        </p>
      </div>
      <div class="textFooter">
        <br />
        <h3>Zone d'intervention</h3>
        <p>
          83000 TOULON Et sa périphérie
          <br />
          Lundi au Vendredi 8h00 17h00 <br>Samedi 9h00 12h00 <br />Port : 06 35 21
          25 31
        </p>
        <br />
      </div>
      <div class="textFooter">
        <h3>Sites partenaires</h3>
        <h4>https://www.jesuisreparateur.fr</h4>
        <h4>https://www.recoveo.com/</h4>
        <br />
      </div>
    </div>
    <div class="containerLogo">
      <div class="logoPctest">
        <img
          style="height: 5rem; width: 5rem"
          x="0"
          y="0"
          height="100%"
          width="100%"
          src="../assets/22Capture.png"
          alt="logo pctest"
        />
        <div class="logoPctest">
          <span>© 2024 Pctest.fr Tous droits réservés.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footteur",
};
</script>

<style lang="scss" scoped>
.containerFooter {
  display: flex;
  margin: auto;
  width: 50%;
  padding: 1rem;
  text-align: justify;
  font-size: small;
  background-color: #1b3443;
}
.textFooter {
  display: flex;
  flex-direction: column;
  margin: auto;
  color: #ffffff;
}
.containerLogo {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: auto;
}
.logoPctest {
  // display: flex;  
  width: 50%;
  margin: auto;
  background-color: #ffffff;
  color: #1b3443;
}
</style>