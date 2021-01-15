import React, { lazy, Suspense } from 'react'
import './sass/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/NavBar/Menu';
import { Container } from 'react-bootstrap';
import Intro from './components/Content/Intro/Intro'


const asyncAbout = lazy(() => {
  return import('./components/Content/About/About')
})

const asyncPortfolio = lazy(() => {
  return import('./components/Content/Portfolio/Portfolio')
})

const asyncContact = lazy(() => {
  return import('./components/Content/Contact/Contact')
})

const App = () => {

  return (

    <BrowserRouter>
      <Container fluid>
        <Menu />
        <Switch>
          <Route exact path="/"><Intro /></Route>
          <Suspense fallback={<div>Loading...</div>}>
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
