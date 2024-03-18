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
                        <p class="text-sm tracking-wide my-3 text-center text-gray-600 dark:text-gray-300">Already have an
                        account ? <a href="/login"
                            class="text-blue-600 transition duration-200 hover:underline dark:text-blue-400">Log in
                        </a>
                    </p>

                    <p class="text-sm tracking-wide my-3 text-center text-gray-600 dark:text-gray-300">Go to Home ? <a href="/"
                            class="text-blue-600 transition duration-200 hover:underline dark:text-blue-400">Home
                        </a>
                    </p>
                    </form>
                  
        </div>
    </div>
</main>

</template>