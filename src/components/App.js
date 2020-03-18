import React, { Component } from 'react';
import Promo from './Promo'
import Nav from './Nav'
import Header from './Header'
import Slider from './Slider'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionTariff from './SectionTariff'
import Footer from './Footer'
import '../App.css';


const sliderTxt1 = '"TO, CO DZISIAJ WYDAJE CI SIĘ NIEMOŻLIWE, WKRÓTCE BĘDZIE TWOJĄ ROZGRZEWKĄ"'
const sliderTxt2 = '"CHĘĆ WYGRANEJ NIC NIE ZNACZY BEZ CHĘCI DO PRZYGOTOWANIA"'
const sliderTxt3 = '"TRUDNO JEST POKONAĆ KOGOŚ, KTO NIGDY SIĘ NIE PODDAJE"'
const sliderTxt4 = '"Świat to nie tylko słodycz. To bardzo podłe i paskudne miejsce i nie ważne jak twardy jesteś to przydusi cię do gleby, jeśli mu na to pozwolisz. Nic nie uderzy cię tak mocno jak życie. Nie ważne jak mocno bijesz, ale ile jesteś w stanie znieść i nadal iść do przodu. Na tym polega zwycięstwo! Jeśli wiesz, na co cię stać, rób to, na co cię stać. A jeśli nie jesteś tym, kim chcesz być, nie szukaj winy w innych, tak robią tchórze." - Rocky Balboa'

class App extends Component {
  state = {
    color: true,
    opacityH2: false,
    opacityBanner1: false,
    opacityBanner2: false,
    opacityBanner3: false,
    opacityAllOffer: false,
  }

  componentDidMount() {
    this.changeColor()
    window.addEventListener('scroll', this.handleScroll);
  }

  changeColor() {
    setInterval(() => {
      this.setState({
        color: !this.state.color
      })
    }, 10000)
  }

  handleScroll = () => {
    const scrollHeight = window.scrollY;
    const windowHeight = window.innerHeight;

    const navH2 = document.querySelector('.myName');
    const navH2Height = navH2.clientHeight;
    const navH2OffTop = navH2.offsetTop;

    const secOne1 = document.querySelector('.art1');
    const secOne2 = document.querySelector('.art2');
    const secOne3 = document.querySelector('.art3');
    const secOne1_Height = secOne1.clientHeight;
    const secOne1_OffTop = secOne1.offsetTop;
    const secOne2_Height = secOne2.clientHeight;
    const secOne2_OffTop = secOne2.offsetTop;
    const secOne3_Height = secOne3.clientHeight;
    const secOne3_OffTop = secOne3.offsetTop;

    const allOffer = document.querySelector('.articleWrap')
    const offer_OffTop = allOffer.offsetTop;



    if (scrollHeight < 10) {
      this.setState({
        opacityH2: false,
        opacityBanner1: false,
        opacityBanner2: false,
        opacityBanner3: false,
        opacityAllOffer: false,
      })
    }

    if (scrollHeight + (windowHeight / 2) + navH2Height > navH2OffTop) {
      this.setState({
        opacityH2: true
      })
    }

    if (scrollHeight + (windowHeight / 2) + secOne1_Height > secOne1_OffTop) {
      this.setState({
        opacityBanner1: true
      })
    }

    if (scrollHeight + (windowHeight / 2) + secOne2_Height > secOne2_OffTop) {
      this.setState({
        opacityBanner2: true
      })
    }

    if (scrollHeight + (windowHeight / 2) + secOne3_Height > secOne3_OffTop) {
      this.setState({
        opacityBanner3: true
      })
    }

    if (scrollHeight + (windowHeight / 2) > offer_OffTop) {
      this.setState({
        opacityAllOffer: true
      })
    }
  }

  render() {
    const {opacityH2, opacityBanner1, opacityBanner2, opacityBanner3, opacityAllOffer, color, } = this.state
    return (
      <div className="app">
        <Promo />
        <div className="wrap">
          <Nav />
          <main>
            <Header opacity={opacityH2} />
            <Slider
              txt={sliderTxt1}
              color={color} />
            <SectionOne
              opacity1={opacityBanner1}
              opacity2={opacityBanner2}
              opacity3={opacityBanner3}
              color={color} />
            <Slider
              txt={sliderTxt2}
              color={color} />
            <SectionTwo
              color={color}
              opacity={opacityAllOffer}
            />
            <Slider
              txt={sliderTxt3}
              color={color} />
            <SectionTariff color={color} />
            <Slider
              txt={sliderTxt4}
              color={color} />
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
