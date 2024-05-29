<template>
  <div>

    <body>
      <header id="branding">
        <!-- Image de fond -->
        <!-- <router-link to="/">Accueil</router-link> -->
        <!-- <nav>
            <div class="kmContainer">
              <div class="kmMenuNav">
                <div class="kmNavContainer">
                 Navbar toggler
                  <div class="navbarLogo">
                    <input />
                    <img
                      style="height: 5rem; width: 5rem"
                      x="0"
                      y="0"
                      height="100%"
                      width="100%"
                      src="../assets/22Capture.png"
                      alt="logo pctest"
                    />
                  </div>
                   Lines 
                  <div class="kmNavLines">
                    <span class="kmLine firstLine"></span>
                    <span class="kmLine secondLine"></span>
                    <span class="kmLine thirdLine"></span>
                  </div>
                  Menu items
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
          </nav> -->

        <!-- <div> -->
        <!-- Image d'accueil -->
        <a href="../../public/Blog">
          <img class="imgAccueil" style=" height: auto; 
            object-fit: cover; 
            margin: auto; 
            border-color: blue; 
            border-style: solid; 
            border-width: auto" x="0" y="0" height="100" width="100" id="imgBottomAvatarPctest" alt="Vue logo"
            src="../../assets/icons_pctest/newdepan02-1.jpg" />
        </a>
        <!-- Copyright -->
        <div class="copyrightPctest">
          <span>
            <small>© 2024 Copyright Pctest.fr Tous droits réservés.</small>
            <h6> <b></b> </h6>
          </span>
        </div>
        <!--Barre de navigation  -->
        <nav class="navbar dark-mode" role="navigation">
          <div class="navContainer">
            <ul class="navbarLinks">
              <li class="navbarLink">
                <router-link to="/public/accueil"> Accueil</router-link>
              </li>
              <li class="navbarLink">
                <router-link to="/public/depannages">Prestations </router-link>
              </li>
              <li class="navbarLink">
                <router-link to="/public/logitheque">Logithèque</router-link>
              </li>
              <li class="navbarLink">
                <router-link to="/public/tarifs">Tarifs</router-link>
              </li>
              <li class="navbarLink">
                <router-link to="/public/contact">Contact </router-link>
              </li>
              <li class="navbarLink">
                <router-link to="/public/about">A propos</router-link>
              </li>
              <li class="navbarLink">
                <router-link to="/auth/login">Connexion</router-link>
              </li>
            </ul>
            <!-- Formulaire de recherche -->
            <!-- with-image -->
            <div class="only-search ">
              <form method="get" id="searchform" action="https://joseph956.github.io/pctest/" role="search">
                <!-- <i class="fa-sharp fa-solid fa-magnifying-glass" height="1px" width="1px"></i> -->
                <!-- <i class="fas magnifying-glass icon-fct" aria-hidden="true"></i> -->
                <label for="s" class="assistive-text">Recherche</label>
                <input type="text" class="field" name="s" id="s" placeholder="Recherche" />
                <input type="submit" class="submit" name="submit" id="searchsubmit" value="Recherche" />
              </form>
            </div>
            <!-- <input type="search" id="search" value="" placeholder="Recherche" onchange="searchPage()" />
            <button @click="searchPage()"></button> -->
            <!-- Formulaire de recherche -->
            <div class="only-search width-image">
              <button class="burger">
                <span class="bar"></span>
              </button>
            </div>
          </div>
        </nav>
        <!-- </div> -->
      </header>
      <!-- <main class="main-content" role="main">
        <h1>Menu Responsive avec Burger Animé</h1>
      </main> -->
      <!-- <div id="section2">Ancre</div> -->
    </body>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Footteur from "@/views/public/Footteur.vue";
