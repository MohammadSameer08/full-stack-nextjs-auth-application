"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
    });

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

    const getUserData = async () => {
        try {
            const response = await fetch("/api/user/me", {
                method: "GET",
            });
            const data = await response.json();
            console.log("User data:", data);
            if (response.ok) {
                setUser({
                    username: data.data.username,
                });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50" suppressHydrationWarning>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Profile</h1>
                <hr className="mb-6 border-gray-200" />

                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <p className="text-lg text-gray-700">
                        <span className="font-semibold">Username:</span> {user.username || "Loading..."}
                    </p>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={getUserData}
                        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                    >
                        Get User Data
                    </button>

                    <button
                        onClick={logout}
                        className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}