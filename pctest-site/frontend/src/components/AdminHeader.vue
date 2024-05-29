<template>
    <div class="admin-header" >
       <h1>Header admin</h1>
       <button @click="logout()">Se deconnecter</button> 
    </div>
</template>

<script>
export default {
    name: "AdminHeader",

    methods: {
        logout() {
            localStorage.removeItem("token");
            this.$router.push("/admin/dashboard");
        },
    }
}

</script>

<style>
.admin-header {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    border-bottom: solid 1px rgb(0, 0, 0);
}
button {
    float: right;
}
</style>