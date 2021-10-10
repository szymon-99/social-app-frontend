import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  password: yup
    .string()
    .required('Please provide password')
    .min(6, 'Password must be at least 6 characters')
    .max(18, "Password can't be longer than 18 characters")
    .trim(),
  confirm: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Password needs to match'),
  username: yup
    .string()
    .required('Please provide username')
    .min(4, 'Username must be at least 4 characters')
    .max(18, "Username can't be longer than 18 characters")
    .trim(),
  email: yup
    .string()
    .email('Please provide valid email address')
    .required('Email must be provided'),
})

export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required('Please provide password')
    .min(6, 'Password must be at least 6 characters')
    .max(18, "Password can't be longer than 18 characters")
    .trim(),
  identifier: yup
    .string()
    .email('Please provide valid email address')
    .required('Email must be provided'),
})
