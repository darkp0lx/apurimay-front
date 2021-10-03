import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './store/StateProvider'
import { DetailProduct } from './components/Page/DetailProduct'
function App () {
  const [data, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user just logged in /
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/product/:id'>
            <Header />
            <DetailProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
