import ErrorList from '../ErrorList'
import { LoadingButton } from '@mui/lab'
import TextInput from '../TextInput'
import { Stack } from '@mui/material'
import { Toast } from '@components/atoms'
import { registerSchema } from '@utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { FC, useState } from 'react'
import { getErrorMessage } from '@utils/helpers'
import { RegisterData, User } from 'types'

interface RegisterFormData {
  password: string
  email: string
  username: string
  confirm?: string
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
    formState: { errors, isSubmitting },
  } = methods

  const [serverError, setServerError] = useState<null | string>(null)

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    setServerError(null)
    delete data.confirm

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
    <>
      <ErrorList errors={errorMessages} isError={isError} />
      {serverError && <Toast message={serverError} severity='error' />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            name='username'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextInput field={field} isError={errors.username} />
            )}
          />

          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextInput field={field} isError={errors.email} />
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
          />

          <LoadingButton
            loading={isSubmitting}
            type='submit'
            variant='contained'
            color='secondary'
            sx={{ paddingY: 1, marginTop: 2 }}
          >
            Create Account
          </LoadingButton>
        </Stack>
      </form>
    </>
  )
}

export default RegisterForm
