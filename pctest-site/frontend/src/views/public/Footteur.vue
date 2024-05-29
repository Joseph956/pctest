<template>
  <footer>
    <div class="containerFooter">
      <div class="containerLogo">
        <div class="logoPctest">
          <img style="height: 7rem; width: 7rem" x="0" y="0" height="100%" width="100%"
            src="../../assets/icons_pctest/logo_fond.png" alt="logo pctest" />
        </div>
      </div>
      <div class="textFooter">
        <div class="title">
          <h5>Pctest.fr </h5>
        </div>
        <div class="text">
          <p>
            Joseph ANGILERI <br>83000 TOULON <br> 06 35 21 25 31 <br />Siret 880 616 818 00014
          </p>
        </div>
      </div>
      <div class="textFooter">
        <div class="title">
          <h5>Zone d'intervention</h5>
        </div>
        <div class="text">
          <p>
            83000 TOULON <br> 
            Et sa périphérie <br>
            Lundi au Vendredi <br> 
            8h00 17h00 <br>
            Samedi 9h00 12h00
          </p>
        </div>
      </div>
      <div class="textFooter">
        <div class="title">
        <h5>Sites partenaires</h5>
        </div>
        <div class="text">
          <h6>https://www.jesuisreparateur.fr</h6>
          <h6>https://www.recoveo.com/</h6>
        </div>
      </div>
    </div>
    <div class="containerPiedPage">
      <div class="logoPiedPage">
        <img style="height: 3rem; width: 3rem" x="0" y="0" height="100%" width="100%"
          src="../../assets/icons_pctest/logo_fond.png" alt="logo pctest" />
        <small>
          <p>Propulsé par Joseph ANGILERI
            <br />© 2024 pctest.fr
          </p>
        </small>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: justify;
  font-size: small;
  background-color: #0f2431;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.textFooter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem 3rem 0 0;
  color: #f9f9f9;
  letter-spacing: 0.5px;

  .title h5 {
    margin-bottom: 10px;
    text-decoration: underline;
    font-weight: bold;
    font-size: large;
  }
}

.containerLogo {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: auto;
}

.logoPctest {
  margin: auto;
  background-color: #1b3443;
  color: #1b3443;
}

.containerPiedPage {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  text-align: justify;
  font-size: small;
  background-color: #0f2431;
  border: solid 1px #0f2431;
}

.logoPiedPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;
}
</style>