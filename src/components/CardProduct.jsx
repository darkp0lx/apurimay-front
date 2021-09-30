import React from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { useStateValue } from '../store/StateProvider'

export const CardProduct = ({ product }) => {
  const [data, dispatch] = useStateValue()

  const addFavorite = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: product
    })
  }
  return (
    <Container>
      <img src={product.image} />
      <Name>{product.nombre}</Name>
      <Price>
        Precio
        <RiMoneyDollarCircleFill />
        {product.precio}
      </Price>
      <Button onClick={addFavorite}>
        agregar al carrito <AiOutlineShoppingCart />
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
  background: #f0c14b;
  width: 250px;
  height: 50px;
  color: white;
  font-weight: bold;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
