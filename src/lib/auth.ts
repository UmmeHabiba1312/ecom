
"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";
import { FormState, signupFormSchema } from "./type";

export async function signUp(state: FormState | null, formData: FormData): Promise<FormState | void> {
    console.log("Received Form Data:", formData.get("username"), formData.get("email"), formData.get("password"));

    // Validate form data
    const validationFields = signupFormSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validationFields.success) {
        return {
            error: validationFields.error.flatten().fieldErrors,
        };
    }

    try {
        // Send data to backend API
        const response = await fetch(`${BACKEND_URL}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validationFields.data), // Send validated data
        });

        if (!response.ok) {
            // Handle API errors
            let errorData;
            try {
                errorData = await response.json();
            } catch {
                return { error: { message: "Signup failed. Please try again." } };
            }
            return { error: { message: errorData?.message || "Signup failed. Please try again." } };
        }

        // Redirect on success
        redirect("/auth/login");

    } catch (error) {
        // Check if the error is a redirect error
        if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
            // Rethrow the redirect error to let Next.js handle it
            throw error;
        }

        // Handle other errors
        console.error("Signup Error:", error);
        return { error: { message: "Something went wrong. Please try again later." } };
    }
}

// old code 

// import { BACKEND_URL } from "./constants";

// export async function signUp(formData: FormData) {
//     try {
//         const response = await fetch(`${BACKEND_URL}/auth/signup`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 username: formData.get("username"),
//                 email: formData.get("email"),
//                 password: formData.get("password"),
//             }),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Signup failed");
//         }

//         return await response.json(); // Return user data if needed

//     } catch (error: any) {
//         console.error("Signup Error:", error);
//         return { error: error.message };
//     }
// }
