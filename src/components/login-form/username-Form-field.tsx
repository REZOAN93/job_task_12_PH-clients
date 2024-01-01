import * as Form from '@radix-ui/react-form'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const UsernameFormField: React.FC = () => {
  const { register } = useFormContext()

  return (
    <Form.Field className="grid mb-[10px]" name="username">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] text-grey">
          username
        </Form.Label>
        <Form.Message
          className="text-[13px] text-grey font-bold opacity-[0.9]"
          match="valueMissing"
        >
          Please Provide valid username
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 border-solid border-white border-1"
          type="text"
          required
          {...register('username')}
        />
      </Form.Control>
    </Form.Field>
  )
}

export default UsernameFormField
