import React, { Component } from 'react'
import {BookSearch} from './components/BookSearch.js'
//import './App.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        incomingSearchString: ''
      }
  
  }

  

  render() {
      const className = 'App'
    
    return (      
      <div className={className}>
        <div className={'container'}>
          <p>hello</p>
          <BookSearch initialString={this.state.incomingSearchString} classPrefix={className}/>
        </div>
      </div>
    )
  }
}

export default App
