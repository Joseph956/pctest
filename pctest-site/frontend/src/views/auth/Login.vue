<template>
    <form class="form-control" name="login" @submit.prevent="login">
        <div class="container">
            <!-- Logo et Titre "Se connecter" ou "S'inscrire" -->
            <div class="cardTitreInscription">
                <div class="logoPctest">
                    <img style="height: 5rem; 
                    width: 5rem" x="0" y="0" height="100" width="100" src="../../assets/logoPctest.png" />
                </div>
                <div class="titleInscription">
                    <h1 class="user_login" v-if="mode == 'login'">Connexion</h1>
                    <h1 class="user_login" v-else>Créer mon compte</h1>
                </div>
            </div>
            <!-- <h1 class="user_login">Mot de passe oublie ?</h1> -->
            <!-- Formulaire Login -->
            <div class="formBtnCondition" v-if="mode == 'login'">
                <button type="submit" class="btn btn-secondary" value="S'inscrire">
                    <span class="navLinkAction" @click="switchToCreateAccount()">
                        <div class="containerCpteCreate">
                            <h2>Vous n'avez pas de compte</h2>
                            <div class="cpteCreate">
                                <img style="height: 3rem; width: 3rem" x="0" y="0" height="100" width="100"
                                    src="../../assets/icons/BiVectorPen.svg" alt="inscription" />
                            </div>
                            <div class="titleInscription">
                                <h2>S'inscrire</h2>
                            </div>
                        </div>
                    </span>
                </button>
                <!-- <p id="message" class="alert alert-info text-danger">
                    <small> {{ msgError }} </small>
                </p> -->
            </div>
            <!-- Formulaire Inscription -->
            <div class="formBtnCondition" v-else>
                <button id="createAccount" type="submit" class="btn btn-secondary" value="S'inscrire">
                    <span class="navLinkAction" @click="switchToLogin()">
                        <div class="containerCpteCreate">
                            <h2>Vous avez deja un compte</h2>
                            <div class="cpteCreate">
                                <img style="height: 3rem; width: 3rem" x="0" y="0" height="100" width="100"
                                    src="../../assets/icons/BiHouseDoorFill.svg" alt="connection" />
                            </div>
                            <div class="titleInscription">
                                <h2>Se connecter </h2>
                            </div>
                        </div>
                    </span>
                </button>
            </div>
            <div class="form-group" v-if="mode == 'login'">
                <!-- email -->
                <div class="form-controlSignup">
                    <label for="user_email">Email</label>
                    <input id="user_email" type="email" v-model="email" v-on:input="checkValidity"
                        class="form-control_input" name="email" autocomplete="off" placeholder="Votre email" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                    </p>
                </div>
                <!-- password -->
                <div class="form-controlSignup">
                    <label for="user_login">Mot de passe</label>
                    <input id="user_password" type="password" v-model="password" v-on:input="checkValidity"
                        class="form-control_input" name="password" autocomplete="off" placeholder="Mot de passe" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                    </p>
                    <a href="#">Mot de passe oublie ?</a>
                </div>
            </div>
            <div class="form-group" v-else>
                <!-- firstname -->
                <div class="form-controlSignup">
                    <label for="user_firstname">Nom</label>
                    <input id="user_firstname" type="text" v-model="firstname" v-on:input="checkValidity"
                        class="form-control_input" name="firstname" autocomplete="off" placeholder="Nom" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                    </p>
                </div>
                <!-- lastname -->
                <div class="form-controlSignup">
                    <label for="user_lastname">Prénom</label>
                    <input id="user_lastname" type="text" v-model="lastname" v-on:input="checkValidity"
                        class="form-control_input" name="lastname" autocomplete="off" placeholder="Prénom" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                    </p>
                </div>
                <!-- Email -->
                <div class="form-controlSignup">
                    <label for="user_email">Email</label>
                    <input id="user_email" type="email" v-model="email" v-on:input="checkValidity"
                        class="form-control_input" name="email" autocomplete="off" placeholder="Email" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                    </p>
                </div>
                <!-- date -->
                <div class="form-controlSignup">
                    <label for="user_date">Date de création de votre compte</label>
                    <input id="user_date" type="date" v-model="date" v-on:input="checkValidity"
                        class="form-control_input" name="date" autocomplete="off" placeholder="Date de creation" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                    </p>
                </div>
                <!-- Phone -->
                <div class="form-controlSignup">
                    <label for="user_phone">N° de telephone</label>
                    <input id="user_phone" type="text" v-model="phone" v-on:input="checkValidity"
                        class="form-control_input" name="phone" autocomplete="off" placeholder="N° de telephone" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                    </p>
                </div>
                <!-- Password -->
                <div class="form-controlSignup">
                    <label for="user_password">Mot de passe</label>
                    <input id="user_password" type="password" v-model="password" v-on:input="checkValidity"
                        class="form-control_input" name="password" autocomplete="off" placeholder="Mot de passe" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                        <small> {{ mesgError }} </small>
                    </p>
                </div>
                <!-- Confirm Password -->
                <div class="form-controlSignup">
                    <label for="user_confirmPassword">Confirmer le mot de passe</label>
                    <input id="user_confirmPassword" type="password" v-model="confirmPassword"
                        v-on:input="checkValidity" class="form-control_input" name="confirmPassword" autocomplete="off"
                        placeholder="Confirmer le mot de passe" required>
                    <p id="message" class="alert alert-info text-danger">
                        <small> {{ msgError }} </small>
                        <small> {{ mesgError }} </small>
                    </p>

                </div>
            </div>


            <!-- Affichage conditionnel des boutons "Se connecter" ou "Envoyer" -->
            <div class="form-group">
                <button v-if="mode == 'login'" @click="login()" type="submit" class="btns btn-primary" value="Se connecter">
                    <span v-if="status == 'loading'">
                        <div class="loader-container">
                            <div class="dot d1"></div>
                            <div class="dot d2"></div>
                            <div class="dot d3"></div>
                        </div>
                    </span>
                    <span v-else>
                        <h2>Se connecter</h2>
                    </span>
                </button>
                <button v-else id="validInscription" @click="createAccount()" type="submit" class="btns btn-primary"
                    value="S'inscrire">
                    <span v-if="status == 'loading'">Création en cours....</span>
                    <span v-else>
                        <h2>Envoyer</h2>
                    </span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Login",
    data() {
        return {
            mesgError: "",
            msgError: "",
            mode: "login",
            firstname: "",
            lastname: "",
            email: "",
            date: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    },
    mounted: function () {
        if (this.$store.state.user.userId !== -1) {
            this.$router.push("/auth/login");
        }
    },
    computed: {
        ...mapState(["status"]),
    },

    methods: {
        switchToLogin: function () {
            this.mode = "login";
        },
        switchToCreateAccount: function () {
            this.mode = "create";
        },
        createAccount: function () {
            const self = this;
            this.$store.dispatch("createAccount", {
                firstname: this.firstname,
                lastname: this.lastname,
                phone: this.phone,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            }).then((response) => {
                if (!response) {
                    this.mesgError = error.response.data.message;
                } else {
                    self.$router.push({ name: "login" });
                }
            }).catch(function (error) {
                this.mesgError = error.response.data.message;
            });
        },
        login: function () {
            const self = this;
            this.$store.dispatch("login", {
                email: this.email,
                password: this.password,
            }).then((response) => {
                if (!response) {
                    alert("Email ou mot de passe incorrect");
                } else {
                    self.$router.push("/admin/dashboard");
                    console.log(response);
                }
            }).catch(function (error) {
                console.log(error);
                this.mesgError = error.response.data.message;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 0;
}
.container {
    box-shadow: 0px 0px 30px #cecdcd, -1px -1px 70px #4e51665a;
    border-radius: 1rem;
}

.cardTitreInscription {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    text-align: center;
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 1rem;
    /* box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a; */
}

.logoPctest {
    display: flex;
    justify-content: center;
    align-items: center;
    // box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.user_login {
    /* width: 50%; */
    margin: auto;
    text-align: justify;
    // background: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    // box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.titleInscription {
    display: flex;
    justify-content: center;
    align-items: center;
}

.formBtnCondition {
    display: flex;
    width: 100%;
    /* margin: 0 0 3rem 0; */
    /* justify-content: center; */
    /* align-items: center; */
}

.btn {
    margin: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
    /* box-shadow: 0px 0px 30px #cecdcd, -1px -1px 70px #4e51665a; */
    /* width: 100%; */
    text-align: center;


}

.btns {
    /* margin: 1rem; */
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
    width: 100%;
    text-align: center;


}

.containerCpteCreate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    text-align: center;
    padding: 1rem;
    border-radius: 1rem;
    /* box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a; */
}

.cpteCreate {
    margin: 0 1rem 0 1rem;

}

.form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    margin: auto;
    text-align: justify;
    /* background: #ffffff; */
    background-color: #f9f9f9;
    padding: 4rem;
    margin: 5% auto 0 auto;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.form-group {
    margin-bottom: 1rem;
    width: 100%;
    margin: auto;
    text-align: justify;
    /* background: #ffffff; */
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 1rem;
}

.form-controlSignup {
    border-radius: 1rem;
    /* padding: 10px 0 20px 0; */
    border: none;
}

label {
    margin-bottom: 0.5rem;
}

img {
    width: 100%;
    height: 20px;
    cursor: pointer;
    vertical-align: middle;
}

input {
    position: relative;
    border: none;
    border-radius: 5px;
    outline: none;
    background: none;
    font-weight: 500;
    display: block;
    font-family: inherit;
    font-size: 14px;
    padding: 10px;
    width: 100%;
    flex: 1;
    min-width: 100px;
    color: black;
    border: 5px solid transparent;
    cursor: pointer;
    transition: 0.5s;

}

input:focus {
    border: 5px solid #1b3443;
    transition: 0.5s;
    outline: none;
}

.form-control_input {
    margin-bottom: 0.5rem;
    width: 100%;
    /* margin: auto; */
    text-align: justify;
    /* background: #ffffff; */
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ced4da;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.alert-info {
    color: #004085;
    background-color: #f9f9f9;
    /* background-color: #ffffff; */
    border-color: #ffffff;
}

.alert {
    padding: none;
}
</style>