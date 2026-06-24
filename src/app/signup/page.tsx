/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/user/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
        }
        catch (error: any) {
            console.log("Signup error", error);
        }
        finally {
            setLoading(false);
        }

    }

    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }

    }, [user]);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50" suppressHydrationWarning>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{loading ? "Processing" : "Signup"}</h1>
                <hr className="mb-6 border-gray-200" />

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
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
                    onClick={onSignup}
                    className="w-full mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                    disabled={buttonDisabled}
                >
                    Signup
                </button>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <Link href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link>
                </p>
            </div>
        </div>
    );
}
