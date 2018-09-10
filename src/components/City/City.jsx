import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 100%;
  padding: 1.5rem;
  text-transform: capitalize;
  background-color: #fff;
  border-radius: .25rem;

  &:not(:last-child) {
    margin-bottom: 1.75rem;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0 !important;
    flex-basis: 48.5%;

    &:not(:last-child) {
      margin-right: 1.75rem;
    }
  }
`

const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Heading = styled.h2`
  margin-bottom: 1rem;
  min-height: 2.25rem;
  text-align: center;
`

const Status = styled.p`
  text-align: center;
`

const Temperature = styled.p`
  height: 1.85rem;
`

class City extends Component {
  render() {
    return (
      <Card>
        <DataContainer>
          <Heading className='is-size-4'>
            {this.props.city.name}
          </Heading>

          <Status>
            {this.props.city.status}
          </Status>

          <Icon
            iconCode={this.props.city.iconCode}
          />

          <Temperature>
            {this._setTemp()}
          </Temperature>
        </DataContainer>
      </Card>
    )
  }

  // private

  _setTemp() {
    if (this.props.city.temp.length !== 0) {
      return this.props.city.temp + ' ℃'
    } else {
      return ''
    }
  }
}

export default City
