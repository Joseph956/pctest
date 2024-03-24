<template>
    <div class="public">
        <Navbar />
            <router-view />
        <Footteur />
    </div>
</template>

<script>
import Navbar from "@/views/public/Navbar.vue";
import Footteur from "@/views/public/Footteur.vue";
export default {
    name: "PublicLayout",
    components: {
        Navbar,
        Footteur,
    },
};
</script>

<style lang="scss" scoped>

</style>