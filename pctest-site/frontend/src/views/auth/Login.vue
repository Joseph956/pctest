<template>
    <form class="form-control" name="login" @submit.prevent="login">
        <div class="container">
            <!-- Logo et Titre "Se connecter" ou "S'inscrire" -->
            <div class="cardTitreInscription">
                <a href="/accueil" title="retour a la page d'accueil">
                    <div class="logoPctest">
                        <img style="height: 5rem; 
                        width: 8rem" x="0" y="0" height="100" width="100" src="../../assets/icons_pctest/cartevpc1.jpg"
                            alt="logo pctest" />
                    </div>
                </a>
                <div class="titleInscription">
                    <div>
                        <h2 class="user_login" v-if="mode == 'login'">Vous avez déjà un compte ?</h2>
                        <h2 class="user_login" v-else>Signup to our newsletter</h2>
                    </div>
                    <div class="separatorUpdateUser"></div>
                </div>
            </div>
            <!-- Formulaire Login -->
            <div class="formBtnCondition" v-if="mode == 'login'">
                <button type="submit" class="btn btn-secondary" value="S'inscrire">
                    <span class="navLinkAction" @click="switchToCreateAccount()">
                        <div class="containerCpteCreate">
                            <h3>Vous n'avez pas de compte</h3>
                            <br>
                            <div class="cpteCreate">
                                <img style="height: 3rem; width: 3rem" x="0" y="0" height="100" width="100"
                                    src="../../assets/icons/BiVectorPen.svg" alt="inscription" />
                            </div>
                            <br>
                            <div class="titleInscription">
                                <h3>S'inscrire</h3>
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
                            <h3>Vous avez déjà un compte</h3>
                            <br>
                            <div class="cpteCreate">
                                <img style="height: 3rem; width: 3rem" x="0" y="0" height="100" width="100"
                                    src="../../assets/icons/BiHouseDoorFill.svg" alt="connection" />
                            </div>
                            <br>
                            <div class="titleInscription">
                                <h3>Connexion</h3>
                            </div>
                        </div>
                    </span>
                </button>
            </div>
            <div class="contain-controlSignup">
                <div class="form-group">
                    <div class="form-controlSignups">
                        <!-- email -->
                        <label for="email">Email</label>
                        <input id="email" type="email" v-model="email" v-on:input="checkValidity"
                            class="form-control_input" name="email" autocomplete="off" placeholder="name@mail.com"
                            required>
                        <p id="message" class="alert alert-info text-danger">
                            <small> {{ mesgError }} </small>
                        </p>
                    </div>
                    <div class="contain-controlSignups" v-if="mode == 'create'">
                        <!-- firstname -->
                        <div class="form-controlSignup">
                            <label for="firstname">Nom</label>
                            <input id="firstname" type="text" v-model="firstname" v-on:input="checkValidity"
                                class="form-control_input" name="firstname" autocomplete="off" placeholder="Firstname"
                                required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ mesgError }} </small>
                            </p>
                        </div>
                        <!-- lastname -->
                        <div class="form-controlSignups">
                            <label for="lastname">Prénom</label>
                            <input id="lastname" type="text" v-model="lastname" v-on:input="checkValidity"
                                class="form-control_input" name="lastname" autocomplete="off" placeholder="Lastname"
                                required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ mesgError }} </small>
                            </p>
                        </div>
                    </div>
                    <div class="contain-controlSignups">
                        <!-- Phone -->
                        <div class="form-controlSignup" v-if="mode == 'create'">
                            <label for="phone">N° de telephone</label>
                            <input id="phone" type="number" v-model="phone" v-on:input="checkValidity"
                                class="form-control_input" name="phone" autocomplete="off" placeholder="phone" required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ mesgError }} </small>
                            </p>
                        </div>
                        <div class="form-controlSignup" v-if="mode == 'create'">
                            <!-- date -->
                            <label for="date">Date de création de votre compte</label>
                            <input id="date" type="date" v-model="date" v-on:input="checkValidity"
                                class="form-control_input" name="date" autocomplete="off" placeholder="Date de creation"
                                required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ mesgError }} </small>
                            </p>
                        </div>
                    </div>
                    <div class="form-groups">
                        <!-- password -->
                        <div class="form-controlSignups">
                            <label for="user_login">Mot de passe</label>
                            <input id="password" type="password" v-model="password" v-on:input="checkValidity"
                                class="form-control_input" name="password" autocomplete="off"
                                placeholder="8 characters min" required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ mesgError }} </small>
                                <small> {{ msgError }} </small>
                                <small> {{ message }} </small>
                            </p>
                            <a href="#" v-if="mode == 'login'">Mot de passe oublié ?</a>
                        </div>
                        <div class="contain-controlSignups" v-if="mode == 'create'">
                            <!-- Confirm Password -->
                            <div class="form-controlSignups">
                                <label for="confirmPassword">Confirmer le mot de passe</label>
                                <input id="confirmPassword" type="password" v-model="confirmPassword"
                                    v-on:input="checkValidity" class="form-control_input" name="confirmPassword"
                                    autocomplete="off" placeholder="Confirm Password" required>
                                <p id="message" class="alert alert-info text-danger">
                                    <small> {{ msgError }} </small>
                                    <small> {{ mesgError }} </small>
                                    <small> {{ message }} </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Affichage conditionnel des boutons "Se connecter" ou "Envoyer" -->
                    <div class="form-groups">
                        <button v-if="mode == 'login'" id="validLogin" @click="login()" :disabled="!validatedFields"
                            type="submit" class="btns btn-primary" value="Se connecter">
                            <div v-if="status == 'loading'">
                                <span>
                                    <div class="spinner"></div>
                                </span>
                            </div>
                            <div v-else>
                                <span>
                                    <h3>Connexion</h3>
                                </span>
                            </div>
                        </button>
                        <button v-else id="validInscription" @click="createAccount()" :disabled="!validatedFields"
                            type="submit" class="btns btn-primary" value="S'inscrire">
                            <div>
                                <div v-if="status == 'loading'">
                                    <span>
                                        <div class="spinner"></div>
                                    </span>
                                </div>
                                <div v-else>
                                    <span>
                                        <h3>Créer votre compte</h3>
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { onMounted } from "vue";
import { mapState } from "vuex";
export default {
    name: "Login",
    components: {

    },
    props: {
        msg: String
    },

    data() {
        return {
            mesgError: "",
            msgError: "",
            message: "",
            isAdmin: false,
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

    beforeMount() {
        if (this.$store.state.users.isadmin == "admin") {
            this.isAdmin = true;
        }
        this.getUsers;
    },
    mounted: function () {
        if (this.$store.state.user.userId !== -1) {
            this.$router.push("/auth/login");
        }
    },
    computed: {
        // Validation des champs
        validatedFields() {
            if (this.mode == "login") {
                return this.email && this.password
            } else if (this.mode == "create") {
                return this.firstname && this.lastname && this.email && this.password && this.confirmPassword
            }
        },
        firstField() {
            if (this.mode == "login") {
                return document.getElementById("email")
            } else if (this.mode == "create") {
                return document.getElementById("firstname")
            }
        },
        ...mapState(["status", "users", "user", "roleId"]),
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
            }).then(function (response) {
                if (!response) {
                    this.mesgError = error.response.data.message;
                } else {
                    resetForm();
                    self.login();
                }
            }).catch((error) => {
                console.log(error);
                this.mesgError = error.response.data.message;
            });
        },
        login: function () {
            const self = this;           
            self.$store.dispatch("login", {
                email: this.email,
                password: this.password,
            }).then((response) => {
                if (!response) {
                    this.mesgError = error.response.data.message;
                } else if (this.isAdmin == true || this.$store.state.users.role == "admin") {
                    self.$router.push("/admin/dashboard");
                } else  {
                    self.$router.push("/userpublic/dashboard");
                }
            }).catch(function (error) {
                console.log(error);
                this.mesgError = error.response.data.message;
            });
        },
        checkValidity() {
            if (this.mode == "login") {
                if (this.email && this.password) {
                    return true
                } else {
                    return false
                }
            } else if (this.mode == "create") {
                if (this.firstname && this.lastname && this.email && this.password && this.confirmPassword) {
                    return true
                } else {
                    return false
                }
            }
        },
        // Focus de la souris sur le 1er champ text au chargement de la page
        onMounted: function () {
            firstField.value.focus();
        },
        resetForm: function () {
            email.value = "",
            firstName.value = "",
            lastName.value = "",
            phone.value = "",
            message.value = "",
                password.value = "",
                confirmPassword.value = ""
            // Focus sur le 1er input après submit
            firstField.value.focus();
        },
    },
};
</script>

