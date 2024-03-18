import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export const signupSchema = toTypedSchema(z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    passwords: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(50, 'Password must be at most 50 characters long')
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{}|\\[\]:;"'<>,.?/]).{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        )

}))

export const loginSchema = toTypedSchema(z.object({
    email: z.string().email().min(6, "Email is required"),
    passwords: z.string().min(1, "Password is required")
}))
