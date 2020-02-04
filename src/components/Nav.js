import React from 'react'
import $ from 'jquery'
import '../styles/Nav.css'



class Nav extends React.Component {
  state = {
    value: ''
  }

  clickHandle = (e) => {
    console.log(e.target.name)
    this.setState({
      value: e.target.name
    })
  }

  componentDidUpdate() {
    let $navHeight = $('nav').height();
    let $sectionOne = document.querySelector('.sectionOne').offsetTop;
    let $sectionTwo = $('.sectionTwo').offset().top;
    let $sectionTariff = $('.tariff').offset().top;
    let $sectionContact = $('footer').offset().top;

    if (this.state.value === "Start") {
      $('html').animate({
        scrollTop: 0
      }, 1000)

      this.setState({
        value: ''
      })
    } else if (this.state.value === 'About') {
      $('html').animate({
        scrollTop: $sectionOne - $navHeight
      }, 1000)

      this.setState({
        value: ''
      })

    } else if (this.state.value === 'Offer') {
      $('html').animate({
        scrollTop: $sectionTwo - $navHeight
      }, 1000)

      this.setState({
        value: ''
      })
    } else if (this.state.value === 'Tariff') {
      $('html').animate({
        scrollTop: $sectionTariff - $navHeight
      }, 1000)

      this.setState({
        value: ''
      })
    } else if (this.state.value === 'Contact') {
      $('html').animate({
        scrollTop: $sectionContact - $navHeight
      }, 1000)

      this.setState({
        value: ''
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  //W środku spróbować jQuery
  handleScroll = () => {
    let scrollHeight = window.scrollY
    const navA = document.querySelectorAll('nav a')
    const nav = (document.querySelector('nav').clientHeight) + 1
    const sectionOne = document.querySelector('.sectionOne').offsetTop
    const sectionTwo = document.querySelector('.sectionTwo').offsetTop
    const sectionTariff = document.querySelector('.tariff').offsetTop
    const sectionContact = document.querySelector('footer').offsetTop

    let htmlHeight = document.querySelector('body').clientHeight
    let maxHeight = scrollHeight + window.innerHeight + 200

    navA.forEach((a) => {
      if (scrollHeight >= 0 && scrollHeight < sectionOne - nav) {
        if (a.textContent === 'Start') {
          a.style.backgroundColor = 'rgba(240,240,240,0.7)'
          a.style.color = 'black'
        } else {
          a.style.backgroundColor = 'rgba(0,0,0,0.8)'
          a.style.color = 'white'
        }
      }

      else if (scrollHeight > sectionOne - nav && scrollHeight < sectionTwo - nav) {
        if (a.textContent === 'About') {
          a.style.backgroundColor = 'rgba(240,240,240,0.7)'
          a.style.color = 'black'
        } else {
          a.style.backgroundColor = 'rgba(0,0,0,0.8)'
          a.style.color = 'white'
        }
      }

      else if (scrollHeight > sectionTwo - nav && scrollHeight < sectionTariff - nav) {
        if (a.textContent === 'Offer') {
          a.style.backgroundColor = 'rgba(240,240,240,0.7)'
          a.style.color = 'black'
        } else {
          a.style.backgroundColor = 'rgba(0,0,0,0.8)'
          a.style.color = 'white'
        }
      }

      else if (scrollHeight > sectionTariff - nav && scrollHeight < sectionContact - nav && maxHeight < htmlHeight) {
        if (a.textContent === 'Tariff') {
          a.style.backgroundColor = 'rgba(240,240,240,0.7)'
          a.style.color = 'black'
        } else {
          a.style.backgroundColor = 'rgba(0,0,0,0.8)'
          a.style.color = 'white'
        }
      }

      else if (maxHeight > htmlHeight) {
        if (a.textContent === 'Contact') {
          a.style.backgroundColor = 'rgba(240,240,240,0.7)'
          a.style.color = 'black'
        } else {
          a.style.backgroundColor = 'rgba(0,0,0,0.8)'
          a.style.color = 'white'
        }
      }
    })
  }




  render() {
    return (
      <nav>
        <ul>
          <li><a name='Start' onClick={this.clickHandle} href="#">Start</a></li>
          <li><a name='About' onClick={this.clickHandle} href="#">About</a></li>
          <li><a name='Offer' onClick={this.clickHandle} href="#">Offer</a></li>
          <li><a name='Tariff' onClick={this.clickHandle} href="#">Tariff</a></li>
          <li><a name='Contact' onClick={this.clickHandle} href="#">Contact</a></li>
        </ul >
      </nav >

    )
  }
}

export default Nav