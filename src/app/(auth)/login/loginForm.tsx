'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from '@/components/ui/submitButton'
import { logIn } from '@/lib/auth'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const LoginForm = () => {
  const [state, action] = React.useActionState(logIn, undefined)

  return (
    <form
      action={action}
      className="space-y-4 h-auto bg-white w-full max-w-md mx-auto  p-9 rounded-lg border-[1px] border-gray-200 "
    >
      {/* Error Message */}
      {state?.error?.message && (
        <p className="text-xs sm:text-sm bg-red-500 text-white p-2 rounded">
          {state.error.message}
        </p>
      )}

      {/* Email Input */}
      <div>
        <Label htmlFor="email" className="block text-sm font-medium tracking-wide text-gray-800">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 px-2 py-5 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      {state?.error?.email && (
        <p className="text-xs sm:text-sm text-red-500">{state.error.email}</p>
      )}

      {/* Password Input */}
      <div>
        <Label htmlFor="password" className="block text-sm font-medium tracking-wide text-gray-800">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          className="w-full mt-1 px-2 py-5 border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-1"
        />
        <div className="text-right mt-1">
          <Link href="#" className="text-xs sm:text-sm text-blue-400 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
      {state?.error?.password && (
        <div className="text-xs sm:text-sm text-red-500">
          <p>Password must be:</p>
          <ul className="list-disc pl-5">
            {state.error.password.map((error: string, index: number) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit Button */}
      <SubmitButton>Log in</SubmitButton>

      {/* Divider Line with OR */}
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-3 text-xs sm:text-sm text-gray-500 font-medium">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google Sign-in Button */}
      <Link
        href="/"
        className="flex items-center tracking-wide  hover:bg-gray-100 justify-center gap-2 font-medium text-xs sm:text-sm bg-white text-gray-500 py-[10px] w-full rounded-md border-[1px] border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FcGoogle className="text-xl" />
        Continue With Google
      </Link>
    </form>
  )
}

export default LoginForm
