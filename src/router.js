import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

// Components
import Home from './components/pages/home'
import Start from './components/pages/start'
import BingoCards from './components/pages/cards'

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact={true} />
    <Route path="/start" component={Start} exact={true} />
    <Route path="/cards" component={BingoCards} exact={true} />
  </BrowserRouter>
)

export default Router
