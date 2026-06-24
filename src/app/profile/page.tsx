"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();

    const logout = async () => {
        try {
            const response = await fetch("/api/user/logout", {
                method: "GET",
            });
            const data = await response.json();
            console.log("Logout response:", data);
            if (response.ok) {
                router.push("/login");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <h1>Profile</h1>
            <hr className="mb-6 border-gray-200" />
            <button
                onClick={logout}
                className="w-full mt-6 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
            >
                Logout
            </button>
        </div>
    );
}