import ErrorList from '../ErrorList'
import TextInput from '../TextInput'
import { Toast } from '@components/atoms'
import { loginSchema } from '@utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { getErrorMessage } from '@utils/helpers'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { FC, useState } from 'react'
import { LoginData, User } from 'types'
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'

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
    formState: { errors, isSubmitting },
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
    <>
      <ErrorList errors={errorMessages} isError={isError} />
      {serverError && <Toast message={serverError} severity='error' />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
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
          <LoadingButton
            loading={isSubmitting}
            variant='contained'
            type='submit'
            sx={{ color: 'common.white', paddingY: 1 }}
          >
            Login
          </LoadingButton>
        </Stack>
      </form>
    </>
  )
}

export default LoginForm
