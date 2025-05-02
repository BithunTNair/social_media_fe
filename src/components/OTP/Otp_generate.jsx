import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import { errorToast, successToast } from '../../plugins/toast';
import { useNavigate } from 'react-router-dom';

export const Otp_generate = () => {
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
                url: `${import.meta.env.VITE_BASE_URL}/auth/generate_otp`,
                data: data
            }).then((response) => {
                console.log(response.data);
                successToast('OTP sent to your email');
                navigate('/verify_otp')

            })
        } catch (error) {
            console.log(error.data);
            errorToast('something went wrong')

        }
    }

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
                <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">OTP Generation</h2>
                    <p className="text-center text-gray-600 dark:text-gray-400">An OTP will be sent to your email.</p>
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid Email' } })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message} </p>}
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-200 hover:cursor-pointer"
                        >
                            Generate OTP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
