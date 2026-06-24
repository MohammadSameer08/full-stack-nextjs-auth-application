/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const onLogin = async () => {
        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                body: JSON.stringify(user),
            });
            const data = await response.json();
            if (response.ok) {
                router.push("/profile");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <hr className="mb-6 border-gray-200" />

                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <button
                    onClick={onLogin}
                    className="w-full mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                >
                    Login
                </button>

                <p className="text-center text-gray-600 mt-4">
                    Don&apos;t have an account? <Link href="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">Signup</Link>
                </p>
            </div>
        </div>
    );
}
