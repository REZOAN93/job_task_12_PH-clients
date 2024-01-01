import * as Form from '@radix-ui/react-form'
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form'
import { InputLabelAndTextContainer } from './styles'
interface IFormValues {
  'First Name': string
  Age: number
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
  inputType: string
  keyName: string
  isMultiText?: boolean | false
}

const Input = ({
  label,
  register,
  inputType,
  required,
  keyName,
  isMultiText
}: InputProps) => {
  return (
    <Form.Field className="grid mb-[10px]" name={keyName}>
      <InputLabelAndTextContainer>
        <Form.Label className="text-[15px] font-medium leading-[35px] ">
          {label}
        </Form.Label>
        <Form.Message
          className="text-[13px]  opacity-[0.8]"
          match="valueMissing"
        >
          Please enter your {label}
        </Form.Message>
        <Form.Message
          className="text-[13px]  opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid {label}
        </Form.Message>
      </InputLabelAndTextContainer>
      <Form.Control asChild>
        {!isMultiText ? (
          <input
            className={`box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6`}
            type={inputType}
            {...register(keyName, { required })}
          />
        ) : (
          <textarea
            className="box-border w-full bg-blackA2 h-40 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            {...register(keyName, { required })}
          />
        )}
      </Form.Control>
    </Form.Field>
  )
}
export default Input
