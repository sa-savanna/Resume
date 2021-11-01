import React, { Suspense, lazy } from 'react'
import './sass/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import { Container } from 'react-bootstrap';
import Intro from './components/Pages/Intro/Intro'
import Loader from "./components/Loader/Loader"


const asyncAbout = lazy(() => {
  return import('./components/Pages/About/About')
})

const asyncPortfolio = lazy(() => {
  return import('./components/Pages/Portfolio/Portfolio')
})

const asyncContact = lazy(() => {
  return import('./components/Pages/Contact/Contact')
})


const App = () => {

  return (

    <BrowserRouter>
      <Container fluid>
        <Menu />
        <Switch>
          <Route exact path="/"><Intro /></Route>
          <Suspense fallback={<Loader />}>
            <Route path="/me" component={asyncAbout}></Route>
            <Route path="/portfolio" component={asyncPortfolio}></Route>
            <Route path="/contact" component={asyncContact}></Route>
          </Suspense>
        </Switch>
      </Container>
    </BrowserRouter>

  )
}

export default App;
