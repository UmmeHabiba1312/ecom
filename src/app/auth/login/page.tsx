"use client";

import Link from "next/link";
import React from "react";
import LoginForm from "./loginForm";
import Image from "next/image";
import { motion } from "framer-motion";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-auto  px-5 sm:px-10 md:px-6 py-8 sm:py-8">
            {/* Wrapper with equal height */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full max-w-5xl bg-white rounded-2xl overflow-hidden border  shadow-lg"
            >
                {/* Image Section (Hidden on Small Screens) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="hidden sm:flex md:w-[50%] lg:w-[60%]  h-auto"
                >
                    <Image
                        src="/login.jpg"
                        alt="Login Image"
                        width={700}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className="w-full md:w-[50%] lg:w-[40%] flex flex-col justify-center items-center p-8"
                >
                    <h2 className="font-sans text-2xl tracking-wide sm:text-3xl font-bold text-center text-gray-700 mb-6">
                        Login
                    </h2>
                    <LoginForm />
                    <p className="text-center tracking-wide text-gray-600 text-sm mt-4 p-6 rounded-lg border-[1px] border-gray-300 w-full">
                        Do not have an account?{" "}
                        <Link href="/auth/signup" className="text-blue-500 font-semibold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;
