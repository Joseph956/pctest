<template>
    <div>
        <br>
        <table>
            <thead>
                <tr>
                    <th colspan="2">
                        Votre compte client : {{ users.firstname }}
                        {{ users.lastname }}
                    </th>
                    <th></th>
                </tr>
            </thead>
            <br>
            <tbody>
                <tr>
                    <td><label for="id">N° Client : </label></td>
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
                        <label for="date">Création de votre compte client : </label>
                        <span> {{ dayjs(users.createdAt) }}</span>
                    </th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
        <br>
        <!-- Modifier infos utilisateur -->
        <input type="text" v-model="users.firstname">
        <button @click="updateUser">Submit</button>
        <div class="alert alert-info text-danger">{{ mesgError }}</div>
    </div>
</template>


<script>
import { mapState } from "vuex";
import axios from "axios";
import * as dayjs from "dayjs";
import "dayjs/locale/fr";
import fr from "dayjs/locale/fr";

export default {
    name: "UserEdit",
    components: {
        dayjs,
        fr,
    },
    data() {
        return {
            mesgError: "",
            isadmin: false,
            instance: axios.create({
                baseURL: "http://localhost:3000/api/",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "BEARER " + this.$store.state.user.token,
                },
            }),
            users: [], // Permet l'affichage de l'utilisateur
        }
    },
    computed: {
        ...mapState(["users", "status", "user"]),
    },
    beforeMount() {
        if (this.$store.state.users.isadmin == "user") {
            this.isAdmin = true;
        }

    },
    mounted: function () {
        this.instance.get(`users/${this.$store.state.user.userId}/publishedUser`
        ).then((response) => {
            if (!response) {
                return (this.mesgError = error.response.data.message);

            } else {
                this.users = response.data;
                this.mesgError = "";
                this.getUsers();
            }

        }).catch(function (error) {
            return (this.mesgError = error.response.data.message);
        });
    },
    // update() {
    //     // console.log(this.$route.params.userId);
    //     // this.user = this.$route.params.userId
    // },
    methods: {
        dayjs: function (createdAt) {
            const Date = dayjs(createdAt)
                .locale("fr")
                .format("DD-MMMM-YYYY à HH:mm ");
            return Date;
        },
    },
};

</script>
<style></style>