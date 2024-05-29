<template>
    <div class="users-header">
        <h2>Portail administrateur !</h2>
        <!-- <form action="https://formsubmit.co/fe89bc80562785bd975714d11ed0ccf4" method="post"> -->
        <form class="form-control" name="login" @submit.prevent="login">
            <div class="contain-controlSignup">
                <div class="form-group">
                    <!-- email -->
                    <div class="form-controlSignups">
                        <label for="email">Email</label>
                        <input id="email" type="email" v-model="email" v-on:input="checkValidity"
                            class="form-control_input" name="email" autocomplete="off" placeholder="name@mail.com"
                            required>
                        <p id="message" class="alert alert-info text-danger">
                            <small> {{ mesgError }} </small>
                        </p>
                    </div>
                    <!-- password -->
                    <div class="form-controlSignups">
                        <label for="user_login">Mot de passe</label>
                        <input id="password" type="password" v-model="password" v-on:input="checkValidity"
                            class="form-control_input" name="password" autocomplete="off" placeholder="8 characters min"
                            required>
                        <p id="message" class="alert alert-info text-danger">
                            <small> {{ mesgError }} </small>
                            <small> {{ msgError }} </small>
                            <small> {{ message }} </small>
                        </p>
                        <a href="#">Mot de passe oublié ?</a>
                    </div>
                    <!-- Submit -->
                    <!-- :disabled="!validatedFields" -->
                    <button id="validLogin" @click="login()" type="submit" class="btns btn-primary"
                        value="Se connecter">
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
                </div>
            </div>
        </form>
    </div>
</template>


<script>
import { computed } from 'vue';
import { mapState } from 'vuex';
export default {
    name: "Dashboard",
    data() {
        return {
            email: "",
            password: "",
            mesgError: "",
        };  
    },
    beforeMount() {
        if (this.$store.state.users.isadmin == "admin") {
            this.isAdmin = true;
        }
        this.getUsers;
    },
    mounted: function () {
        if (this.$store.state.user.userId !== -1) {
            this.$router.push("/admin/dashboard");
        }
    },
    computed: {
        // validatedFields() {
        //     if (this.mode == "login") {
        //         return this.email && this.password
        //     }
        // },
        checkValidity() {
            if (this.mode == "login") {
                if (this.email && this.password) {
                    return true
                } else {
                    return false
                }
            }
        },
        ...mapState(["status"]),
    },
    methods: {
        login: function () {
            const self = this;
            self.$store.dispatch("login", {
                email: this.email,
                password: this.password,
            }).then((response) => {
                if (!response) {
                    this.mesgError = error.response.data.message;
                } else if (this.isAdmin == true || this.$store.state.users.role == "admin") {
                    self.$router.push("/admin/users/list");                
                }
            }).catch(function (error) {
                console.log(error);
                this.mesgError = error.response.data.message;
            });
        },
        // login() {
        //     this.$store.dispatch("login", {
        //         email: this.email,
        //         password: this.password
        //     });
        // }
    }
};
</script>


<style lang="scss" scoped>
.users-header h2 {
    margin: auto;
}
</style>