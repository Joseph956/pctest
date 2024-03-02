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
  // min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "latobold_italic";
}
.auth-wrapper {
  width: 100%;
  // height: 100vh;
  margin: auto;
}
// .auth-wrapper {
//   display: flex;
//   justify-content: center;
// }
.auth-inner {
  // width: 700px;
  margin: auto;
  /* background: #4e5166; */
  // background: #7c7e8d;
  // box-shadow: 0px 14px 80px rgba(26, 8, 11, 0.7);
  padding: 2.5rem 55px 45px 55px;
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
// .auth-inner {
//   width: 700px;
//   margin: auto;
//   /* background: #4e5166; */
//   background: #7c7e8d;
//   box-shadow: 0px 14px 80px rgba(26, 8, 11, 0.7);
//   padding: 2.5rem 55px 45px 55px;
//   border-radius: 15px;
//   transition: all 0.3s;
//   outline: none;
// }
</style>
