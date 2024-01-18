<template>
  <div>
    <body>
      <header>
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
       
        <div>
          <a href="/">
            <img
              class="imgAccueil"
               style="width: 50%; height: auto;"
              x="0"
              y="0"
              height="100"
              width="100"
              id="imgBottomAvatarPctest"
              alt="Vue logo"
              src="@/assets/newdepan02-1.jpg"
            />
          </a>

         

          <nav class="navbar dark-mode" role="navigation">
            <div class="navContainer">
              <ul class="navbarLinks">
                <li class="navbarLink">
                  <router-link to="/accueil"> Accueil</router-link>
                </li>
                <li class="navbarLink">
                  <router-link to="/depannages"
                    >Prestations
                  </router-link>
                </li>
                <li class="navbarLink">
                  <router-link to="/logitheque">Logithèque</router-link>
                </li>
                <li class="navbarLink">
                  <router-link to="/tarifs">Tarifs</router-link>
                </li>
                <li class="navbarLink">
                  <router-link to="/contact">Contact </router-link>
                </li>
                <li class="navbarLink">
                  <router-link to="/about">A propos</router-link>
                </li>
              </ul>
              <button class="burger">
                <span class="bar"></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <!-- <main class="main-content" role="main">
        <h1>Menu Responsive avec Burger Animé</h1>
      </main> -->
      <!-- <div id="section2">Ancre</div> -->
    </body>
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
/** fonts */
// @import url("https://fonts.googleapis.com/css2?familly=leckerli+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

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

/** Navbar */
.navbar {
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 1.2rem;
  background: var(--navbar-bg-color);
  color: var(--navbar-color);
  width: 50%;
  margin: auto;
  background-color: #1b3443;
  text-decoration-color: #ffffff;
  color: #ffffff;
  font-weight: 600;

  .navContainer, ul, li {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    
    
    margin: auto;
  }
  .navbarLinks {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .navbarLinks .navbarLink a {
    padding: 7px;
    // margin: 0 10px;
  }
  .navbarLink > a {
    color: var(--navbar-color);
    text-decoration: none;
  }
}
.burger {
  display: none;
}
/** Small devices */

/** Toggle menu */

/** Bonus - animations*/

/** Médium devices */
@media screen and (min-width: 768px) {
  .navbarLink > a::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: var(--navbar-color);
    transition: width 0.4s;
  }
  .navbarLink a:hover > a::after {
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
  .imgAccueil{
width: 100%;
}
}
</style>