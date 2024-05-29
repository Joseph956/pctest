<template>
  <div>
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style lang="scss" >
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  font-weight: inherit;
  font-style: inherit;
  vertical-align: baseline;
  list-style: none;
  box-sizing: border-box;
}
body {
  background: url("./assets/Fond-Gris.jpg") no-repeat center fixed;
  background-size: cover;
  background-position: center;
  background-size: cover;
  margin: auto;
  font-weight: 400;
  font-size: large;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "latobold_italic";
}
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  margin: auto;
}
.auth-inner {
  width: 1000px; 
  height: 40%;
  border-radius: 15px;
  transition: all 0.3s;
  outline: none;
}
.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}
.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 5px;
  font-size: large;
}

</style>
