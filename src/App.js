import React from 'react';
import './sass/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/NavBar/Menu';
import About from './components/Content/About/About';
import Contact from './components/Content/Contact/Contact';
import Portfolio from './components/Content/Portfolio/Portfolio';
import { Container } from 'react-bootstrap';
import Intro from './components/Content/Intro/Intro'


const App = () => {
  return (

    <BrowserRouter>
      <Container fluid>
        <Menu />
        <Switch>
          <Route exact path="/"><Intro /> </Route>
          <Route path="/me"><About /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </Container>
    </BrowserRouter>

  )
}

export default App;
