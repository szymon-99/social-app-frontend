import { Container, Typography, TextField } from '@mui/material'
import { AppLink } from 'components'
import { Form } from 'components/organisms'

const login = () => {
  return (
    <Container>
      <Typography variant='h1'>Login</Typography>
      <Form onSubmit={() => {}}>
        <TextField variant='standard' label='login'></TextField>
        <TextField
          variant='standard'
          label='password'
          type='password'
        ></TextField>
      </Form>

      <AppLink to='/'>Home</AppLink>
    </Container>
  )
}

export default login
