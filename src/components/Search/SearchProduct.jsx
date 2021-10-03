import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SearchProduct = ({ product }) => {
  return (
    <Container>
      <Name>{product.nombre.toLowerCase()}</Name>
    </Container>
  )
}
const Container = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Name = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 15px;
  max-height: 48px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.7em;
  text-align: center;
  width: 100%;
`