<style lang="scss" scoped>
h2 {
    margin: 0;
}

.container {
    display: flex;
    padding: 1rem 1rem 1.5rem 1rem;
    box-shadow: 10px 10px 20px #cecdcd, -10px -10px 20px #4e51665a;
    border-radius: 1rem;
    height: 780px;
}

.cardTitreInscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto 0;
    text-align: center;
    // background-color: #efebeb;
    padding: 1rem;
    border-radius: 1rem;
}

.logoPctest {
    display: flex;
    justify-content: center;
    align-items: center;
}

.user_login {
    margin: auto;
    text-align: start;
    padding: 1rem 0 0.5rem 0;
    border-radius: 1rem;
    font-size: 1.5rem;
}

.titleInscription {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.separatorUpdateUser {
    width: 6rem;
    height: 4px;
    background-color: #4e5166;
    margin: 0 0 1.5rem 0;
}

.formBtnCondition {
    display: flex;
}

.btn {
    margin: 1rem;
    border-radius: 1rem;
    box-shadow: 5px 5px 10px #7f7d7d, -20px -5px 20px #1010215a;
    text-align: center;


}

.btns {
    padding: 20px;
    margin: 1rem 0;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
    width: 100%;
    text-align: center;


}

.spinner {
    width: 56px;
    height: 56px;
    display: grid;
    margin: auto;
    border: 4.5px solid #0000;
    border-radius: 50%;
    border-color: #dbdcef #0000;
    animation: spinner-e04l1k 1s infinite linear;
}

.spinner::before,
.spinner::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
}

