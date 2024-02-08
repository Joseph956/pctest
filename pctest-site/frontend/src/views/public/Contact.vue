<template>
  <div>
    <Navbar />
    <div class="contact">
      <div action="http://localhost:3000/contact" method="post" class="contact-form commentsblock wp-block-contact-form-7"
        aria-label="Contact" novalidate>
        <div class="mailLogo">
          <img style="height: 5rem; width: 5rem" x="0" y="0" height="100" width="100" src="../../assets/all-mail.webp"
            alt="logo pctest" />
          <p class="has-text-align-center">
            <strong>
              <span style="text-decoration: underline;">angilerijo@gmail.com</span></strong>
          </p>
        </div>
        <br>
        <!-- Formulaire -->
        <!-- lastname -->
        <div class="formContact">
          <div class="formControlMess">
            <div style class="grunion-field-name-wrap grunion-field-wrap">
              <label for="g419-lastname" class="grunion-field-label lastname">
                Nom
                <span class="grunion-label-required" aria-hidden="true">(Obligatoire)</span>
              </label>
            </div>
            <div class="inputData">
              <input id="lastname" type="text" placeholder="Nom" v-model="lastname" v-on:input="checkValidity"
                class="form-control_input" name="lastname" autocomplete="off" required />
            </div>
            <p id="message" class="alert alert-info text-danger">
              <small> {{ msgError }} </small>
            </p>
          </div>
        </div>
        <!-- firstname -->
        <div class="formContact">
          <div class="formControlMess">
            <div style class="grunion-field-name-wrap grunion-field-wrap">
              <label for="g419-firstname" class="grunion-field-label firstname">
                Prénom
                <span class="grunion-label-required" aria-hidden="true">(Obligatoire)</span>
              </label>
            </div>
            <div class="inputData">
              <input id="firstname" type="text" placeholder="Prénom" v-model="firstname" v-on:input="checkValidity"
                class="form-control_input" name="firstname" autocomplete="off" required />
            </div>
            <p id="message" class="alert alert-info text-danger">
              <small> {{ msgError }} </small>
            </p>
          </div>
        </div>
        <!-- Date d'envoi -->
        <div class="formContact">
          <div class="formControlMess">
            <div style class="grunion-field-name-wrap grunion-field-wrap">
              <label for="g419-date" class="grunion-field-label date">
                Date d'envoi
                <span class="grunion-label-required" aria-hidden="true">(Obligatoire)</span>
              </label>
            </div>
            <div class="inputData">
              <input id="date" type="date" placeholder="Date d'envoi" v-model="date" v-on:input="checkValidity"
                class="form-control_input" name="date" autocomplete="off" required />
            </div>
            <p id="message" class="alert alert-info text-danger">
              <small> {{ msgError }} </small>
            </p>
          </div>
        </div>
        <!-- email -->
        <div class="formContact">
          <div class="formControlMess">
            <div style class="grunion-field-name-wrap grunion-field-wrap">
              <label for="g419-email" class="grunion-field-label email">
                Email
                <span class="grunion-label-required" aria-hidden="true">(Obligatoire)</span>
              </label>
            </div>
            <div class="inputData">
              <input id="email" type="text" placeholder="Email" v-model="email" v-on:input="checkValidity"
                class="form-control_input" name="email" autocomplete="off" required />
            </div>
            <p id="message" class="alert alert-info text-danger">
              <small> {{ msgError }} </small>
            </p>
          </div>
        </div>
        <!-- telephone -->
        <div class="formContact">
          <div class="formControlMess">
            <div style class="grunion-field-name-wrap grunion-field-wrap">
              <label for="g419-telephone" class="grunion-field-label telephone">
                Téléphone
                <span class="grunion-label-required" aria-hidden="true">(Obligatoire)</span>
              </label>
            </div>
            <div class="inputData">
              <input id="telephone" type="text" placeholder="Telephone" v-model="phone" v-on:input="checkValidity"
                class="form-control_input" name="telephone" autocomplete="off" required />
            </div>
            <p id="message" class="alert alert-info text-danger">
              <small> {{ msgError }} </small>
            </p>
          </div>
        </div>
        <!-- demande -->
        <div class="formContact">
          <div class="formControlMess">
            <div style class="grunion-field-name-wrap grunion-field-wrap">
              <label for="g419-demande" class="grunion-field-label demande">
                Demande
                <span class="grunion-label-required" aria-hidden="true">(Obligatoire)</span>
              </label>
            </div>
            <div class="contact-form_select-wrapper">
              <select name="g419-demande" id="g419-demande" placeholder="Demande" v-model="demande"
                v-on:input="checkValidity" class="select grunion-field" required aria-required="true">
                <option value="RDV-dépannages à domicile">RDV dépannages à domicile</option>
                <option value="Renseignements / Conseilles">Renseignements / Conseilles</option>
                <option value="Initiation / Formation">Initiation / Formation</option>
                <option value="Devis descriptif">Devis descriptif</option>
                <option value="autres">Autres</option>
              </select>

            </div>
            <p id="message" class="alert alert-info text-danger">
              <small> {{ msgError }} </small>
            </p>
          </div>
        </div>
        <!-- message -->
        <div class="formContact">
          <div class="formControlMess">
            <div style class="grunion-field-name-wrap grunion-field-wrap">
              <label for="g419-message" class="grunion-field-label message">
                Message
                <span class="grunion-label-required" aria-hidden="true"> (Obligatoire)</span>
              </label>
            </div>
            <div class="inputData">
              <!-- <input id="message" type="text" placeholder="Message" v-model="message" v-on:input="checkValidity"
                class="form-control_input" name="message" autocomplete="off" required /> -->
              <textarea name="message" id="messUser" cols="30" rows="10" width="100%" v-model="message"></textarea>
            </div>
            <p id="message" class="alert alert-info text-danger">
              <small> {{ msgError }} </small>
            </p>
          </div>
        </div>
        <!-- envoyer -->
        <div class="formContact">
          <button id="btnSubmit" type="submit" class="btn btn-primary" @click="createUser">
            <span v-if="status == 'loading'">Création en cours....</span>
            <span v-else>Créer mon compte</span>
            <!-- <router-link :to="{ name: 'Contact' }">Envoyer</router-link> -->
          </button>
        </div>
        <br />
      </div>

    </div>
    <Footteur />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "@/views/public/Navbar.vue";
