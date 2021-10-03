import React from 'react'
import styled from 'styled-components'
import banner from '../assets/banner.jpg'
import { useStateValue } from '../store/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <Container>
      <div className='checkout'>
        <img src={banner} alt='' className='checkout__ad' />
        <div className='checkout__container'>
          <div className='checkout__left'>
            <div>
              <h2 className='checkout__title'>Tu carrito de compra</h2>
              {basket.map(item => (
                <CheckoutProduct item={item} />
              ))}
            </div>
          </div>
          <div className='checkout__right'>
            <Subtotal />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Checkout

const Container = styled.div`
  padding-top: 3.5em;
  .checkout__ad {
    width: 100%;
    margin-bottom: 10px;
  }

  .checkout__container {
    margin: 1em;
    display: block;
  }
  .checkout__right {
    display: block;
  }
  @media (min-width: 768px) {
    .checkout__right {
      display: block;
    }
    .checkout__left {
      width: 40%;
    }

    .checkout__container {
      margin: 1em;
      display: flex;
      justify-content: space-evenly;
    }
  }
`
