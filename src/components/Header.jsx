import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../store/StateProvider'
import { auth } from '../firebase'
import { device } from '../styles/theme'
import { Search } from './Base/Search'
const Header = () => {
  const history = useHistory()
  const [state, dispatch] = useStateValue()

  const handleAuthentication = () => {
    auth.signOut()
    auth.onAuthStateChanged(authUser => {
      if (!authUser) {
        //the user just logged in /
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }
  return (
    <Container>
      <div className='header'>
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/')}
          className='header__logo'
          src='/logo.png'
          alt=''
        />
        <Search />
        <div className='header__nav'>
          <div
            onClick={() => handleAuthentication()}
            className='header__option'
          >
            <Link
              className='header__option__button'
              to={!state.user && '/login'}
            >
              <p className='header__optionLineOne'>Hello {state.user?.email}</p>
              <p className='header__optionLineTwo'>
                {state.user ? 'Sign Out' : 'sign In'}
              </p>
            </Link>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>&Order</span>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your </span>
            <span className='header__optionLineOne'>Prime </span>
          </div>
          <Link to='/checkout'>
            <div className='header__optionBasket'>
              <ShoppingCartIcon />
              <span className='header__optionLineTwo'>
                {state.basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #19091d;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header__option__button {
    text-decoration: none;
    color: white;
  }
  .header__option__button p {
    margin: 0;
  }
  .header__logo {
    width: 150px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
    @media ${device.mobileS} {
      width: 100px;
      object-fit: contain;
      margin: 0 10px;
      margin-top: 5px;
    }
  }

  .header__optionLineOne {
    font-size: 10px;
  }
  .header__optionLineTwo {
    font-size: 13px;
    font-weight: 800;
  }
  .header__searchIcon {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
  }
  .header__optionBasket {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 800;
    color: white;
    margin-right: 10px;
  }
  .header__nav {
    display: flex;
    justify-content: space-evenly;
  }
  .header__option {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    @media (min-width: 320px) and (max-width: 600px) {
      display: none;
    }
  }
`
