import { styled, alpha } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import { useState, useEffect } from 'react'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!searchValue) return

    const fetchSearchValue = setTimeout(() => {
      console.log(`User stopped typing with: ${searchValue}`)
    }, 1000)

    return () => clearTimeout(fetchSearchValue)
  }, [searchValue])

  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInput
        placeholder='Search'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </StyledSearch>
  )
}

const StyledSearch = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  background: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    background: alpha(theme.palette.common.white, 0.25),
  },
  position: 'relative',
}))
const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: 'inherit',
  position: 'absolute',
  display: 'flex',
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
}))
const StyledInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    transition: theme.transitions.create('width'),
    width: '6ch',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    '&:focus': {
      width: '20ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}))
export default Search
