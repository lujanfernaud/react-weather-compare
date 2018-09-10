import React, { Component } from 'react'
import styled from 'styled-components'

const SearchBar = styled.div`
  margin-bottom: 1.75rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: .25rem;
`

class Search extends Component {
  constructor(props) {
    super(props)
    this.inputCity1 = React.createRef()
    this.inputCity2 = React.createRef()

    this.handleInput = this._handleInput.bind(this)
    this.handleClick = this._handleClick.bind(this)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  render() {
    return (
      <SearchBar>
        <form action='' onSubmit={this.handleSubmit}>

          <div className='field is-horizontal'>

            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={this.inputCity1}
                    onInput={this.handleInput}
                    type='text'
                    className='input'
                    placeholder={this.props.city1.name}
                    autoFocus
                    required minLength='1'
                  />
                </div>
              </div>

              <div className='field'>
                <div className='control'>
                  <input
                    ref={this.inputCity2}
                    onInput={this.handleInput}
                    type='text'
                    className='input'
                    placeholder={this.props.city2.name}
                    required minLength='1'
                  />
                </div>
              </div>

              <div className='field'>
                <div className='control'>
                  <button
                    className='button is-primary is-fullwidth'
                    onClick={this.handleClick}>
                    Compare
                  </button>
                </div>
              </div>
            </div>

          </div>

        </form>
      </SearchBar>
    )
  }

  // private

  _handleInput(event) {
    const field = event.target

    if (!field.validity.valid) {
      this._setFieldAsInvalid(field)
    } else {
      this._setFieldAsValid(field)
    }
  }

  _setFieldAsInvalid(field) {
    field.classList.remove('is-primary')
    field.classList.add('is-danger')
  }

  _setFieldAsValid(field) {
    field.classList.remove('is-danger')
    field.classList.add('is-primary')
  }

  _handleClick(event) {
    const inputCity1 = this.inputCity1.current
    const inputCity2 = this.inputCity2.current

    if (!inputCity1.validity.valid) {
      this._setFieldAsInvalid(inputCity1)
    }

    if (!inputCity2.validity.valid) {
      this._setFieldAsInvalid(inputCity2)
    }
  }

  async _handleSubmit(event) {
    event.preventDefault()

    const city1 = this.inputCity1.current.value
    const city2 = this.inputCity2.current.value

    this.props.onSubmit(city1, city2)
  }
}

export default Search
