import ErrorList from '../ErrorList'
import TextInput from '../TextInput'
import { Toast } from '@components/atoms'
import { loginSchema } from '@utils/validationSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { FC } from 'react'
import { LoginData } from 'types'
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useAppSelector, useAuthActions } from '@hooks/redux'

const LoginForm: FC = () => {
  const { loginUser } = useAuthActions()
  const { isSubmitting, error } = useAppSelector((store) => store.auth)

  const methods = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    loginUser(data)
  }

  const isError = Object.keys(errors).length ? true : false
  const errorMessages = Object.values(errors).map((value) => value.message)

  return (
    <>
      <ErrorList errors={errorMessages} isError={isError} />
      {error && <Toast message={error} severity='error' />}

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
