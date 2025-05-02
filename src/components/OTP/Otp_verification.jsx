import React from 'react'
import { useForm } from 'react-hook-form';
import { errorToast, successToast } from '../../plugins/toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Otp_verification = () => {
  const navigate= useNavigate()
      const {
              register,
              handleSubmit,
              watch,
              formState: { errors },
          } = useForm();
          const onSubmit=(data)=>{
            console.log(data);
            const otp= data.otp;
            const joinedOTP= otp.join('');
            console.log(joinedOTP);
            
            try {
                axios({
                    method:'POST',
                    url: `${import.meta.env.VITE_BASE_URL}/auth/verify_otp`,
                    data: { otp: joinedOTP }
                }).then((response)=>{
                    console.log(response.data);
                    successToast('OTP Verification successfull');
                    navigate('/set_password')
                    
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
          Verify OTP
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Enter the 6-digit code sent to your email
        </p>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
          <div className="flex justify-center gap-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                {...register( `otp[${index}]` , { required: 'OTP is required', pattern: { value: /^\d{1}$/, message: 'OTP must be exactly 6 digits' } })}
                className="w-10 h-12 text-center border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
               
              />
            ))}
             {errors.otp && <p className='text-red-500'>{errors.otp.message} </p>}
          </div>

          <div className="text-sm text-center text-gray-600 dark:text-gray-400">
            Didn’t receive the code?{' '}
            <button type="button" className="text-purple-500 hover:underline" onClick={''} >
              Resend
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
   </>
  )
}

export default Otp_verification