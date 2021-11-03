import ErrorList from '../ErrorList'
import Form from '../Form'
import TextInput from '../TextInput'
import { Toast } from '@components/atoms'
import { loginSchema } from '@utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { getErrorMessage } from '@utils/helpers'
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from 'react-hook-form'
import { FC, useState } from 'react'
import { LoginData, User } from 'types'

interface LoginFormProps {
  login: (data: LoginData) => Promise<User | undefined>
}

const LoginForm: FC<LoginFormProps> = ({ login }) => {
  const methods = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const [serverError, setServerError] = useState<null | string>(null)

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    setServerError(null)

    try {
      await login(data)
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

      <Form onSubmit={handleSubmit(onSubmit)} actionName='Login'>
        <Controller
          name='identifier'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextInput
              field={field}
              isError={errors.identifier}
              label='email'
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextInput field={field} isError={errors.password} />
          )}
        />
      </Form>
    </FormProvider>
  )
}

export default LoginForm
