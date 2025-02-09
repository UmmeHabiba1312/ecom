'use server'

import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'

export type Session = {
    user: {
        id: string
        username: string
    }
}

// Validate environment variable
const secretKey = process.env.SESSION_SECRET_KEY
if (!secretKey) {
    throw new Error('SESSION_SECRET_KEY is not defined in the environment variables.')
}
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(payload: Session) {
    try {
        const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

        const session = await new SignJWT({ user: payload.user })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('7d')
            .sign(encodedKey)

        // ✅ Await cookies() before using .set()
        const cookieStore = await cookies()
        cookieStore.set('session', session, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: expiredAt,
            sameSite: 'lax',
            path: '/',
        })

        return { success: true, session }
    } catch (error) {
        console.error('Failed to create session:', error)
        throw new Error('Failed to create session')
    }
}

export async function getSession(): Promise<Session | null> {
    try {
        // Get session cookie
        const cookie = (await cookies()).get('session')?.value
        console.log('Session cookie:', cookie) // Debug: Log the cookie value
        if (!cookie) return null

        // Verify JWT
        const { payload } = await jwtVerify(cookie, encodedKey, {
            algorithms: ['HS256'],
        })
        console.log('Verified payload:', payload) // Debug: Log the verified payload

        // Validate payload structure
        if (payload && typeof payload === 'object' && 'user' in payload) {
            return payload as Session
        }
        return null
    } catch (error) {
        console.error('Failed to verify session:', error)
        return null // Let the caller handle the redirection
    }
}

export async function deleteSession() {
    ; (await cookies()).delete('session')
}

// import { SignJWT } from "jose";
// import { cookies } from "next/headers";

// export type Session = {
//     user: {
//         id: string;
//         name: string;
//     };
//     // accessToken: string;
//     // refreshToken: string;
// }

// const secretKey = process.env.SESSION_SECRET_KEY;
// if (!secretKey) {
//     throw new Error("SESSION_SECRET_KEY is not defined in the environment variables.");
// }
// const encodedKey = new TextEncoder().encode(secretKey);

// export async function createSession(payload: Session) {
//     const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

//     const session = await new SignJWT(payload).setProtectedHeader({
//         alg: "HS256"
//     })
//         .setIssuedAt()
//         .setExpirationTime("7d")
//         .sign(encodedKey);

//     cookies().set("session", session, {
//         httpOnly: true,
//         secure: true,
//         expires: expiredAt,
//         sameSite: "lax",
//         path: "/",
//     })

// }
// export async function getSession() {
//     const cookie = (await cookies()).get("session")?.value;
//     if (!cookie) return null

//     try {
//         const { payload } = await jwtVerify(cookie, encodedKey, {
//             algorithms: ["HS256"],
//         })
//     } catch (error) {
//         console.error("Fail to verify the session", error)
//         redirect("/auth/login")
//     }
// }
// export async function getSession(): Promise<Session | null> {
//     // ✅ Await cookies() before using .get()
//     const cookieStore = await cookies();
//     const cookie = cookieStore.get("session")?.value;

//     if (!cookie) return null;

//     try {
//         const { payload } = await jwtVerify(cookie, encodedKey, {
//             algorithms: ["HS256"],
//         });

//         return payload as Session;
//     } catch (error) {
//         console.error("Failed to verify session", error);
//         redirect("/auth/login");
//         return null;
//     }
// }
