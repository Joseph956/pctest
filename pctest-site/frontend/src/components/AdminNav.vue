<template>
    <div>
        <ul>
            <!-- <li><a href="/admin/dashboard">Dashboard</a></li> -->
            <li>  <router-link to="/admin/dashboard"> Accueil</router-link></li>
            <li>  <router-link to="/admin/users/index"> Dashboard User list</router-link></li>
            <li>  <router-link to="/admin/users/edit/12"> User</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AdminNav",
};
</script>

<style>

</style>