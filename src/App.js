import React, { Suspense, lazy } from 'react'
import './sass/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import { Container } from 'react-bootstrap';
import Intro from './components/Pages/Intro/Intro'
import Loader from "./components/Loader/Loader"


const AsyncAbout = lazy(() => {
  return import('./components/Pages/About/About')
})

const AsyncPortfolio = lazy(() => {
  return import('./components/Pages/Portfolio/Portfolio')
})

const AsyncContact = lazy(() => {
  return import('./components/Pages/Contact/Contact')
})


const App = () => {

  return (

    <BrowserRouter>
      <Container fluid>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/me" element={<Suspense fallback={<Loader />}><AsyncAbout /></Suspense>} />
          <Route path="/portfolio" element={<Suspense fallback={<Loader />}><AsyncPortfolio /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<Loader />}><AsyncContact /></Suspense>} />
        </Routes>
      </Container>
    </BrowserRouter>

  )
}

export default App;
