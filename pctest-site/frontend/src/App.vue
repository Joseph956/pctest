<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=lato+Sans:400,500,600,700,800");

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
  // background: url("./assets/nuagedemots.jpg") repeat center fixed;
  background-position: center;
  background-size: cover;
  margin: auto;
  font-weight: 400;
  font-size: large;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "latobold_italic";
}
</style>
