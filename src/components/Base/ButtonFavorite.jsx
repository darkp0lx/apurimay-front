import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styled from 'styled-components'
import { useProduct } from '../../hooks/useProduct'

export const ButtonFavorite = ({ product }) => {
  const { addFavorite } = useProduct(product)
  return (
    <Button onClick={addFavorite()}>
      agregar al carrito <AiOutlineShoppingCart size={32} />
    </Button>
  )
}

const Button = styled.button`
  border-radius: 0.5em;
  cursor: pointer;
  background: #ffcc01;
  width: 250px;
  height: 50px;
  color: black;
  font-weight: bold;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  outline: none;

  :active {
    transform: scale(0.9);
  }
`
