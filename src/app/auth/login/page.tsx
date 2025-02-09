import Link from "next/link";
import React from "react";
import LoginForm from "./loginForm";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>
                <LoginForm />
                <p className="text-center text-gray-600 text-sm mt-4">
                    Do not have an account?{" "}
                    <Link href="/auth/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