import Footteur from "@/views/public/Footteur.vue";
import axios from "axios";
export default {
  name: "Contacts",

  components: {
    Navbar,
    Footteur,
  },
  data() {
    return {
      msgError: "",
      firstname: "",
      lastname: "",
      date: "",
      email: "",
      phone: "",
      message: "",
      demande: "",
      instance: axios.create({
        baseURL: "http://localhost:3000/api/auth/register",
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }),
      status: "idle",
    };
  },
  computed: {
    ...mapState(["status"]),
  },
  methods: {
    checkValidity() {
      // Vérifier la validité du nom d'utilisateur
      const regex = /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/;
      this.isValidUsername = regex.test(this.firstname + this.lastname);
    },
    createUser: function () {
      const self = this;
      this.$store.dispatch("createUser", {
        firstname: this.firstname,
        lastname: this.lastname,
        date: this.date,
        email: this.email,
        phone: this.phone,
        message: this.message,
        demande: this.demande,
      });
      if (
        self.firstname &&
        self.lastname &&
        self.date &&
        self.email &&
        self.phone &&
        self.message &&
        self.demande
      ) {
        this.$router.push({ name: "Contact" });
        alert("Vos informations ont bien été enregistrées.");
      }
      else {
        alert("Veuillez renseigner tous les champs");
      }
    },
    createMessage: function () {
      if (
        this.message &&
        this.demande
      ) {
        this.$router.push({ name: "Contact" });
        alert("Votre message a bien été envoyé");
      }
      else {
        alert("Veuillez renseigner tous les champs");
      }
    },
    createDemande: function () {
      if (
        this.firstname &&
        this.lastname &&
        this.date &&
        this.email &&
        this.telephone &&
        this.message &&
        this.demande
      ) {
        this.$router.push({ name: "Contact" });
      }
      else {
        alert("Veuillez renseigner tous les champs");

      }
    }
  }
};
</script>
<style lang="scss" scoped>
.mailLogo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: auto;
  padding: 1rem 0 0 0;
  width: 50%;
}

.contact {
  width: 55%;
  margin: auto;
  text-align: justify;
  background: #ffffff;
}

.formContact {
  border-radius: 1rem;
  margin: 1rem;
}

.inputData {
  display: flex;
  border: 1px solid #968f8f;
}

.formContact .contact-form_select-wrapper {
  display: flexbox;
  border: 1px solid #968f8f;
  padding: 0.5rem;
  width: 100%;
}

select {
  width: 100%;
  font-size: 1rem;
}

#messUser {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fdfdfe;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0.5rem 0 0.5rem 0;
}

.form-control_input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fdfdfe;
}
</style>