.spinner::before {
    border-color: #474bff #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
}

.spinner::after {
    margin: 8.9px;
}

@keyframes spinner-e04l1k {
    100% {
        transform: rotate(1turn);
    }
}

.containerCpteCreate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    text-align: center;
    padding: 1rem;
    border-radius: 1rem;
}

.cpteCreate {
    margin: 0 1rem 0 1rem;

}

.form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    // background-color: #efebeb;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.contain-controlSignup {
    display: flex;
    width: 100%;
    height: 100px;
    // background-color: #efebeb;
    border-radius: 1rem;
}

.form-group {
    background-image: url('./../../assets/icons_pctest/llogoPctest.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;
    height: 750px;
    margin: auto;
    text-align: justify;
    // background-color: #efebeb;
    padding: 0 1rem 0 1rem;
    border-radius: 20rem;
}

.contain-controlSignup {
    display: flex;
    justify-content: space-evenly;
}

.form-controlSignup {
    border-radius: 1rem;
    border: none;
}

.form-controlSignups {
    width: 100%;
}

label {
    margin-bottom: 0.5rem;
    font-size: 0.8em;
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
    padding: 0;
    text-align: justify;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 0.5rem;
    border: 1px solid #ced4da;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.alert {
    margin: 0px;
    padding: 0px;
    border-color: #a5adaf;
    background-color: #a5adaf;

    .alert-info {
        background-color: #f9f9f9;
        border-color: #ffffff;
        margin: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
    }

}
</style>