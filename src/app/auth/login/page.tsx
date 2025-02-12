import Link from "next/link";
import React from "react";
import LoginForm from "./loginForm";
import Image from "next/image";

const Login = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center h-auto bg-gray-100 px-4 py-8  max-w-screen-2xl">
            
            {/* Image Section */}
            <div className="w-full sm:w-[65%] h-auto flex justify-center  items-center mb-8 sm:mb-0">
                <Image 
                    src="/login.jpg" 
                    alt="Login Image"
                    width={600}  
                    height={500} 
                    className="w-full h-[300px] sm:w-[400px] md:w-full sm:h-[492px] object-cover"
                />
            </div>

            {/* Form Section */}
            <div className="w-full sm:w-[35%] sm:h-[492px] h-auto bg-white px-5 md:px-3 py-12 ">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
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


