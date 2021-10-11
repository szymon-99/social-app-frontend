import { styled, alpha } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import { useState } from 'react'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue)
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
  display: 'flex',
  minWidth: 150,
  alignItems: 'center',
  padding: theme.spacing(1, 2),
}))
const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(1),
}))
const StyledInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    transition: theme.transitions.create('width'),
    width: '10ch',
    '&:focus': {
      width: '20ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}))
export default Search
