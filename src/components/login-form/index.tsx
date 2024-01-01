'use client'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@radix-ui/react-form'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import PasswordFormField from './password-form-field'
import { Div1, Div2, H1, LoginButton, LoginHeaderDiv, P1 } from './styles'
import UsernameFormField from './username-Form-field'

import { ILoginAPIInputs, login } from '@/apis/login'

const LoginSchema = z.object({
  username: z.string(),
  password: z.string().min(3).max(7)
})

const defaultValues = {
  username: '',
  password: ''
}

type LoginSchemaType = z.infer<typeof LoginSchema>

const LoginFormPage: React.FC = () => {
  const router = useRouter()
  const { mutate } = useMutation({
    mutationFn: (values: ILoginAPIInputs) => login(values)
  })

  // const router = useRouter();
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues
  })

  // const client = useQueryClient();

  async function onSubmit(values: LoginSchemaType) {
    //usemutation
    console.log(values, 'values')
    mutate(values, {
      onError: () => {},
      onSettled: () => {},
      onSuccess: () => {
        router.replace('/')
      }
    })
  }
  return (
    <>
      <FormProvider {...methods}>
        <Form.Root onSubmit={methods.handleSubmit(onSubmit)}>
          <Div1>
            <Div2>
              <LoginHeaderDiv>
                <H1>Login</H1>
                <P1>Please enter you Login and your Password</P1>
              </LoginHeaderDiv>
              <UsernameFormField />
              <PasswordFormField />
              <LoginButton>
                <button>Login</button>
              </LoginButton>
            </Div2>
          </Div1>
        </Form.Root>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  )
}

export default LoginFormPage
