import { Collapse, Grow, Alert } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'

interface ErrorListProps {
  errors: (string | undefined)[]
  isError: boolean
}

const ErrorList: FC<ErrorListProps> = ({ errors, isError }) => {
  return (
    <Grow in={isError}>
      <Box>
        <TransitionGroup>
          {errors.map((err) => (
            <Collapse key={err}>
              <Alert sx={{ marginBottom: 1 }} severity='error'>
                {err}
              </Alert>
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </Grow>
  )
}

export default ErrorList
