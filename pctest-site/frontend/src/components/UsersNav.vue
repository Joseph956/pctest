<template>
    <div class="nav">
        <ul class="navMenu">
            <li> <router-link to="/userpublic/dashboard"><h3>Accueil</h3></router-link></li>
            <br>
            <li> <router-link :to="`/userpublic/user/edit/${this.$store.state.user.userId}`" ><h3>Compte Client</h3></router-link></li>
            <br>
            <li> <router-link to="/userpublic/user/interventions/list"><h3>Liste des interventions</h3></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "UsersNav",

}
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 50px 0;

    .navMenu h3 {
        display: flex;
        flex-direction: column;
        text-align: center;
        flex-wrap: wrap;

        @media(min-width: 800px) {
            text-align: initial;
        }
    }
}
</style>