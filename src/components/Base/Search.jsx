import axios from 'axios'
import styled from 'styled-components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

import { SearchProduct } from '../Search/SearchProduct'

export const Search = () => {
  const [input, setInput] = useState()
  const [productsSearch, setProductsSearch] = useState()

  const onSearch = () => {
    axios
      .get(`https://start-computer.herokuapp.com/api/product/${input}`)
      .then(res => setProductsSearch(res.data))
  }

  const onClickSearch = () => {
    setInput('')
    setProductsSearch()
  }

  return (
    <Container className='header__search'>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        type='text'
        className='header__searchInput'
      />
      <SearchIcon onClick={onSearch} className='header__searchIcon' />
      <SearchGrid>
        {productsSearch?.map(product => (
          <Link to={`/product/${product.id}`} onClick={onClickSearch}>
            <SearchProduct product={product} />
          </Link>
        ))}
      </SearchGrid>
    </Container>
  )
}
const SearchGrid = styled.div`
  width: 100%;
  position: absolute;
  top: 32px;
  right: 0;
  left: 0;
  height: auto;
  background: white;
`
const Container = styled.div`
  position: relative;
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
