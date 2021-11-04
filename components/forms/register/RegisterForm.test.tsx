import RegisterForm from './RegisterForm'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { User } from 'types'

const user = {} as User
const mockRegister = jest.fn(() => Promise.resolve(user))

describe('RegisterForm', () => {
  beforeEach(() => render(<RegisterForm register={mockRegister} />))

  it('has login, email and password fields', () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const confirmInput = screen.getByRole('textbox', {
      name: 'confirm password',
    })

    expect(emailInput).toBeInTheDocument()
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(confirmInput).toBeInTheDocument()
  })
  it('is enabled by default', () => {
    const submitBtn = screen.getByRole('button')

    expect(submitBtn).toBeEnabled()
  })

  it('displays all error messages when submitted empty', async () => {
    const submitBtn = screen.getByRole('button')

    fireEvent.click(submitBtn)

    expect(await screen.findAllByRole('alert')).toHaveLength(4)
    expect(mockRegister).not.toHaveBeenCalled()
  })
  it('displays error message when email is invalid', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const confirmInput = screen.getByRole('textbox', {
      name: 'confirm password',
    })
    const submitBtn = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(usernameInput, { target: { value: 'test123' } })
    fireEvent.change(passwordInput, { target: { value: 'test123' } })
    fireEvent.change(confirmInput, { target: { value: 'test123' } })

    fireEvent.click(submitBtn)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(mockRegister).not.toHaveBeenCalled()
  })
  it('displays error message when username is too short', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const confirmInput = screen.getByRole('textbox', {
      name: 'confirm password',
    })
    const submitBtn = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(usernameInput, { target: { value: 'te' } })
    fireEvent.change(passwordInput, { target: { value: 'test123' } })
    fireEvent.change(confirmInput, { target: { value: 'test123' } })

    fireEvent.click(submitBtn)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(mockRegister).not.toHaveBeenCalled()
  })
  it('displays error message when password is too short', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const confirmInput = screen.getByRole('textbox', {
      name: 'confirm password',
    })
    const submitBtn = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(usernameInput, { target: { value: 'test123' } })
    fireEvent.change(passwordInput, { target: { value: 'test' } })
    fireEvent.change(confirmInput, { target: { value: 'test' } })

    fireEvent.click(submitBtn)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(mockRegister).not.toHaveBeenCalled()
  })
  it("displays error message when password doesn't match", async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const confirmInput = screen.getByRole('textbox', {
      name: 'confirm password',
    })
    const submitBtn = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(usernameInput, { target: { value: 'test123' } })
    fireEvent.change(passwordInput, { target: { value: 'test123' } })
    fireEvent.change(confirmInput, { target: { value: 'test' } })

    fireEvent.click(submitBtn)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(mockRegister).not.toHaveBeenCalled()
  })
  it('submits without errors and is disabled when submitting', async () => {
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const usernameInput = screen.getByRole('textbox', { name: 'username' })
    const passwordInput = screen.getByRole('textbox', { name: 'password' })
    const confirmInput = screen.getByRole('textbox', {
      name: 'confirm password',
    })
    const submitBtn = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(usernameInput, { target: { value: 'test123' } })
    fireEvent.change(passwordInput, { target: { value: 'test123' } })
    fireEvent.change(confirmInput, { target: { value: 'test123' } })

    fireEvent.click(submitBtn)

    expect(screen.queryByRole('alert')).toBeFalsy()
    expect(submitBtn).toBeDisabled()
    await waitFor(() =>
      expect(mockRegister).toHaveBeenCalledWith({
        username: 'test123',
        email: 'test@gmail.com',
        password: 'test123',
      })
    )
  })
})
