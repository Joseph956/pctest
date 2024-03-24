<template>
    <div>
        <div>
            User index works !
        </div>
        <div>
            <label for="firstname">Prénom {{ users.firstname }}</label>
            <br>
            <label for="lastname">Nom {{ user.lastname }}</label>
            <br>
            <label for="email">Email {{ email }}</label>
            <br>
            <label for="date">Date</label>
            <br>
            <label for="phone">phone</label>

        </div>
        <div v-show="posts.length === 0">No posts yet> {{ users.firstname }} , {{ users.lastname }} ,_ {{ email }} ,_ {{
                date }} , {{ phone }}
        </div>
        <!-- <br> -->
        <!-- <div>
        {{ users.firstname }} , {{ users.lastname }} ,_ {{ users.email }} ,_ {{ users.date }} , {{ users.phone }}
    </div> -->
        <div v-for="user in users" :key="user.id">
            {{ users.firstname }} , {{ users.lastname }} ,_ {{ users.email }} ,_ {{ users.date }} , {{ users.phone }}
        </div>
    </div>
</template>


<script>
import axios from "axios";
import instance from "@/store/index";
import { mapState } from "vuex";
export default {
    name: "UserIndex",
    components: {
        instance,
    },
    data() {
        return {
            isUserAdmin: false,
            msgError: "",
            mesgError: "",
            mesgSuccess: "",
            instance: axios.create({
                baseURL: "http://localhost:3000/api",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "BEARER " + this.$store.state.user.token,
                },
            }),
            user: [ // this.$store.state.users
                {
                    firstname: "",
                    lastname: "",
                    email: "",
                    date: "",
                    phone: "",
                    message: "",
                    demande: "",
                }
            ],
            users: [ // this.$store.state.users
                {
                    firstname: "",
                    lastname: "",
                    email: "",
                    date: "",
                    phone: "",
                    message: "",
                    demande: "",
                }
            ],
            users: [],
        }
    },

    mounted: function () {
        this.instance
            .get("/users")
            .then((response) => {
                if (!response) {
                    this.mesgError = error.response.data.message;
                } else {
                    this.users = response.data;
                }
            }).catch(function (error) {
                this.mesgError = error.response.data.message;
            });
    },
    beforeMount() {
        if (this.$store.state.user.Role.role == "admin") {
            this.isUserAdmin = true;
        } else {
            this.isUserAdmin = false;
        }
        this.getUsers();
    },
    computed: {
        ...mapState(["users", "status"]),
    },
    methods: {
        getUsers: function () {
            const self = this;
            self.instance
                .get("/users/")
                .then((response) => {
                    if (!response) {
                        this.mesgError = error.response.data.message;
                    } else {
                        self.users = response.data;
                    }
                }).catch(function (error) {
                    this.mesgError = error.response.data.message;
                });

            // this.$store.dispatch("getUsersList");
        }

    },
};
</script>
<style></style>