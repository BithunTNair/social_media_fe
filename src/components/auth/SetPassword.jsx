import React from 'react'

const SetPassword = () => {
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

        <form className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
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