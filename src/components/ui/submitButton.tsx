"use client";

import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
    children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Submitting..." : children}
        </Button>
    );
};

export default SubmitButton;
