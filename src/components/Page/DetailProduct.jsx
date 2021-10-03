import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useProduct } from '../../hooks/useProduct'
import { useDevice } from '../../hooks/useDevice'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import Zoom from 'react-img-zoom'

export const DetailProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const { isLaptop } = useDevice()
  const { addFavorite } = useProduct(product)
  console.log(isLaptop)
  useEffect(() => {
    axios
      .get(`https://start-computer.herokuapp.com/api/products/${id}`)
      .then(res => setProduct(res.data))
  }, [id])
  return (
    <Container>
      {product && (
        <Zoom
          className='zoom-img'
          img={product?.image}
          zoomScale={isLaptop && 2}
          width={isLaptop ? 500 : 300}
          height={isLaptop ? 400 : 300}
        />
      )}
      <Right>
        <Name> {product?.nombre}</Name>
        <p>S./{product?.precio}</p>
        <p>marca:samsung</p>
        <Button onClick={addFavorite}>
          agregar al carrito <AiOutlineShoppingCart size={32} />
        </Button>
      </Right>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  padding-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .zoom-img {
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`
const Name = styled.h3``
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
