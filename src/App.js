import React, { lazy, Suspense } from 'react'
import './sass/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/NavBar/Menu';
import { Container } from 'react-bootstrap';
import Intro from './components/Content/Intro/Intro'
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from "./sass/transition"


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
        <Route />
        <Route render={({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                onExit={(node, appears) => exit(node, appears)}
                timeout={{ enter: 750, exit: 150 }}
              >
                <Switch location={location}>
                  <Route exact path="/"><Intro /></Route>
                  <Suspense fallback={<div></div>}>
                    <Route path="/me" component={asyncAbout}></Route>
                    <Route path="/portfolio" component={asyncPortfolio}></Route>
                    <Route path="/contact" component={asyncContact}></Route>
                  </Suspense>
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }} />
      </Container>
    </BrowserRouter>

  )
}

export default App;
