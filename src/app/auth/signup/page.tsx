import Link from "next/link";
import React from "react";
import SignupForm from "./signupForm";
import Image from "next/image";
const Signup = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center h-auto bg-white px-4 py-8  max-w-screen-2xl">

<div className="w-full sm:w-[65%] h-auto flex justify-center  items-center mb-8 sm:mb-0">
                            <Image 
                                src="/login.jpg" 
                                alt="Login Image"
                                width={600}  
                                height={500} 
                               className="w-full h-[300px] sm:w-[400px] md:w-full sm:h-[492px] object-cover"
                            />
                        </div>


            <div className="w-full sm:w-[35%] sm:h-[492px] h-auto bg-white px-5 md:px-3 py-12 ">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
                    Create an Account
                </h2>

                <SignupForm />
                {/* Login Link */}
                <p className="text-center text-gray-600 text-sm mt-4 md:mt-3">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-blue-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
