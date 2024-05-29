<template>
    <!-- <div> -->
    <div class="table-wrap" role="table" aria-labelledby="unique-caption-id">
        <br>
        <table>
            <thead>
                <caption id="unique-caption-id">Vos informations</caption>
                <tr>
                    <th colspan="2">
                        Votre compte client : {{ users.firstname }}
                        {{ users.lastname }} {{ users.id }}
                    </th>
                    <th></th>
                </tr>
            </thead>
            <br>
            <tbody>
                <tr>
                    <td><label for="id">N° Client : {{ id }}</label></td>
                    <td>
                        <span>{{ users.id }}</span>
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="lastname">Nom : </label></td>
                    <td><span>{{ users.firstname }}</span></td>
                </tr>
                <tr>
                    <td><label for="firstname">Prénom : </label></td>
                    <td><span>{{ users.lastname }}</span></td>
                </tr>
                <tr>
                    <td><label for="email">Email : </label></td>
                    <td><span>{{ users.email }}</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><label for="phone">N° de Téléphone : </label></td>
                    <td><span>{{ users.phone }}</span></td>
                </tr>
            </tbody>
            <br>
            <tfoot>
                <tr>
                    <th colspan="2">
                    <td><label for="date">Création de votre compte client : </label></td>
                    <td><span><b>{{ dayjs(users.createdAt) }}</b> </span></td>
                    </th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
        <br>
        <input type="text" v-model="users.firstname">
        <button @click="updateUser">Submit</button>
        <div class="alert alert-info text-danger">{{ mesgError }}</div>
    </div>
    <!-- </div> -->
</template>


<script>
// import { onMounted } from 'vue';
import { mapState } from "vuex";
import axios from "axios";
import * as dayjs from "dayjs";
import "dayjs/locale/fr";
import fr from "dayjs/locale/fr";

export default {
    name: "UsersEdit",
    components: {
        // instance,
        dayjs,
        fr,
    },
    props: {
        users: {
            type: Array,
            default: () => [],
        },
        id: Number,
        firstname: String,
        lastname: String,
        email: String,
        phone: String,
        message: String
    },
    data() {
        return {
            mesgError: "",
            mesgSuccess: "",
            isAdmin: false,
            fr: fr,
            user: {
                id: this.$store.state.user.userId,
                firstname: "firstname",
                lastname: "lastname",
                email: "email",
                createdAt: "createdAt",
                phone: "phone",
                // message: this.message,
                // demande: this.demande,
            },
            instance: axios.create({
                baseURL: "http://localhost:3000/api/",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "BEARER " + this.$store.state.user.token,
                },
            }),
            users: [],
            users: {},
            created() {
                const id = parseInt(this.$route.params.id);
                this.user = user.find((users) => users.id === id);
                // this.user = this.users.find((user) => user.id === id);
            }
        }
    },
    computed: {
        ...mapState(["status", "user"]),
    },
    beforeMount() {
        if (this.$store.state.users.isAdmin == "admin") {
            this.isAdmin = true;
        }
        // this.getUsers();
    },
    mounted: function () {
        let self = this;
        console.log("this.$store.state.user.userId : ", this.$store.state.user.userId);
        console.log("this.$route.params.userId : ", this.$route.params.userId);
        this.instance.get(`users/${this.$route.params.userId}/publishedUser`
        ).then((response) => {
            if (!response) {
                return (this.mesgError = error.response.data.message);

            } else {
                this.users = response.data;
                this.mesgError = "";
                self.getUsers();
            }

        }).catch(function (error) {
            this.mesgError = error.response.data.message;
        });
    },
    update() {
        if (this.$route.params.userId === undefined || this.$route.params.id === undefined) {
            console.error("update() called with undefined route parameters, skipping update.");
            return;
        }
        try {
            this.users = this.$route.params.userId
            this.user = this.$route.params.id
        } catch (error) {
            console.error("Error in update(): ", error);
        }
    },

    computed: {
        ...mapState(["users", "status"]),
    },
    methods: {
        dayjs: function (createdAt) {
            const Date = dayjs(createdAt)
                .locale("fr")
                .format("DD-MMMM-YYYY à HH:mm ");
            return Date;
        },
        // getUsers: function () {
        //     const self = this;
        //     self.instance
        //         .get(`users/${this.$store.state.user.userId}`
        //         ).then((response) => {
        //             if (!response) {
        //                 return (this.mesgError = error.response.data.message);
        //             } else {
        //                 self.users = response.data;
        //                 self.user = response.data;
        //             }
        //         }).catch(function (error) {
        //             this.mesgError = error.response.data.message;
        //         });

        //     // this.$store.dispatch("getUsersList");
        // },
        // getUsers: function () {
        //     this.$store.dispatch("getUsers", {
        //         id: this.$store.state.user.userId,
        //         firstname: this.users.firstname,
        //         lastname: this.users.lastname,
        //         email: this.users.email,
        //         phone: this.users.phone,
        //         message: this.users.message,
        //     }).then((response) => {
        //         if (!response) {
        //             this.mesgError = error.response.data.message;
        //         } else {
        //             this.users = response.data;
        //         }
        //     }).catch(function (error) {
        //         console.log(error);
        //         this.mesgError = error.response.data.message;
        //     });
        // },
    },
};

</script>
<style></style>