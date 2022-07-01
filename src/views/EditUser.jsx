import React from 'react'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'
import { useParams, Route, Navigate, Routes } from 'react-router-dom'

import UserForm from '../components/UserForm'

const fetchUser = async ({ queryKey, signal }) => {
  const [_key, { id }] = queryKey
  const response = await fetch(`http://localhost:3004/users/${id}`, { signal })
console.log('signal >>', signal)
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}

function EditUser() {
  const { id } = useParams()
  const { data, error, isLoading, isError } = useQuery(
    ['user', { id }],
    fetchUser
  )

  const mutation = useMutation((updatedUser) =>
    axios.put(`http://localhost:3004/users/${id}`, updatedUser)
  )

  const { isSuccess } = mutation

  const onSubmit = async (data) => {
    mutation.mutate(data)
  }

  if (isSuccess) {
    // return <Redirect to="/" />
    // return <Routes><Route path="/" render={<Navigate to="/" />} /></Routes>
    return <Navigate to="/" />
  }

  return (
    <div>
      <h2>Edit User</h2>
      <div>
        {isError && <div>{error.message}</div>}

        {isLoading && <div>Loading...</div>}

        {data && (
          <UserForm user={data} submitText="Update" submitAction={onSubmit} />
        )}
      </div>
    </div>
  )
}

export default EditUser
