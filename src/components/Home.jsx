import hero from '../assets/hero.jpg'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { GridProduct } from './GridProduct'
import { CarouselProducts } from './Base/CarouselProducts'

const Home = () => {
  const [products, setProducts] = useState()
  const [randomProducts, setRandomProducts] = useState()

  useEffect(() => {
    axios.get('https://start-computer.herokuapp.com/api/products').then(res => {
      setProducts(res.data)
      setRandomProducts(res.data.sort(() => Math.random() - 0.5))
    })
  }, [])

  return (
    <Container>
      <h1>La mejor tienda de accesorios de Computo en Abancay</h1>
      <CarouselProducts productsRandom={randomProducts?.slice(0, 5)} />
      <div className='home__rowContainer'>
        <GridProduct products={products} />
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding-top: 4em;
  h1 {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    font-family: 'Stick No Bills', sans-serif;
    text-shadow: 2px 2px black;
    color: white;
  }
  .home__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    z-index: 1;
    margin-left: 5%;
    margin-right: 5%;
    @media (min-width: 320px) and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .home__image {
    margin-bottom: -200px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
    mask-image: linear-gradient(to top, transparent 5%, black 100%);
    @media (min-width: 320px) and (max-width: 600px) {
      margin-bottom: 0;
    }
  }

  .home__rowContainer {
  }
`
