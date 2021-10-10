import { Form } from 'components/molecules'
import { TextInput } from 'components/atoms'
import { useAuthContext } from 'hooks'
import { registerSchema } from 'utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from 'react-hook-form'
import ErrorList from 'components/molecules/ErrorList'
import { getFormErrorMessages } from 'utils/helpers'

interface RegisterFormData {
  password: string
  email: string
  username: string
  confirm: string
}

const RegisterForm = () => {
  const { register } = useAuthContext()
  const methods = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  })
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    register(data)
  }

  return (
    <FormProvider {...methods}>
      {Object.keys(errors).length ? (
        <ErrorList errors={getFormErrorMessages(errors)} />
      ) : null}

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
