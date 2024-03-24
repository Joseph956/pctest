<template>
  <footer>    
    <div class="containerFooter">
      <div class="containerLogo">
        <div class="logoPctest">
          <img style="height: 5rem; width: 5rem" x="0" y="0" height="100%" width="100%" src="../../assets/icons_pctest/logo_fond.png"
            alt="logo pctest" />
        </div>
      </div>
      <div class="textFooter">
        <h5>Pctest.fr </h5>
        <p>
          
          Joseph ANGILERI <br>83000 TOULON <br> 06 35 21 25 31 <br />Siret 880 616 818 00014
        </p>
      </div>
      <div class="textFooter">
        <br />
        <h5>Zone d'intervention</h5>
        <p>
          83000 TOULON <br> Et sa périphérie
          <br />
          Lundi au Vendredi <br> 8h00 17h00 <br>Samedi 9h00 12h00 
        </p>
        <br />
      </div>
      <div class="textFooter">
        <h5>Sites partenaires</h5>
        <h6>https://www.jesuisreparateur.fr</h6>
        <h6>https://www.recoveo.com/</h6>
        <br />
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
  flex-wrap: wrap;
  padding: 1rem;
  text-align: justify;
  font-size: small;
  background-color: #0f2431;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}
.textFooter {
  display: flex;
  flex-direction: column;
  margin: auto;
  color: #f9f9f9;
  letter-spacing: 0.5px;
}
.containerLogo {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: auto;
}
.logoPctest {
  width: 50%;
  margin: auto;
  background-color: #1b3443;
  color: #1b3443;
}
</style>