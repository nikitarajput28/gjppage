import React from 'react'
import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Login from './components/Login';
import HowPart from './components/HowPart'

export default function App() {
  return (
    <>
    <Header/>
    <div className='container-fluid back'>
      <div class='row '>
        <div className='col-6'>
          <Content/>
        </div>
        <div className='col-6'>
          <Login/>
        </div>
      </div>
    </div>
    <HowPart/>
    </>
  )
  }