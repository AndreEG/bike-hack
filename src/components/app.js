import React from 'react'
import { render } from 'react-dom'

import Header from '../containers/container-header'
import Section from '../containers/container-section'
import MyMap  from './map'
import Footer from './footer';



const App = () => (
  <div>
  <Header/>
  <Section/>
  <MyMap />
  <Footer/>
  </div>
);
export default App
