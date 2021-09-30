import React, { useState, useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'

import { useStateValue } from '../store/StateProvider'

const Subtotal = () => {
  const [state, dispatch] = useStateValue()
  const [priceTotal, setPriceTotal] = useState(0)
  let precio = 0

  useEffect(() => {
    state.basket.map(item => {
      precio = precio + item.precio
    })

    setPriceTotal(Number(precio.toFixed(2)))
  }, [state])

  return (
    <Container>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({state.basket.length} items):{' '}
              <strong>${priceTotal}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={priceTotal}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className='boton-compra'>Proceder la compra</button>
    </Container>
  )
}

export default Subtotal

const Container = styled.div`
  .subtotal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
  }
  .subtotal input {
    margin-right: 5px;
  }
  .subtotal button {
    background-color: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }
  .boton-compra {
    margin-top: 1em;
    border: none;
    border-radius: 0.5em;
    width: 100%;
    height: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`
