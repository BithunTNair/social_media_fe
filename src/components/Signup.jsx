import React from 'react'
import { useForm } from "react-hook-form";
import AxiosInstance from '../config/ApiCall';
import axios from 'axios'
import { errorToast, successToast } from '../plugins/toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setSignedupUser } from '../Redux_toolkit/signedupUserslice';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const {signedupUser}= useSelector(store=>store.signedupUser)
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
            method:'POST',
            url: `${import.meta.env.VITE_BASE_URL}/auth/register_user`,
            data: data
        }).then((response)=>{
            console.log(response.data);
            successToast('User Registration Successfull');
           
            navigate('/generate_otp');
            localStorage.setItem('signedupUser', JSON.stringify(response.data.registered_user));
            dispatch(setSignedupUser(response.data.registered_user));
            
            
            
        })
      } catch (error) {
        console.log(error.data);
        errorToast('something went wrong')
        
      }
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
                <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Create Account</h2>

                    <form action="" onSubmit={handleSubmit(onSubmit)} >
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full mb-3 sm:mb-0 p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                                    {...register('firstName', { required: 'First Name is required' })}
                                />
                                {errors.firstName && <p className='text-red-500'>{errors.firstName.message} </p>}
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                                    {...register('lastName', { required: 'Last Name is required' })}
                                />
                                {errors.lastName && <p className='text-red-500'>{errors.lastName.message} </p>}
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid Email' } }

                                )}
                            />
                            {errors.email && <p className='text-red-500'>{errors.email.message} </p>}
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                                {...register('mobileNumber', { required: 'Mobile Number is required', pattern: { value: /^[0-9]{10}$/, message: 'Mobile Number must be exactly 10 digits ' } })}
                            />
                            {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message} </p>}
                            <button type='submit' className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                            >
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