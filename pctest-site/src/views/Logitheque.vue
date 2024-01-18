<template>
  <div>
    <Navbar />

    <div class="containerLogitheq">
      <div class="logiGrid">
        <div
          class="wp-block-media-text alignwide is-image-fill"
          style="grid-template-columns: 15% auto"
        >
          <figure
            class="wp-block-media-text__media"
            style="
              background-image: url(http://prdownloads.sourceforge.net/sourceforge/sevenzip/7z465.exe);
              background-position: 52% 79%;
            "
          >
            <img
              x="0"
              y="0"
              height="256"
              width="256"
              src="../assets/7zip.png"
              alt="logo pctest"
              sizes="( max-width: 256px ) 100vw, 256px"
            />
          </figure>
          <div class="wp-block-media-text__content">
            <p
              class="has-text-color has-background has-text-align-justify has-normal-font-size has-black-color has-white-background-color"
            >
              <a
                rel="noreferrer noopener"
                aria-label="7z465  (ouverture dans un nouvel onglet)"
                href="http://prdownloads.sourceforge.net/sourceforge/sevenzip/7z465.exe"
                target="_blank"
              >
                <strong
                  ><span style="text-decoration: underline">7z465</span></strong
                >
              </a>
              : 7-Zip logiciel gratuit d'archivage de fichiers doté d'un taux de
              compression très élevé.
            </p>
          </div>
        </div>
      </div>
      <div class="logitheq">
        <div class="logitheqLogo">
          <img
            style="height: 5rem; width: 5rem"
            x="0"
            y="0"
            height="100"
            width="100"
            src="../assets/7zip.png"
            alt="logo pctest"
          />
        </div>
        <div class="wp-block-media-text_content">
          <p
            class="has-text-color has-background has-text-align-justify has-normal-font-size has-black-color has-white-background-color"
          >
            <br />
            <a
              href="http://prdownloads.sourceforge.net/sourceforge/sevenzip/7z465.exe"
              target="_blank"
            >
              <strong
                ><span style="text-decoration: underline">7z465</span></strong
              >
            </a>
            : 7-Zip logiciel gratuit d'archivage de fichiers doté d'un taux de
            compression très élevé.
          </p>
        </div>
        <br />
      </div>
      <div class="logitheq">
        <div class="logitheqLogo">
          <img
            style="height: 5rem; width: 5rem"
            x="0"
            y="0"
            height="100"
            width="100"
            src="../assets/vlc-cone-2.png"
            alt="logo pctest"
          />
        </div>
        <div class="wp-block-media-text_content">
          <p
            class="has-text-color has-background has-text-align-justify has-normal-font-size has-black-color has-white-background-color"
          >
            <br />
            <a
              href="http://get.videolan.org/vlc/1.0.5/win32/vlc-1.0.5-win32.exe"
              target="_blank"
            >
              <strong
                ><span style="text-decoration: underline"
                  >VLC 1.0.5 pour Windows</span
                ></strong
              >
            </a>
            : VLC 1.0.5 pour Windows : Un lecteur multimédia gratuit et open
            source.
          </p>
        </div>
        <br />
      </div>
      <div class="logitheq">
        <div class="logitheqLogo">
          <img
            style="height: 5rem; width: 5rem"
            x="0"
            y="0"
            height="100"
            width="100"
            src="../assets/folder_acrobat.png"
            alt="logo pctest"
          />
        </div>
        <div class="wp-block-media-text_content">
          <p
            class="has-text-color has-background has-text-align-justify has-normal-font-size has-black-color has-white-background-color"
          >
            <br />
            <a href="https://get.adobe.com/fr/reader/" target="_blank">
              <strong
                ><span style="text-decoration: underline"
                  >Adobe Acrobat Reader DC_fr_FR</span
                ></strong
              >
            </a>
            : Adobe Acrobat Reader DC_fr_FR : Visualisez, imprimez, annotez vos
            documents PDF.
          </p>
        </div>
      </div>
    </div>

    <Footteur />
  </div>
</template>

<script>
import Navbar from "@/views/Navbar.vue";
import Footteur from "@/views/Footteur.vue";
export default {
  name: "Logitheque",

  components: {
    Navbar,
    Footteur,
  },
};
</script>

<style lang="scss" scoped>
.containerLogitheq {
  width: 50%;
  margin: auto;
  background-color: #ffffff;
}
.logiGrid {
  display: grid;
  grid-template-columns: 15% auto;
}
.logitheq {
  display: flex;
  padding: 1rem;
  background-color: #ffffff;
}
.logitheqLogo {
  align-items: center;
  justify-content: center;
  margin: 0 1rem 0 0;
  background-color: #ffffff;
}
</style>