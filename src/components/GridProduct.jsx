import styled from 'styled-components'
import { CardProduct } from './CardProduct'

export const GridProduct = ({ products }) => {
  return (
    <Container>
      {products?.map(product => (
        <CardProduct product={product} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 10px;

  justify-content: center;
  flex-wrap: wrap;
`
