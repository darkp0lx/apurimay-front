import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

export const Search = () => {
  return (
    <Container className='header__search'>
      <input type='text' className='header__searchInput' />
      <SearchIcon className='header__searchIcon' />
    </Container>
  )
}
const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 24px;
  margin-right: 10px;

  .header__searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }
`
