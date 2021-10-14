import { Form } from 'components/molecules'
import { TextInput, Toast } from 'components/atoms'
import { useUser } from 'hooks'
import { registerSchema } from 'utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from 'react-hook-form'
import ErrorList from 'components/molecules/ErrorList'
import { Container } from '@mui/material'
import { useState } from 'react'
import { registerUser } from 'utils/axiosHelpers'
import { getErrorMessage } from 'utils/helpers'

interface RegisterFormData {
  password: string
  email: string
  username: string
  confirm: string
}

const RegisterForm = () => {
  const { mutateUser } = useUser({
    redirectIfFound: true,
    redirectTo: '/account/dashboard',
  })

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
      mutateUser(await registerUser(data))
    } catch (error) {
      const message = getErrorMessage(error)

      setServerError(message)
    }
  }

  const isError = Object.keys(errors).length ? true : false
  const errorMessages = Object.entries(errors).map(([, value]) => value.message)

  return (
    <Container maxWidth='xs'>
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
    </Container>
  )
}

export default RegisterForm
