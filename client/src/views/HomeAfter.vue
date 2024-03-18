<script>
import { handleLogout } from '@/services/auth-services';

export default {
    props: ['token'],
    methods: {
        logout() {
            handleLogout(this.$router);
        }
    }
};
</script>

<template>
    <Navbar />
    <div class="bg-grey-600 w-full h-screen flex justify-center items-center">
        <h1 class="text-6xl text-black font-semibold">Swagat Hai 😉</h1>
        <button @click="logout" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Logout
        </button>
    </div>
</template>