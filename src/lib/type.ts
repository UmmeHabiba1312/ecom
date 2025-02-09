import { z } from 'zod'

export type FormState =
    | {
        error?: {
            username?: string[]
            email?: string[]
            password?: string[]
            message?: string // ✅ Added message inside error object
        }
        message?: string // ✅ This is also valid, used for success messages
    }
    | undefined

export const signupFormSchema = z.object({
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .max(20, 'Username cannot exceed 20 characters')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),

    email: z.string().email('Invalid email format').trim(),

    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(64, 'Password cannot exceed 64 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[@$!%*?&#]/, 'Password must contain at least one special character (@$!%*?&#)'),
})

export const loginFormSchema = z.object({
    email: z.string().email('Invalid email format').trim(),

    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(64, 'Password cannot exceed 64 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[@$!%*?&#]/, 'Password must contain at least one special character (@$!%*?&#)'),
})
