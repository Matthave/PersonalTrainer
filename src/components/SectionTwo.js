import React from 'react'
import $ from 'jquery';
import Offer from './Offer'
import Cooperation from './Cooperation'
import CooperationModal from './CooperationModal'
import img1 from '../IMG/oneBlue.png'
import img2 from '../IMG/twoBlue.png'
import img3 from '../IMG/threeBlue.png'
import img4 from '../IMG/fourBlue.png'
import img5 from '../IMG/oneRed.png'
import img6 from '../IMG/twoRed.png'
import img7 from '../IMG/threeRed.png'
import img8 from '../IMG/fourRed.png'
import '../styles/SectionTwo.css'

class SectionTwo extends React.Component {
  state = {
    cooperationBtn: false,
    showModal: false,
    offersTxt: [
      { title: 'PLAN DIETETYCZNY', active: false, id: 1, imgNumber: img1, imgNumber2: img5, txt: 'Plan żywieniowy, dopasowany do Twoich potrzeb i aktualnej aktywności fizycznej. Niezależnie czy chcesz spalić tkankę tłuszczową, czy zbudować masę mięśniową. Po zamówieniu planu dietetycznego otrzymasz na maila plik ze szczegółową ankietą, która pozwoli mi stworzyć najskuteczniejszą opcję dla Ciebie, tak abyś mógł uzyskać założone cele. Dieta będzie zawierała wszystkie potrzebne informacje, a Ty będziesz mógł samodzielnie komponować smaczne a zarazem dietetyczne posiłki, trzymając się moich wytycznych.' },
      { title: 'PLAN TRENINGOWY', active: false, id: 2, imgNumber: img2, imgNumber2: img6, txt: 'Plan treningowy, tak samo jak dieta, jest niezbędny do uzyskania wymarzonej sylwetki. Jednakże jeśli spełniasz już pierwszy warunek, w postaci zbilansowanej, odpowiednio dobranej diety, mogę Ci zaproponować plan treningowy, dopasowany do Twoich potrzeb i diety. Bo wybraniu tej opcji, będziesz musiał uzupełnić ankietę, bym mógł przygotować idealny dla Ciebie i Twoich celów trening, oparty na ćwiczeniach odpowiednio dobranych do Twojego aktualnego wytrenowania i możliwości.' },
      { title: 'PLAN TRENINGOWY I DIETETCZNY', active: false, id: 3, imgNumber: img3, imgNumber2: img7, txt: 'W tym pakiecie, proponuje Ci wspomniany wyżej Plan Dietetyczny oraz Plan Treningowy. Jest to opcja bardziej ekonomiczna i na pewno bardziej skuteczna, ponieważ będę miał pełny wgląd i kontrolę Twoich postępów i wyników. Dodatkowo masz moje pełne wsparcie tzn. masz w tym pełen zakres konsultacji przez ten okres - odpowiadam na pytania , wprowadzam zmiany do diety oraz treningu, oceniam Twoje postępy.' },
      { title: 'TRENINGI PERSONALNE', active: false, id: 4, imgNumber: img4, imgNumber2: img8, txt: 'Treningi Personalne ze mną gwarantują Ci przede wszystkim pewność, że wykonywane przez Ciebie ćwiczenia będą w całości zachowywać poprawną technikę, a trening będzie na najwyższym poziomie. Dostosuję godziny spotkań, pod Twój czas pracy, zajęć poza pracą, harmonogramu tygodnia czy miesiąca. Wspólnymi siłami, na pewno osiągniemy wyznaczony przez Ciebie cel, ponieważ nie pozwolę Ci się poddać, przed jego osiągnięciem. Jeśli zależy Ci na optymalnych efektach, i chcesz by każdy element Twojego trenigu był maksymalnie doszlifowany, to ta opcja jest dla Ciebie najlepsza.' }
    ]
  }

  modal1Flag = true
  modal2Flag = true

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  hiddenModal = () => {
    this.setState({
      showModal: false
    })
  }

  toggleClassModal1 = () => {
    if (this.modal1Flag) {
      document.querySelectorAll('ul.personal li').forEach((l) => {
        l.classList.toggle('active')
      })
      setTimeout(() => {
        $('ul.personal').toggleClass('active')
      }, 50)
      this.modal1Flag = false
    } else {
      $('ul.personal').toggleClass('active')

      setTimeout(() => {
        document.querySelectorAll('ul.personal li').forEach((l) => {
          l.classList.toggle('active')
        })
      }, 50)
      this.modal1Flag = true
    }
  }

  toggleClassModal2 = () => {
    if (this.modal2Flag) {
      document.querySelectorAll('ul.online li').forEach((l) => {
        l.classList.toggle('active')
      })
      setTimeout(() => {
        $('ul.online').toggleClass('active')
      }, 50)
      this.modal2Flag = false
    } else {
      $('ul.online').toggleClass('active')

      setTimeout(() => {
        document.querySelectorAll('ul.online li').forEach((l) => {
          l.classList.toggle('active')
        })
      }, 50)
      this.modal2Flag = true
    }
  }

  handleClickOffer = (id) => {
    const offersTxt = [...this.state.offersTxt]


    offersTxt.forEach((offer) => {
      if (id === offer.id) {
        offer.active = !offer.active
      }
    })

    return this.setState({
      offersTxt
    })
  }

  render() {
    const offersTxtBlue = this.state.offersTxt.map((offer) => (
      <Offer
        id={offer.id} key={offer.id}
        title={offer.title}
        active={offer.active}
        imgNumber={offer.imgNumber}
        imgNumber2={offer.imgNumber2}
        txt={offer.txt}
        click={this.handleClickOffer}
        color={this.props.color}
      />
    ))

    return (
      <>
        <section className="sectionTwo">
          <h2 style={this.props.color ? { color: 'rgba(0,100,100,1)' } : { color: 'rgba(150,0,0,1)' }}>WYBIERZ INTERESUJĄCY CIĘ PAKIET</h2>
          <h3 style={this.props.color ? { color: 'rgba(0,100,100,1)' } : { color: 'rgba(150,0,0,1)' }}>PAKIETY ZOSTAŁY PODZIELONE NA CZTERY KATEGORIE, TAK BYŚ MÓGŁ WYBRAĆ INTERESUJĄCY
          CIĘ ELEMENT TWOJEGO DĄŻENIA DO LEPSZEJ SYLWETKI, ORAZ WSPANIAŁEGO SAMOPOCZUCIA.</h3>
          <div style={this.props.opacity ? { opacity: '1' } : { opacity: '0' }} className='articleWrap'>
            {offersTxtBlue}
          </div>
          <Cooperation
            color={this.props.color}
            click={this.showModal}
          />
        </section>
        <CooperationModal
          showModal={this.state.showModal}
          hiddenModal={this.hiddenModal}
          toggleModal1={this.toggleClassModal1}
          toggleModal2={this.toggleClassModal2}
          color={this.props.color}
        />
      </>
    )
  }
}

export default SectionTwo


