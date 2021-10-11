import { ErrorList, Form } from 'components/molecules'
import { TextInput, Toast } from 'components/atoms'
import { useAuthContext } from 'hooks'
import { loginSchema } from 'utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from 'react-hook-form'
import { Container } from '@mui/material'

interface LoginFormData {
  password: string
  identifier: string
}

const LoginForm = () => {
  const { login, error: serverError } = useAuthContext()
  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  })
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await login(data)
  }

  const isError = Object.keys(errors).length ? true : false
  const errorMessages = Object.entries(errors).map(([, value]) => value.message)

  return (
    <Container maxWidth='xs'>
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
          ></Controller>

          <Controller
            name='password'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextInput field={field} isError={errors.password} />
            )}
          ></Controller>
        </Form>
      </FormProvider>
    </Container>
  )
}

export default LoginForm
