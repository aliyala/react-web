import React, { Component } from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

const STRINGS = {
  PLACEHOLDER: 'Введите название книги или автора'
}

class BookSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchString: this.props.initialString
    }

    //this.onSearchButtonClick = this.onSearchButtonClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(evt) {
    let 
      target = evt.target,
      searchStringValue = target.value

    this.setState({
      searchString: searchStringValue
    })

    return this
  }

  render() {
    const searchString = this.props.initialString || this.state.searchString
    const className = this.props.classPrefix+'-BookSearch'
    return (
        <FormGroup>
          <FormControl 
            value={searchString} 
            onChange={this.onChange} 
            className={className+'-InputText'} 
            type="text"
            placeholder={STRINGS.PLACEHOLDER}/>
        </FormGroup>
    )
  }
}

export { BookSearch, STRINGS }