export default {
  name: "Navbar",
  components: {
    Footteur,
  },
  //   props: {
  //     msg: String,
  //   },

  methods: {
    searchPage: function () {
      var a = document.getElementById("search").value;
      if (
        (a === "depannages")
      ) {
        windows.open("/publics/depannages");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/** fonts */
// @import url("https://fonts.googleapis.com/css2?familly=leckerli+One&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

/**Variables */
:root {
  --font-size: 1rem;
}

/** Reset */
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

/** Basic style */
body {
  margin: 0;
  font-family: "Leckerli One";
  font-size: var(--font-size);
}

.main-content {
  padding: 1rem;
}

.copyrightPctest {
  text-size-adjust: 100%;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  padding: 0;
}

/** Navbar */
.navbar {
  display: flex;
  justify-content: center;
  // padding: 10px;
  font-size: 1.2rem;
  background: var(--navbar-bg-color);
  color: var(--navbar-color);
  background-color: #0f2431;
  text-decoration-color: #ffffff;
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;

  .navContainer,
  ul,
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto 0 auto;
    padding: 0 1rem 0;
  }

  .navContainer .navbarLinks {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    // background-color: white;
    transition: opacity 0.4s;
  }

  .navbarLinks .navbarLink:hover {
    // width: 100%;
    height: 100%;
    // color: #ffffff;
    background-color: #e4d9d9;
    // padding: 0 10px 0 10px;
    opacity: 0.8;
  }

  .navbarLinks .whith-image #searchform {
    top: auto;
    bottom: -27px;
    max-width: 195px;
    height: 32px;
  }

  .assistive-text,
  .screen-reader-text {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
    height: 1px;
    width: 1px;
  }

  .navbarLinks .only-search #s {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 0.3rem 0 0.3rem 0;
    color: #878787;
    width: 100%;


  }

  input #s {
    background: url("../../assets/icons_pages/004.webp")no-repeat 5px 6px;
    background-color: rgba(255, 255, 255, 0.4);
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: 14px;
    height: 22px;
    line-height: 1.2em;
    padding: 4px 10px 4px 28px;
  }

  .navbarLink>a {
    color: var(--navbar-color);
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 0.8rem;
    font-weight: 600;
    position: relative;
    padding: 0;


  }
}

.fas {
  font-size: small;
}

.burger {
  display: none;
}

/** Small devices */

/** Toggle menu */

/** Bonus - animations*/

/** Médium devices */
@media screen and (min-width: 768px) {
  .navbarLink>a::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: var(--navbar-color);
    transition: width 0.4s;
  }

  .navbarLink a:hover>a::after {
    width: 100%;
  }
}

body {
  font-family: "Leckerli One";
  overflow: hidden;
}

ul {
  list-style-type: none;
}

/*****************************
** Navbar recherche **********
******************************/
#branding .imgAccueil {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: -5px;
  box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;

}

#searchform {
  // position: relative;
  top: 3.8em;
  right: 7.6%;
  text-align: right;
  top: auto;
  bottom: -27px;
  max-width: 195px;
  height: 32px;
}

.icon {
  font-size: 10px;
}

#branding .with-image #searchform {
  top: auto;
  bottom: -27px;
  max-width: 195px;
  height: 32px;
}

#branding .only-search #searchform {
  top: 5px;
  z-index: 1;
}

#branding .only-search #s {
  width: 100%;
  color: #f7f3f3;
  background-color: rgba(126, 99, 99, 0.4);
  border-color: rgba(177, 165, 165, 0.2);
  border-radius: 2px;
  font-size: 14px;
  height: 20px;
  line-height: 1.2em;
  padding: 4px 10px 4px 55px;
  margin: 0 0.5rem 0;
}

#searchsubmit {
  display: none;
}

input#s {
  background: url("../../assets/icons/icons8-chercher-50.png") no-repeat 1px;
  height: 1px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 1px;
  color: #fff;
  height: 2px;
  line-height: 1.2em;
  padding: 4px 10px 4px 55px;
}

/*****************************
** Navbar burger **********
******************************/

.imgAccueil:hover {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: auto;
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
    width: 50%;
    margin: auto;
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

La checkbox .kmNavContainer {
  .kmCheckbox {
    cursor: pointer;
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
  }

  .kmRowNav {
    position: absolute;
    height: 25px;
    width: 32px;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

@media screen and (max-width: 768px) {
  .imgAccueil {
    width: 100%;
  }
}
</style>