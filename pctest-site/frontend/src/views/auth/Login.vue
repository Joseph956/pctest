<template>
    <form class="form-control" name="login" @submit.prevent="login">
        <div class="container">
            <!-- Logo et Titre "Se connecter" ou "S'inscrire" -->
            <div class="cardTitreInscription">
                <a href="/accueil" title="retour a la page d'accueil">
                    <div class="logoPctest">
                        <img style="height: 5rem; 
                        width: 8rem" x="0" y="0" height="100" width="100"
                            src="../../assets/icons_pctest/cartevpc1.jpg" alt="logo pctest" />
                    </div>
                </a>
                <div class="titleInscription">
                    <div>
                        <h2 class="user_login" v-if="mode == 'login'">Already have an account ?</h2>
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
                            <div class="cpteCreate">
                                <img style="height: 3rem; width: 3rem" x="0" y="0" height="100" width="100"
                                    src="../../assets/icons/BiVectorPen.svg" alt="inscription" />
                            </div>
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
                            <div class="cpteCreate">
                                <img style="height: 3rem; width: 3rem" x="0" y="0" height="100" width="100"
                                    src="../../assets/icons/BiHouseDoorFill.svg" alt="connection" />
                            </div>
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
                        <label for="user_email">Email</label>
                        <input id="user_email" type="email" v-model="email" v-on:input="checkValidity"
                            class="form-control_input" name="email" autocomplete="off" placeholder="name@mail.com"
                            required>
                        <p id="message" class="alert alert-info text-danger">
                            <small> {{ msgError }} </small>
                        </p>
                    </div>
                    <div class="contain-controlSignups" v-if="mode == 'create'">
                        <!-- firstname -->
                        <div class="form-controlSignup">
                            <label for="user_firstname">Nom</label>
                            <input id="user_firstname" type="firstname" v-model="firstname" v-on:input="checkValidity"
                                class="form-control_input" name="firstname" autocomplete="off" placeholder="Firstname"
                                required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ msgError }} </small>
                            </p>
                        </div>
                        <!-- lastname -->
                        <div class="form-controlSignups">
                            <label for="user_lastname">Prénom</label>
                            <input id="user_lastname" type="text" v-model="lastname" v-on:input="checkValidity"
                                class="form-control_input" name="lastname" autocomplete="off" placeholder="Lastname"
                                required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ msgError }} </small>
                            </p>
                        </div>
                    </div>
                    <div class="contain-controlSignups">
                        <!-- Phone -->
                        <div class="form-controlSignup" v-if="mode == 'create'">
                            <label for="user_phone">N° de telephone</label>
                            <input id="user_phone" type="text" v-model="phone" v-on:input="checkValidity"
                                class="form-control_input" name="phone" autocomplete="off" placeholder="phone" required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ msgError }} </small>
                            </p>
                        </div>
                        <div class="form-controlSignup" v-if="mode == 'create'">
                            <!-- date -->
                            <label for="user_date">Date de création de votre compte</label>
                            <input id="user_date" type="date" v-model="date" v-on:input="checkValidity"
                                class="form-control_input" name="date" autocomplete="off" placeholder="Date de creation"
                                required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ msgError }} </small>
                            </p>
                        </div>
                    </div>
                    <div class="form-groups">
                        <!-- password -->
                        <div class="form-controlSignups">
                            <label for="user_login">Mot de passe</label>
                            <input id="user_password" type="password" v-model="password" v-on:input="checkValidity"
                                class="form-control_input" name="password" autocomplete="off"
                                placeholder="8 characters min" required>
                            <p id="message" class="alert alert-info text-danger">
                                <small> {{ msgError }} </small>
                            </p>
                            <a href="#" v-if="mode == 'login'">Mot de passe oublié ?</a>
                        </div>
                        <div class="contain-controlSignups" v-if="mode == 'create'">
                            <!-- Confirm Password -->
                            <div class="form-controlSignups">
                                <label for="user_confirmPassword">Confirmer le mot de passe</label>
                                <input id="user_confirmPassword" type="password" v-model="confirmPassword"
                                    v-on:input="checkValidity" class="form-control_input" name="confirmPassword"
                                    autocomplete="off" placeholder="Confirm Password" required>
                                <p id="message" class="alert alert-info text-danger">
                                    <small> {{ msgError }} </small>
                                    <small> {{ mesgError }} </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="form-groups">
                        <button v-if="mode == 'login'" @click="login()" type="submit" class="btns btn-primary"
                            value="Se connecter">
                            <span v-if="status == 'loading'">
                                <div class="loader-container">
                                    <div class="dot d1"></div>
                                    <div class="dot d2"></div>
                                    <div class="dot d3"></div>
                                </div>
                            </span>
                            <span v-else>
                                <h3>Connexion</h3>
                            </span>
                        </button>
                        <button v-else id="validInscription" @click="createAccount()" type="submit" class="btns btn-primary"
                            value="S'inscrire">
                            <span v-if="status == 'loading'">Création en cours....</span>
                            <span v-else>
                                <h3>Create an account</h3>
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Affichage conditionnel des boutons "Se connecter" ou "Envoyer" -->
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
                    self.login();
                }
            }).catch((error) => {
                console.log(error);
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
    display: flex;
    padding: 1rem 1rem 1.5rem 1rem;
    box-shadow: 10px 10px 20px #cecdcd, -10px -10px 20px #4e51665a;
    border-radius: 1rem;
    height: 690px;
}

.cardTitreInscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto 0;
    text-align: center;
    background-color: #efebeb;
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
    border-radius: 1rem;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
    width: 100%;
    text-align: center;


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
    background-color: #efebeb;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 20px #7f7d7d, 20px 20px 40px #1010215a;
}

.contain-controlSignup {
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #efebeb;
    border-radius: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;
    height: 670px;
    margin: auto;
    text-align: justify;
    background-color: #efebeb;
    padding: 0 1rem 0 1rem;
    border-radius: 1rem;
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