import React from 'react'
import { useForm } from "react-hook-form"

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
                <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Create Account</h2>

                    <form action="">
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full mb-3 sm:mb-0 p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                                    {...register('firstName'), { required: true }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                            />
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                            />
                            <button className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                                Submit
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Signup