'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { register } from '@/apis/login'
import { Button } from '@/components/button'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'

const Register = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useRouter()
  const [userName, setUserName] = useState<string>('')
  const [isAdmin, setIsAdmin] = useState(false)
  const handleRegister = async () => {
    const data = await register({
      email: email,
      password: password,
      isAdmin: isAdmin,
      userName: userName
    })
    // eslint-disable-next-line no-console
    console.log(data, 'data')
    if (data.type == 'success') {
      localStorage.setItem('loggedUser', JSON.stringify(data.data.data))
      push('/questions')
    }
  }
  return (
    <Container>
      <CustomHeader></CustomHeader>
      <div>
        <input
          type="text"
          id="website-admin"
          className="mt-4 rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="website-admin"
          className="mt-4 rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          id="password"
          className="mt-4 rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center ps-3">
          <input
            id="isAdmin-checkbox"
            type="checkbox"
            checked={isAdmin}
            onChange={() => setIsAdmin((prevState) => !prevState)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="isAdim-checkbox"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            is Admin
          </label>
        </div>

        <br />
        <Button
          type="submit"
          color="gray"
          className="mt-5"
          onClick={() => handleRegister()}
        >
          SUBMIT
        </Button>
      </div>
      <CustomFooter></CustomFooter>
    </Container>
  )
}

export default Register
