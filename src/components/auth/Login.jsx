import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../plugins/toast';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        try {
            axios({
                method: 'POST',
                url: `${import.meta.env.VITE_BASE_URL}/auth/login`,
                data: data
            }).then((response) => {
                console.log(response.data);
                successToast('Welcome To Our World');
                navigate('/home')

            })
        } catch (error) {
            console.log(error.data);
            errorToast('something went wrong')

        }
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
                <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Login</h2>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-300">Welcome back! Please login to your account</p>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid Email' } })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            {...register('password', { required: 'Password is required', pattern: { value: /^[A-Za-z0-9]{8,}$/, message: 'Password must be at least 8 characters (letters or numbers)' } })}
                        />

                        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                                <span>Remember me</span>
                            </label>
                            <button type="button" className="text-purple-500 hover:underline">
                                Forgot Password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Don’t have an account? <span className="text-purple-500 hover:underline cursor-pointer">Sign up</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login