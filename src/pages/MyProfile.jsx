import React, { use } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Link } from 'react-router'

const MyProfile = () => {
  const { user, logOut } = use(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('You logged out successfully!!')
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl w-full p-8">
        <div className='flex gap-6 items-center'>
          <div>
            <img
              src="https://i.ibb.co.com/SXfHkZBv/icons8-user-40.png"
              alt="profile"
              className="w-28 h-28 rounded-full border-4 border-blue-400 bg-gray-500"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mt-4">Ikramul Haque</h2>
            <p className="text-gray-500">{user && user.email}</p>
          </div>
        </div>
        {/* Logout */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            {
              user ?
                (
                  <button onClick={handleLogout}>Logout</button>
                )
                :
                (<Link to='/auth/login'>Login or Register</Link>)
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyProfile