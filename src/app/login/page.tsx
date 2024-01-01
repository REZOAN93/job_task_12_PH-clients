'use client'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { login } from '@/apis/login'
import { LoggedUserAtom } from '@/atoms'
import { Button } from '@/components/button'
import Container from '@/components/container'
import CustomFooter from '@/components/footer'
import CustomHeader from '@/components/header'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const { push } = useRouter()
  const [password, setPassword] = useState<string>('')
  const [, setLoggedUser] = useAtom(LoggedUserAtom)
  const handleLogin = async () => {
    const data = await login({ email: email, password: password })
    // eslint-disable-next-line no-console
    if (data.type == 'success') {
      localStorage.setItem('loggedUser', JSON.stringify(data.data.data))
      setLoggedUser(data.data.data)
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
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="password"
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          color="gray"
          className="mt-5"
          onClick={() => handleLogin()}
        >
          SUBMIT
        </Button>
      </div>
      <CustomFooter></CustomFooter>
    </Container>
  )
}

export default Login
