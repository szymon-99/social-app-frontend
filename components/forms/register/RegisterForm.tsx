import ErrorList from '../ErrorList'
import Form from '../Form'
import TextInput from '../TextInput'
import { Toast } from '@components/atoms'
import { registerSchema } from '@utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from 'react-hook-form'
import { FC, useState } from 'react'
import { getErrorMessage } from '@utils/helpers'
import { RegisterData, User } from 'types'

interface RegisterFormData {
  password: string
  email: string
  username: string
  confirm: string
}
interface RegisterFormProps {
  register: (data: RegisterData) => Promise<User | undefined>
}

const RegisterForm: FC<RegisterFormProps> = ({ register }) => {
  const methods = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  })
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const [serverError, setServerError] = useState<null | string>(null)

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    setServerError(null)

    try {
      await register(data)
    } catch (error) {
      const message = getErrorMessage(error)

      setServerError(message)
    }
  }

  const isError = Object.keys(errors).length ? true : false
  const errorMessages = Object.values(errors).map((value) => value.message)

  return (
    <FormProvider {...methods}>
      <ErrorList errors={errorMessages} isError={isError} />
      {serverError && <Toast message={serverError} severity='error' />}

      <Form onSubmit={handleSubmit(onSubmit)} actionName='Create Account'>
        <Controller
          name='username'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextInput field={field} isError={errors.username} />
          )}
        ></Controller>

        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextInput field={field} isError={errors.email} />
          )}
        ></Controller>

        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextInput field={field} isError={errors.password} />
          )}
        ></Controller>
        <Controller
          name='confirm'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextInput
              field={field}
              label='confirm password'
              isError={errors.confirm}
            />
          )}
        ></Controller>
      </Form>
    </FormProvider>
  )
}

export default RegisterForm
