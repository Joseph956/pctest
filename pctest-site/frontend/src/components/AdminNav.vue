<template>
    <div class="nav">
        <ul class="navMenu">
            <!-- <li><a href="/admin/dashboard">Dashboard</a></li> -->
            <li>  <router-link to="/admin/dashboard"> <h3>Accueil</h3> </router-link></li>
            <br>
            <li>  <router-link to="/admin/users/list"> <h3>Liste Clients</h3> </router-link></li>
            <br>
            <li>  <router-link to="/admin/users/add"> <h3>Nouveau Client</h3> </router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AdminNav",
};
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
        justify-content: left;
        align-items: left;
        text-align: left;
        list-style: none;
    }
}

</style>