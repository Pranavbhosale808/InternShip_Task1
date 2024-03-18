<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <!-- <nav
            class="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
            <div class="flex justify-between p-4">
                <div class="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
                    🏠 Home
                </div>
                <div class="flex items-center space-x-4 text-lg font-semibold tracking-tight">
                    <RouterLink to="/login"
                        class="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black">
                        Log
                        in</RouterLink>
                    <RouterLink to="/signup"
                        class="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline">
                        Sign
                        up</RouterLink>
                </div>
            </div>
        </nav> -->
        <head>
    <!-- Import necessary fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-transparent shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div class="flex justify-between p-4">
            <!-- Logo (replace "Your Logo" with your actual logo) -->
            <div class="flex items-center">
                <h1 class="h-8">LoGo</h1>
            </div>
            <div class="flex items-center space-x-4 text-lg font-semibold tracking-tight">
                <RouterLink to="/login"
                    class="px-6 py-2 text-black transition duration-700 ease-out hover:text-gray-300 dark:text-white dark:hover:text-gray-300">
                    <span class="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">Log in</span>
                </RouterLink>
                <RouterLink to="/signup"
                    class="px-6 py-2 text-black transition duration-500 ease-out hover:underline">
                    <span class="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">Sign up</span>
                </RouterLink>
            </div>
        </div>
    </nav>
</body>


    
    </header>
</template>