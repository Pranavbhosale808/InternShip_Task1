<script setup>
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import Button from '@/components/ui/button/Button.vue';
import { useForm } from 'vee-validate'
import { signupSchema } from '@/schemas/authSchema';
import Input from '@/components/ui/input/Input.vue';
import { useRouter } from 'vue-router';
import { handleSignUp } from '@/services/auth-services';


const router = useRouter();

const form = useForm({
    validationSchema: signupSchema,
})

const onSubmit = form.handleSubmit((values) => {
    handleSignUp(values, router)
})



</script>

<template>
    <!-- <main class="">
        <div class="bg-white-300 flex items-center justify-center h-screen">
            <div
                class="max-w-sm rounded-lg bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-gray-800 dark:to-transparent">
                <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <div class="flex justify-center mb-6">
                        <span class="inline-block bg-gray-200 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                            </svg>
                        </span>
                    </div>
                    <h2 class="text-2xl font-semibold text-center mb-4">Create a new account</h2>
                    <p class="text-gray-600 text-center mb-6">Enter your details to register.</p>
                    <form @submit="onSubmit" class=" space-y-4">
                        <FormField v-slot="{ componentField }" name="name">
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="full name" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
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
                            Register
                        </Button>
                    </form>
                    <p class="text-sm tracking-wide my-3 text-center text-gray-600 dark:text-gray-300">Already have an
                        account ? <a href="/login"
                            class="text-blue-600 transition duration-200 hover:underline dark:text-blue-400">Log in
                        </a>here
                    </p>
                    <p class="text-gray-600 text-xs text-center mt-4">
                        By clicking Register, you agree to accept Apex Financial's
                        <a href="#" class="text-blue-500 hover:underline">Terms and Conditions</a>.
                    </p>
                </div>
            </div>
        </div>
    </main> -->
    <main class="flex items-center justify-center h-screen">
    <div class="max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-2">
        <!-- Image Section -->
        <div class="bg-gradient-to-b from-sky-300 to-purple-500 rounded-l-lg">
            <img src="../../public/techguy.jpg" alt="Image description" class="w-full h-full object-cover">
        </div>
        <!-- Form Section -->
        <div class="p-8">
            <form @submit="onSubmit" class=" space-y-4">
                        <FormField v-slot="{ componentField }" name="name">
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="full name" v-bind="componentField" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
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
                            Register
                        </Button>
                    </form>
        </div>
    </div>
</main>

</template>