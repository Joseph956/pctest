<template>
    <div>
        <div>
            <h2> Index des comptes clients !</h2>
            <div class="infosUsers" v-show="users.length > 0" v-for="user in users" :key="user.id">
                <table class="table">
                    <thead>
                        <tr>
                            <th colspan="2"> Compte client
                            </th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label for="id">N° Client : </label></td>
                            <td><span>{{ user.id }}</span></td>
                        </tr>
                        <tr>
                            <td><label for="lastname">Nom : </label></td>
                            <td><span>{{ user.lastname }}</span></td>
                        </tr>
                        <tr>
                            <td><label for="firstname">Prénom : </label></td>
                            <td><span>{{ user.firstname }}</span></td>
                        </tr>
                        <tr>
                            <td><label for="email">Email : </label></td>
                            <td><span>{{ user.email }}</span></td>
                        </tr>
                        <tr>
                            <td><label for="date">Date de création du compte :</label></td>
                            <td><span>{{ dayjs(user.createdAt) }}</span></td>
                        </tr>
                        <tr>
                            <td><label for="phone">Téléphone : </label></td>
                            <td><span>{{ user.phone }}</span></td>
                        </tr>
                        <tr>
                            <td><label for="message">Message : </label></td>
                            <td><span>{{ user.message }}</span></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <!-- :userId="user.id" -->
                            <!-- v-if="isAdmin == true || $store.state.user.userId == user.userId" -->
                            <th colspan="2">
                                <div>
                                    <router-link v-bind:to="`/admin/users/edit/${user.id}`">
                                        Profil client de :
                                        {{ user.firstname }}
                                        {{ user.lastname }}
                                    </router-link>
                                </div>
                            </th>
                            <th></th>

                        </tr>
                    </tfoot>
                </table>
            </div>


        </div>
        <br>
    </div>
</template>


<script>
import axios from "axios";
import { mapState } from "vuex";
import usersEdit from "./../users/UsersEdit.vue";
import * as dayjs from "dayjs";
import "dayjs/locale/fr";
import fr from "dayjs/locale/fr";
export default {
    name: "UsersIndex",
    components: {
        usersEdit,
        dayjs,
        fr,
    },
    
    data() {
        return {
            isAdmin: false,
            msgError: "",
            mesgError: "",
            mesgSuccess: "",
            instance: axios.create({
                baseURL: "http://localhost:3000/api/",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "BEARER " + this.$store.state.user.token,
                },
            }),
            user: [ // this.$store.state.user
                {
                    id: "id",
                    firstname: "firstname",
                    lastname: "lastname",
                    email: "email",
                    createdAt: "createdAt",
                    phone: "phone",
                    // message: "",
                    // demande: "",
                }
            ],
            users: [],
        }
    },
    beforeMount() {
        if (this.$store.state.user.isadmin == "admin") {
            this.isAdmin = true;
        }
        // this.getUsers();
    },
    mounted: function () {
        this.instance
            .get("users/")
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
        getUsers: function () {
            const self = this;
            self.instance
                .get("users/")
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
<style lang="scss" scoped>
table {
    border-collapse: collapse;
    width: 100%;
}

thead tbody tfoot {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    width: 100%;
    border-collapse: collapse;
    width: 100%;

}

tfoot td {
    display: flex;
    justify-content: center;
}

.infosUsers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    height: 480px;
    margin: auto;
    text-align: justify;
    background-color: #efebeb;
    padding: 0 1rem 0 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 0.2rem;
    box-shadow: 0px 0px 20px #cecdcd, 20px 20px 40px #4e51665a;
}

th,
td {
    width: 50%;
    text-align: left;
    padding: 8px;
}

tr {
    width: 88%;
}

tr th {
    text-align: center;
    padding: 8px;
    width: 17%;
}

tr td {
    text-align: left;
    padding: 8px;
}

label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;

    margin: auto;
    text-align: justify;
    padding: 0 1rem 0 1rem;
    border-radius: 1rem;
}

tr:nth-child(even) {

    background-color: #f2f2f2
}
</style>