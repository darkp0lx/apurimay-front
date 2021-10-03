import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

export const CarouselProducts = ({ productsRandom }) => {
  return (
    <Container>
      <Carousel>
        {productsRandom?.map(product => (
          <ItemCarousel>
            <img src={product.image} />
          </ItemCarousel>
        ))}
      </Carousel>
    </Container>
  )
}
const ItemCarousel = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    height: 500px;
    margin: 0 auto;
    img {
      height: 100%;
    }
  }
`
const Container = styled.div`
  .carousel.carousel-slider .control-arrow {
    z-index: 0;
  }
  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    background: black;
  }
`
