import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonFavorite } from './Base/ButtonFavorite'
import { useProduct } from '../hooks/useProduct'
import { useStateValue } from '../store/StateProvider'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const CardProduct = ({ product }) => {
  const { addFavorite } = useProduct(product)

  return (
    <Container>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} />
        <Name>{product.nombre}</Name>
        <Price>
          S./
          {product.precio}
        </Price>
      </Link>
      <Button onClick={addFavorite}>
        agregar al carrito <AiOutlineShoppingCart size={32} />
      </Button>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 0.5em;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  a {
    text-decoration: none;
    border-radius: 0.5em;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }

  img {
    border-radius: 0.5em;
    width: 300px;
    height: 250px;
  }
  background: white;
  padding-bottom: 1em;
`
const Name = styled.h2`
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 21px;
  max-height: 48px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.7em;
  text-align: center;
  width: 95%;
`
const Price = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  svg {
    color: green;
  }
`
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
