import React, { Component } from 'react'
import ArrowBtn from './ArrowBtn'
import '../styles/Header.css'


class Header extends Component {

  state = {
    headerTxt: [],
  }

  headerText = []
  text = ['People may doubt what you say, but they will believe what you do.']
  index = 0

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        headerTxt: []
      })
    }, 500)
  }

  componentDidUpdate() {

    if (this.headerText.length < this.text[0].length) {
      this.headerText.push(this.text[0][this.index])
      setTimeout(() => {
        this.setState({
          headerTxt: []
        })
      }, 20)
      this.index++
    } else {
      return
    }
  }

  render() {
    return (
      <>
        <header>
          <h2 className='title'>{this.headerText}</h2>
          <h2 style={this.props.opacity ? { opacity: 1 } : { opacity: 0 }} className='myName'>
            Mateusz Ratyński
            Trener Personalny
            Dietetyk Sportowy
             Sportowiec
        </h2>
        </header>
        <ArrowBtn />
      </>
    )
  }
}

export default Header