import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
            <header>
              <div className='logo'>
                    My Project Logo
              </div>
            </header>
            <section>
                    <div className='card'>
                      <img src='/1.jpg' alt='v1'/>
                      <label>Project1</label>
                    </div>
                     <div className='card'>
                      <img src='/2.jpg' alt='v1'/>
                      <label>Project2</label>
                    </div>
                                        <div className='card'>
                      <img src='/3.jpg' alt='v1'/>
                      <label>Project3</label>
                    </div>
                                        <div className='card'>
                      <img src='/4.jpg' alt='v1'/>
                      <label>Project4</label>
                    </div>
                                        <div className='card'>
                      <img src='/5.jpg' alt='v1'/>
                      <label>Project5</label>
                    </div>
                                        <div className='card'>
                      <img src='/6.jpg' alt='v1'/>
                      <label>Project6</label>
                    </div>
                                      
            </section>
            <footer>
              Copyright @ To Dr. Deepak.V
            </footer>
      </>
    )
  }
}
