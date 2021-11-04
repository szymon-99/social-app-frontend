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
  it('is enabled by default', () => {
    const submitBtn = screen.getByRole('button')

    expect(submitBtn).toBeEnabled()
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
    fireEvent.change(passwordInput, { target: { value: 'test123' } })

    fireEvent.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(emailInput).toHaveValue('test')
    expect(passwordInput).toHaveValue('test123')
    expect(mockLogin).not.toBeCalled()
  })
  it('should display proper errors when password is too short', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'test' } })

    fireEvent.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(emailInput).toHaveValue('test@gmail.com')
    expect(passwordInput).toHaveValue('test')
    expect(mockLogin).not.toBeCalled()
  })
  it('should submit without errors and is disabled when sumbitting', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'test123' } })

    fireEvent.click(submitButton)

    expect(screen.queryByRole('alert')).toBeFalsy()
    expect(submitButton).toBeDisabled()
    await waitFor(() =>
      expect(mockLogin).toBeCalledWith({
        identifier: 'test@gmail.com',
        password: 'test123',
      })
    )
  })
})
