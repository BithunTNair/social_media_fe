import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../plugins/toast';
import { useSelector } from 'react-redux';

const SetPassword = () => {
  const navigate = useNavigate();
  const {signedupUser}= useSelector(store=>store.signedupUser);
  console.log(signedupUser.id);
  
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
        url: `${import.meta.env.VITE_BASE_URL}/auth/create_password/${signedupUser._id}`,
        data: data,
        params: {id:signedupUser._id}
      }).then((response) => {
        console.log(response.data);
        successToast('Your account is created successfully');
        navigate('/login')

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
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Set Your Password
          </h2>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Create a secure password to complete your registration
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
              {...register('password', { required: 'Password is required', pattern: { value: /^[A-Za-z0-9]{8,}$/, message: 'Password must be at least 8 characters (letters or numbers)' } })}
            />

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Set Password
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SetPassword