<template>
    <div class="users-header">
        <UsersHeader />
        <div class="ad_container_layout">
            <div class="ad_sidebar_users">
                <UsersNav />
            </div>
            <div class="ad_display_users">
                <router-view />
            </div>
        </div>
    </div>

</template>

<script>
import UsersHeader from '@/components/UsersHeader.vue';
import UsersNav from '@/components/UsersNav.vue';
export default {
    name: "UserPublicLayout",
    components: {
        UsersHeader,
        UsersNav
    },

}
</script>

<style lang="scss" scoped>
// .users-header {
//     background-color: rgb(255, 255, 255);
//     color: rgb(0, 0, 0);
//     height: 50px;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.2rem;
//     font-weight: bold;
//     font-family: 'Lato', sans-serif;
//     border-bottom: solid 1px rgb(0, 0, 0);
// }
.ad_container_layout {
    display: flex;
    width: 100%;
    // height: 100%;
    margin: auto;
    background-color: #f9f9f9;
    color: #1b3443;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
}

.ad_sidebar_users {
    width: 20%;
    border-right: solid 1px #1b3443;
    height: 100%;
    background-color: #f9f9f9;
    color: #1b3443;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
}

.ad_display_users {
    width: 80%;
    padding: 1rem 1rem 0;
    text-align: left;
    height: 100%;
    background-color: #f9f9f9;
    color: #1b3443;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
}
</style>