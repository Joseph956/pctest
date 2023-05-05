<template>
  <div>
    <header>
      <!-- Image de fond -->
      <div>
        <a class="imgAccueil" href="/">
          <img
            style="height: 50vh; width: auto"
            x="0"
            y="0"
            height="100%"
            width="100%"
            id="imgBottomAvatarPctest"
            alt="Vue logo"
            src="@/assets/newdepan02-1.jpg"
          />
        </a>

        <!-- <router-link to="/">Accueil</router-link> -->

        <nav>
          <div class="kmContainer">
            <div class="kmMenuNav">
              <div class="kmNavContainer">
                <!-- Navbar toggler -->
                <input
                  type="checkbox"
                  class="kmCheckbox"
                  name=""
                  id="kmNavbar"
                />
                <!-- Lines -->
                <div class="kmNavLines">
                  <span class="kmLine firstLine"></span>
                  <span class="kmLine secondLine"></span>
                  <span class="kmLine thirdLine"></span>
                </div>
                <!-- Menu items -->
                <ul class="kmNavItems">
                  <li class="kmRowNav">
                    <router-link to="/accueil"> Accueil</router-link>
                  </li>
                  <li class="kmRowNav">
                    <router-link to="/depannages"
                      >Dépannages informatiques
                    </router-link>
                  </li>
                  <li class="kmRowNav">
                    <router-link to="/logitheque">Logithèque</router-link>
                  </li>
                  <li class="kmRowNav">
                    <router-link to="/tarifs">Tarifs</router-link>
                  </li>
                  <li class="kmRowNav">
                    <router-link to="/contact">Contact </router-link>
                  </li>
                  <li class="kmRowNav">
                    <router-link to="/about">A propos</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import Footteur from "@/views/Footteur.vue";
export default {
  name: "Navbar",
  components: {
    Footteur,
  },
  //   props: {
  //     msg: String,
  //   },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?familly=leckerli+One&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Leckerli One";
  overflow: hidden;
}
ul {
  list-style-type: none;
}
.imgAccueil:hover {
  color: blue;
  border-color: blue;
}
.kmContainer {
  max-width: 1050px;
  width: 90%;
  margin: auto;
  .kmMenuNav {
    width: 100%;
    box-shadow: 0 1px 4px rgba(146, 161, 176, 0.293);
  }
  .kmNavContainer {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .kmNavItems {
    display: flex;
  }
  .kmMenuNav .kmNavItems a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    padding: 7px;
  }
  .kmMenuNav .kmNavItems a:hover {
    color: #00d3f9;
  }
  .kmRowNav {
    // background-color: rgba(25, 25, 112, 0.7);
    background: linear-gradient(to left, #1cb5e0, #000046);
    // background: linear-gradient(to right, #000046, #1cb5e0);
  }
}
// La checkbox
// .kmNavContainer {
//   .kmCheckbox {
//     cursor: pointer;
//     position: absolute;
//     display: block;
//     height: 32px;
//     width: 32px;
//     top: 20px;
//     left: 20px;
//     z-index: 5;
//     opacity: 0;
//   }
//   .kmRowNav {
//     position: absolute;
//     height: 25px;
//     width: 32px;
//     top: 17px;
//     left: 20px;
//     z-index: 2;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
// }
</style>