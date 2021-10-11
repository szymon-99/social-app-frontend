import { Collapse, Grow } from '@mui/material'
import { Box } from '@mui/system'
import { ErrorMessage } from 'components/atoms'
import { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'

interface ErrorListProps {
  errors: (string | undefined)[]
  isError: boolean
}

const ErrorList: FC<ErrorListProps> = ({ errors, isError }) => {
  return (
    <Grow in={isError}>
      <Box sx={{ marginBottom: 4 }}>
        <TransitionGroup>
          {errors.map((err) => (
            <Collapse key={err}>
              <ErrorMessage>{err}</ErrorMessage>
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </Grow>
  )
}

export default ErrorList
