/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function UserProfilePage({ params }: any) {
    const { id } = await params;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800">User Profile: {id}</h1>
        </div>
    );
}