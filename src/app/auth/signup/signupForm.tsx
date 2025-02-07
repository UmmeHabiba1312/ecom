import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input'
import SubmitForm from "../../../components/ui/submitButton";



const SignupForm = () => {
    return (
        <form action="#" className="space-y-4 bg-white p-6 rounded-lg shadow-md w-96">
            <div>
                <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </Label>
                <Input id="username" name="username" placeholder="Enter your username" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </Label>
                <Input id="password" name="password" type="password" placeholder="Enter your password" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <SubmitForm >
                sign up
            </SubmitForm>
        </form>
    )
}

export default SignupForm
