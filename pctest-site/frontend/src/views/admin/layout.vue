<template>
    <div class="admin">
        <AdminHeader />
        <div class="ad_container_layout">
            <div class="ad_sidebar">
                <AdminNav />
            </div>
            <div class="ad_display">
                <router-view />
            </div>
        </div>       
    </div>
</template>


<script>
import AdminHeader from "@/components/AdminHeader.vue";
import AdminNav from "@/components/AdminNav.vue";
export default {
    name: "AdminLayout",
    components: {
        AdminHeader,
        AdminNav
    }
};
</script>


<style>
.ad_container_layout {
    display: flex;
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #f9f9f9;
    color: #1b3443;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
}
.ad_sidebar {
    width: 20%;
    border-right: solid 1px #1b3443;
    height: 100%;
    background-color: #f9f9f9;
    color: #1b3443;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
}
.ad_display {
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