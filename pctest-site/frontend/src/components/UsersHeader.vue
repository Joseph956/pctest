<template>
    <div class="users-header">
        <h1>header users</h1>
    </div>

</template>

<script>
export default {
    name: "UsersHeader",

}
</script>

<style lang="scss" scoped>
.users-header {
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
</style>