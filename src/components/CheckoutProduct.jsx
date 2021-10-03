import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../store/StateProvider'
import { FaTrashAlt } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

const CheckoutProduct = ({ item }) => {
  const [state, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'DELETE_FROM_BASKET',
      id: item.id
    })
  }
  return (
    <Container>
      <img src={item.image} alt='' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <h2 className='checkoutProduct__title'>{item.nombre}</h2>
        <Features>
          <p className='checkoutProduct__price'>
            Precio:
            <strong style={{ margin: '0 5px' }}>{item.precio}</strong>
            <RiMoneyDollarCircleFill size={32} color={'green'} />
          </p>
          <div className='title__containerPrice'></div>
          <div className='checkoutProduct__rating'>
            <p>3 🌟 </p>
          </div>
        </Features>
        <button onClick={removeFromBasket}>
          Quitar del carrito
          <FaTrashAlt size={30} />
        </button>
      </div>
    </Container>
  )
}

export default CheckoutProduct

const Container = styled.div`
  width: 285px;
  border-radius: 1em;
  margin-top: 1em;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  img {
    width: 100%;
    border-radius: 0.5em;
  }
  .checkoutProduct__info {
    padding: 1em;
    h2 {
      margin-top: 0;
    }
  }
  .checkoutProduct__info button {
    width: 250px;
    height: 50px;
    border-radius: 0.5em;
    background: #ffcc01;
    border: none;
    border-top: 10px;
    color: black;
    font-weight: bold;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
    }
  }
  .checkoutProduct__price {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;

    .checkoutProduct__info {
      padding-left: 20px;
    }

    .checkoutProduct__image {
      object-fit: contain;
    }
    .checkoutProduct__title {
      font-size: 17px;
      font-weight: 800;
    }
  }
`
const Features = styled.div`
  display: flex;
  justify-content: space-between;
`
