import LoginForm from './LoginForm'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { User } from 'types'

const user = {} as User
const mockLogin = jest.fn(() => Promise.resolve(user))

describe('LoginForm', () => {
  beforeEach(() => render(<LoginForm login={mockLogin} />))

  it('has email and password fields', () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })

    expect(passwordInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
  })

  it('should not call login and display 2 errors when form is empty', async () => {
    const submitButton = screen.getByRole('button')

    fireEvent.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(2)
    expect(mockLogin).not.toBeCalled()
  })
  it('should display proper errors when email is invalid', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(passwordInput, { target: { value: 'ewa123' } })

    fireEvent.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(emailInput).toHaveValue('test')
    expect(passwordInput).toHaveValue('ewa123')
    expect(mockLogin).not.toBeCalled()
  })
  it('should display proper errors when password is too short', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'ewa@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'ewa' } })

    fireEvent.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(emailInput).toHaveValue('ewa@gmail.com')
    expect(passwordInput).toHaveValue('ewa')
    expect(mockLogin).not.toBeCalled()
  })
  it('when form is correctly done should call login with proper arguments', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'ewa@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'ewa123' } })

    fireEvent.click(submitButton)

    expect(await screen.queryAllByRole('alert')).toHaveLength(0)
    await waitFor(() =>
      expect(mockLogin).toBeCalledWith({
        identifier: 'ewa@gmail.com',
        password: 'ewa123',
      })
    )
  })
})
