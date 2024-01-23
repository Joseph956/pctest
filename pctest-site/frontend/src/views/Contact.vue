<template>
  <div>
    <Navbar />
    <div class="contact">
      <div class="mailLogo">
        <img
          style="height: 5rem; width: 5rem"
          x="0"
          y="0"
          height="100"
          width="100"
          src="../assets/all-mail.webp"
          alt="logo pctest"
        />
      </div>
      <!-- <h1>Contacts</h1>
      <br /> -->
      <div class="formContact">
        <div class="formControlMess">
          <p id="message" class="alert alert-info text-danger">
            <small></small>
          </p>
          <div class="inputData">
            <input
              id="lastname"
              type="text"
              placeholder="Nom"
              v-model="lastname"
              v-on:input="checkValidity"
              class="form-control_input"
              name="lastname"
              autocomplete="off"
              required
            />
          </div>
        </div>
      </div>
      <div class="formContact">
        <div class="formControlMess">
          <p id="message" class="alert alert-info text-danger">
            <small></small>
          </p>
          <div class="inputData">
            <input
              id="name"
              type="text"
              placeholder="Prénom"
              v-model="name"
              v-on:input="checkValidity"
              class="form-control_input"
              name="name"
              autocomplete="off"
              required
            />
          </div>
        </div>
      </div>
      <div class="formContact">
        <div class="formControlMess">
          <p id="message" class="alert alert-info text-danger">
            <small></small>
          </p>
          <div class="inputData">
            <input
              id="email"
              type="text"
              placeholder="Email"
              v-model="email"
              v-on:input="checkValidity"
              class="form-control_input"
              name="email"
              autocomplete="off"
              required
            />
          </div>
        </div>
      </div>
      <div class="formContact">
        <div class="formControlMess">
          <p id="message" class="alert alert-info text-danger">
            <small></small>
          </p>
          <div class="inputData">
            <input
              id="telephone"
              type="text"
              placeholder="Telephone"
              v-model="telephone"
              v-on:input="checkValidity"
              class="form-control_input"
              name="telephone"
              autocomplete="off"
              required
            />
          </div>
        </div>
      </div>
      <div class="formContact">
        <div class="formControlMess">
          <p id="message" class="alert alert-info text-danger">
            <small></small>
          </p>
          <div class="inputData">
            <input
              id="demande"
              type="text"
              placeholder="Demande"
              v-model="demande"
              v-on:input="checkValidity"
              class="form-control_input"
              name="demande"
              autocomplete="off"
              required
            />
          </div>
        </div>
      </div>
      <div class="formContact">
        <div class="formControlMess">
          <p id="message" class="alert alert-info text-danger">
            <small></small>
          </p>
          <div class="inputData">
            <input
              id="message"
              type="text"
              placeholder="Message"
              v-model="message"
              v-on:input="checkValidity"
              class="form-control_input"
              name="message"
              autocomplete="off"
              required
            />
          </div>
        </div>
      </div>

      <br />
    </div>
    <Footteur />
  </div>
</template>

<script>
import Navbar from "@/views/Navbar.vue";
import Footteur from "@/views/Footteur.vue";
export default {
  name: "Contacts",

  components: {
    Navbar,
    Footteur,
  },
};
</script>

<style lang="scss" scoped>
.mailLogo {
  display: flex;
justify-content: center;
  background-color: #ffffff;
  margin: auto;
  padding: 1rem 0 0 0;
  width: 50%;
}
.contact {
  width: 50%;
  margin: auto;
  text-align: justify;
  background: #ffffff;
}
.formContact {
  border-radius: 1rem;
  margin: 1rem;
}
.form-control_input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #968f8f;
}
</style>