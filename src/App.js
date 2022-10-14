import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/common/header/Header'
import Body from './components/common/Body/body'
import Net from './components/common/net/Net'
import Form from './components/common/form/form'
import Footer from './components/common/footer/footer'

import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Net />
      <Form />
      <Footer />
    </BrowserRouter>
    
  )
}

export default App;
