"use client"

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { logIn } from "@/lib/auth";


const LoginForm = () => {

    const [state, action] = React.useActionState(logIn, undefined);
    return (
        <form action={action} className="space-y-4 bg-white p-6 rounded-lg shadow-md w-96" >
            {/* Email Input */}
            {state?.error?.message && (
                <p className="text-sm bg-red-500 text-white p-2 rounded">
                    {state.error.message}
                </p>
            )}

            <div>

                <Label htmlFor="email" className="block text-sm font-medium text-gray-700" >
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            {state?.error?.email && (
                <p className="text-sm text-red-500">{state.error.email}</p>
            )}

            {/* Password Input */}
            <div>
                <Label htmlFor="passwo rd" className="block text-sm font-medium text-gray-700" >
                    Password
                </Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            {state?.error?.password && (
                <div className="text-sm text-red-500">
                    <p>Password must be:</p>
                    <ul className="list-disc pl-5">
                        {state.error.password.map((error: any, index: number) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Forgot Password Link */}
            <div className="text-right">
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <SubmitButton>Sign in</SubmitButton>
        </form>
    );
};

export default LoginForm;
