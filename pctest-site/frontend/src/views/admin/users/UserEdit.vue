<template>
    <div>
        User edit works !
        <div>{{ id }}</div>
    </div>
</template>


<script>
import { onMounted } from 'vue';

export default {
    name: "UserEdit",
    props: ['id'],
    // data() {
    //     return {
    //         test: ''
    //     }
    // },
    // mounted() {
    //     console.log(this.$route.params.id);
    //     this.test = this.$route.params.id
    // },
    // update() {
    //     console.log(this.$route.params.id);
    //     this.test = this.$route.params.id
    // }
};
</script>
<style>

</style>