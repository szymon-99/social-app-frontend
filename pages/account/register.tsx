import { Container, Typography, TextField } from '@mui/material'
import { AppLink } from 'components'
import { Form } from 'components'

const register = () => {
  return (
    <Container>
      <Typography variant='h1'>Register</Typography>
      <Form>
        <TextField variant='standard' label='login'></TextField>
        <TextField variant='standard' label='email'></TextField>
        <TextField
          variant='standard'
          label='password'
          type='password'
        ></TextField>
        <TextField
          variant='standard'
          label='password2'
          type='password'
        ></TextField>
      </Form>
      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default register
