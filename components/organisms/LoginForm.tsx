import { Form } from 'components/molecules'
import { TextInput } from 'components/molecules'
import { useAuthContext } from 'hooks'
import { loginSchema } from 'utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from 'react-hook-form'

interface LoginFormData {
  password: string
  identifier: string
}

const LoginForm = () => {
  const { login } = useAuthContext()
  const methods = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  })
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    login(data)
  }

  return (
    <FormProvider {...methods}>
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
  )
}

export default LoginForm
