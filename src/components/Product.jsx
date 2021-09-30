import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../store/StateProvider'

const Product = ({ title, image, rating, price }) => {
  const [state, dispatch] = useStateValue()

  function uuidv4 () {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))).toString(
        16
      )
    )
  }
  const addToBasket = () => {
    const id = uuidv4()
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <Container>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className='product__rating'>
        <p>{rating} 🌞 </p>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </Container>
  )
}

export default Product

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 300px;
  max-height: 00px;
  background-color: #fff;
  z-index: 1;
  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
  @media (min-width: 320px) and (max-width: 600px) {
    width: 230px !important;
  }
  .product__info {
    height: 100px;
    margin-bottom: 15px;
  }
  .product__price {
    margin-top: 5px;
  }
`
