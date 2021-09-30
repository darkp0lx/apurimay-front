import hero from '../assets/hero.jpg'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { GridProduct } from './GridProduct'
import { Carousel } from './Base/Carousel'

const Home = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
    axios
      .get('https://start-computer.herokuapp.com/api/products')
      .then(res => setProducts(res.data))
  }, [])

  console.log(products, 'products')

  return (
    <Container>
      <div className='home__container'>
        <img className='home__image' src={hero} alt='' />
        <div className='home__rowContainer'>
          <GridProduct products={products} />
        </div>
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding-top: 3em;
  .home {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
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
