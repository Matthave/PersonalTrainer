import React from 'react'
import '../styles/CooperationModal.css'

const CooperationModal = (props) => {
  return (
    <aside style={props.showModal ? { top: '50%', left: '50%', } : { top: '50%', left: '-100%' }}>
      <div onClick={() => props.hiddenModal()} className='xBtn'><i className="fas fa-times"></i></div>
      <div className='modal1' onClick={() => props.toggleModal1()}>How it work - Treningi Personalne</div>

      <span>DARMOWY TRENING PRÓBNY!</span>
      <ul className='personal'>
        <li>Przed rozpoczęciem pierwszego treningu, przeprowadzana jest szczegółowa ankieta mająca na celu określić poziom wytrenowania klienta, stan zdrowia oraz oczekiwania i preferencje.</li>
        <li>Przed rozpoczęciem pierwszej sesji treningowej, wykonujemy trening próbny dzięki któremu dowiesz się jak pracuje podczas treningu, oraz ustalimy szczegóły i oczekiwania co do współpracy.</li>
        <li>Każdy pakiet treningowy jest do zrealizowania w ciągu 30 dni.</li>
        <li>Trening personalny można przełożyć lub odwołać maksymalnie 24 godziny przed umówionym terminem.</li>
        <li>Treningi personalne są przeprowadzane na siłowni Gym Corner ( Stare Club S4 Fitness ) przy ulicy Nowogrodzkiej 50/54.</li>
        <li>Każdy trening trwa od 60 do 90 minut.</li>
        <li>Przy pakietach treningowych masz dodatkowo gotowy plan treningowy i plan dietetyczny oraz kontakt mailowy/telefoniczny ze mną.</li>
        <li>Zastrzegam sobie prawo do odmowy kontynuowania współpracy jeśli podopieczny nie stosuje się do wytycznych.</li>
        <li>W przypadku zakończenia współpracy, informację taka należy przekazać na początku ostatniego pakietu - czyli miesiąc przed.</li>
      </ul>

      <div className='modal2' onClick={() => props.toggleModal2()}>How it work - Plany Dietetyczny i Treningowe Online</div>

      <ul className='online'>
        <li>Przed rozpoczęciem współpracy przeprowadzana jest szczegółowa ankieta mająca określić poziom wytrenowania podopiecznego, stan zdrowia oraz oczekiwania i preferencje.</li>
        <li>Płatność należy uregulować po wysłaniu uzupełnionej ankiety. Po zaksięgowaniu opłaty, drogą mailową wysyłany jest plan dietetyczny/treningowy.</li>
        <li>Przy zakupie pakietu " Plan Dietetyczny + Plan Treningowy " podopieczny ma pełny zakres konsultacji tzn. odpowiadam na pytania dotyczące diety i treningu, udzielam porad, kontroluję Twoję postępy i wyniki, dbam o utrzymanie dobrego nastawienia na cel.</li>
        <li>Zastrzegam sobie prawo do odmowy kontynuowania współpracy jeśli podopieczny nie stosuje się do wytycznych.</li>
        <li>Zastrzegam sobie prawo do materiałów które wysyłam tj. plany treningowe i dietetyczne, oraz nie pozwalam na ich dalsze rozpowszechnianie.</li>
        <li>Wszystkie informacje/zdjęcia uzyskane poprzez ankietę,będą przechowywane na prywantym dysku, i nie będą one udostępniane nikomu innemu poza moją osobą.</li>
        <li>Każdy klient który podejmuję współpracę ze mną, jednocześnie akceptuje wyżej wymienione warunki.</li>
      </ul>
    </aside>
  )
}

export default CooperationModal