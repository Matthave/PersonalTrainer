import React from 'react'
import '../styles/Promo.css'
import imgPresent from '../IMG/present256.png'



class Promo extends React.Component {

  state = {
    active: false,
  }

  componentDidMount() {
    setInterval(() => {
      const spanD = document.querySelector('.spanD')
      const spanH = document.querySelector('.spanH')
      const spanM = document.querySelector('.spanM')
      const spanS = document.querySelector('.spanS')

      const currentTime = new Date().getTime();
      const endTime = new Date("2020-05-05 23:59:00");

      const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (currentTime / (1000 * 60 * 60 * 24)));
      const hours = Math.floor((endTime / (1000 * 60 * 60) - currentTime / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((endTime / (1000 * 60) - currentTime / (1000 * 60)) % 60)
      const seconds = Math.floor((endTime / 1000 - currentTime / 1000) % 60)

      spanD.textContent = days <= 9 ? `0${days}` : days
      spanH.textContent = hours <= 9 ? `0${hours}` : hours
      spanM.textContent = minutes <= 9 ? `0${minutes}` : minutes
      spanS.textContent = seconds <= 9 ? `0${seconds}` : seconds

    }, 1000);
  }

  clickPromoHandle = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return (
      <div style={this.state.active ? { top: '50%', left: '42.5%' } : { top: '50%', left: '-44%' }} className="promoModal">
        <div onClick={() => this.clickPromoHandle()} className='xBtnPromo'><i className="fas fa-times"></i></div>
        <h1 className='promo'>PROMOCJA</h1>
        <h2>KUP PAKIET DO 05.05.20 </h2>
        <div className="countingDown">
          <h2 className="h2">
            <div>Dni</div> <span className="spanD"></span>
          </h2>
          <h2 className="h2">
            <div>Godziny</div><span className="spanH"></span>
          </h2>
          <h2 className="h2">
            <div>Minuty</div><span className="spanM"></span>
          </h2>
          <h2 className="h2">
            <div>Sekundy</div><span className="spanS"></span>
          </h2>
        </div>
        <h1>Pakiet x8 -10%</h1>
        <h1>Pakiet x12 -10%</h1>
        <h1>Pakiet x16 -15%</h1>
        <img onClick={() => this.clickPromoHandle()} className='present ' src={imgPresent} alt="present" />
      </div>
    )
  }
}

export default Promo;