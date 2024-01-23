<template>
  <div>
    <Navbar />
    <div class="containerLogitheq">
      <div class="containLog">
        <div class="logiGrid">
          <div class="wp-block-media-text alignwide is-image-fill">
            <figure
              class="wp-block-media-text__media"
              style="
                background-image: url(../assets/7zip.png);
                background-position: 50% 50%;
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
                    ><span style="text-decoration: underline"
                      >7z465</span
                    ></strong
                  >
                </a>
                : 7-Zip logiciel gratuit d'archivage de fichiers doté d'un taux
                de compression très élevé.
              </p>
              <!-- <br /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="containLog">
        <div class="logiGrid">
          <div class="wp-block-media-text alignwide is-image-fill">
            <figure
              class="wp-block-media-text__media"
              style="
                background-image: url(../assets/vlc-cone-2.png);
                background-position: 50% 50%;
              "
            >
              <img
                x="0"
                y="0"
                height="256"
                width="256"
                src="../assets/vlc-cone-2.png"
                alt="logo pctest"
                sizes="( max-width: 256px ) 100vw, 256px"
              />
            </figure>
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

                : Un lecteur multimédia gratuit et open source pour Windows 32
                bits et 64 bits.
              </p>
              <!-- <br /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="containLog">
        <div class="logiGrid">
          <div class="wp-block-media-text alignwide is-image-fill">
            <figure
              class="wp-block-media-text__media"
              style="
                background-image: url(../assets/folder_acrobat.png);
                background-position: 50% 50%;
              "
            >
              <img
                x="0"
                y="0"
                height="256"
                width="256"
                src="../assets/folder_acrobat.png"
                alt="logo pctest"
                sizes="( max-width: 256px ) 100vw, 256px"
              />
            </figure>
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

                :Visualisez, imprimez, annotez vos documents PDF.
              </p>
              <!-- <br /> -->
            </div>
          </div>
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
  display: grid;
  width: 50%;
  margin: auto;
  background-color: #ffffff;
}
.containLog {
  display: flex;
  flex-direction: column;
  .logiGrid {
    .wp-block-media-text {
      display: grid;

      grid-template-rows: 1fr;
      align-items: center;
      text-align: justify;
      margin: 1rem 2rem;
      padding: 1rem;
      .wp-block-media-text__media {
        background-size: cover;
        background-position: center;
      }
      .wp-block-media-text_content {
        grid-column: 3;
        padding: 0.5rem;
        border-radius: 0.8rem;
        background-color: #ffffff;
        box-shadow: 1px 3px 0px #575656, 0px 0px 0px #f5f8fb5a;
      }
    }
  }
  /*********************************
  ********** Media queries *********
  *********************************/
  @media screen and (max-width: 1024px) {
    .wp-block-media-text {
      display: flex;
      flex-direction: column;
      // .wp-block-media-text__media {
      //   img {
      //     object-fit: cover;
      //   }
      // }
    }
  }
}
</style>