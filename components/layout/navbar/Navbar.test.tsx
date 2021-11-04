import Navbar from './Navbar'
import { render, screen } from '@testing-library/react'

let mockIsLoggedIn = false

jest.mock('@hooks/useUser', () => {
  return {
    useUser: jest.fn(() => ({ user: { isLoggedIn: mockIsLoggedIn } })),
  }
})

it('should render Login Buttons when user is not logged in', () => {
  render(<Navbar />)
  const signInButton = screen.queryByText(/sign in/i)
  const signUpButton = screen.queryByText(/sign up/i)

  expect(signInButton).toBeInTheDocument()
  expect(signUpButton).toBeInTheDocument()
})

it('should hide add post button when user is logged out', () => {
  render(<Navbar />)
  const createLink = screen.queryByText(/create your ad/i)

  expect(createLink).not.toBeInTheDocument()
})

it('should hide Login buttons when user is logged in', () => {
  mockIsLoggedIn = true
  render(<Navbar />)

  const signInButton = screen.queryByText(/sign in/i)
  const signUpButton = screen.queryByText(/sign up/i)

  expect(signInButton).not.toBeInTheDocument()
  expect(signUpButton).not.toBeInTheDocument()
})

it('should show add post button when user is loggen in', () => {
  render(<Navbar />)
  const createLink = screen.queryByText(/create your ad/i)

  expect(createLink).toBeInTheDocument()
})
