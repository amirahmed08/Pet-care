import React, { use } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const MyProfile = () => {
    const {user} = use(AuthContext)
  return (
    <div>{user && user.email}</div>
  )
}

export default MyProfile