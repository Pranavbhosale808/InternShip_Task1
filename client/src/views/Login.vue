<script setup>
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import Button from '@/components/ui/button/Button.vue';
import { useForm } from 'vee-validate'
import Input from '@/components/ui/input/Input.vue';
import { loginSchema } from '@/schemas/authSchema';
import { useRouter } from 'vue-router';
import { handleLogin } from '@/services/auth-services';

const router = useRouter();


const form = useForm({
    validationSchema: loginSchema,
})

const onSubmit = form.handleSubmit((values) => {
    handleLogin(values, router)
})

</script>
<template>
    <main class="flex items-center justify-center h-screen">
    <div class="max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-2">
        <!-- Image Section -->
        <div class="bg-gradient-to-b from-sky-300 to-purple-500 rounded-l-lg">
            <img src="../../public/login_iamge.jpg" alt="Image description" class="w-full h-full object-cover">
        </div>
        <!-- Form Section -->
        <form @submit="onSubmit" class="mt-8 space-y-6">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="email" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="passwords">
                        <FormItem>
                            <FormLabel>Passwords</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="••••••••" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <Button type="submit" class="mt-8 w-full">
                        Log in
                    </Button>
                    <p class="text-sm tracking-wide my-3 text-center text-gray-600 dark:text-gray-300">Create new
                        account ? <a href="/signup"
                            class="text-blue-600 transition duration-200 hover:underline dark:text-blue-400">Sign UP
                        </a>
                        </p>
                </form>
    </div>
</main>
</template>



<!-- <form action="">
    <div class="mt-8 space-y-8">
        <div class="space-y-6">
            <input
                class="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                placeholder="Your Email" type="email" name="email" id="email" />

            <input
                class="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                placeholder="Your Password" type="password" name="password" id="password" />
        </div>

        <button
            class="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
            Signin
        </button>
    </div>
</form> -->