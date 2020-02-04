import React from 'react'
import Banner from './Banner'
import Me from '../IMG/me.jpg'
import '../styles/SectionOne.css'

const txtBanner = ['Dietetyka Jest dla mnie osobną pasją, ponieważ wierzę że to właśnie sposób w jaki się odżywiamy, jest kluczem do zdrowia i do wymarzonej sylwetki. Oprócz tego łączy się ona z jeszcze inną pasją, jaką jest gotowanie. Uważam że to właśnie to podejście, pozwala mi tak bardzo angażować się w to co robię i pomagać ludziom w dążeniu do ich wymarzonej sylwetki.',
    'Plany dietetyczne oraz treningowe Są tworzone tylko przeze mnie, w oparciu o szczegółowe informację które otrzymam od Ciebie w ankiecie, jaką dostaniesz ode mnie przed rozpoczęciem współpracy. Dzięki temu, każdy plan jaki ode mnie otrzymasz, jest idealnie dopasowany do Ciebie, do Twojego poziomu wytrenowania, Twoich preferencji i oczekiwań, a co najważniejsze, każdy plan jest ułożony tak, byś osiągnął wyznaczony przez siebie cel, w jak najszybszy i najskuteczniejszy sposób. Są rozpisywane nie tylko w oparciu o wiedzę jaką zdobyłem na przestrzeni wszystkich lat pracy nad własną sylwetką. Jest w nich również wykorzystywana wiedza, doświadczenie i metody, najlepszych Polskich autorytetów w tej dziedzinie, na których przez cały czas wzorowałem się, chłonąc całą wiedzę jaką przekazywali, i sprawdzając najskuteczniejsze metody kształtowania sylwetki,jednocześnie wypracowując swoje unikalne podejście.',
    'Badania Krwi Nie jestem fanem tego by Trener Personalny / Dietetyk bawił się w lekarza, uważam że wiele więcej można osiągnąć przy współpracy obydwu stron, jednocześnie wiem że coraz ciężej znaleźć odpowiedniego lekarza, który na czas zaalarmuje nas o zaistniałym lub nadchodzącym problemie, oraz wyjaśni jak można nam pomóc, nie bagatelizując naszego problemu czekając do ostatniej chwili. Dlatego na podstawie Twoich badań krwi oraz szczegółowej rozmowie, mogę podpowiedzieć z czym mamy do czynienia i jak można temu zaradzić, jakie dodatkowe badania należy wykonać oraz gdzie skierować dalsze kroki, dopasowując do tego odpowiednią dietę i aktywność fizyczną.']

const colorDarkCyan = 'rgba(0,100,100,0.75'
const colorFireBrick = 'rgba(150,0,0,0.75)'

class SectionOne extends React.Component {
    render() {
        return (
            <>
                <section className="sectionOne" >
                    <article className="about">
                        <img src={Me} alt="Mateusz Ratyński" />
                        <div className="txt">
                            <p> <span style={this.props.color ? { color: colorDarkCyan } : { color: colorFireBrick }}>O Mnie</span> <br /> Urodziłem się 05 maja 1992 roku. Od 2011 roku jestem pasjonatem wszelkiego rodzaju aktywności fizycznej i zdrowego trybu życia.
                             Zdecydowanie najbardziej interesuje mnie kwestia budowania i kształtowania sylwetki mając jednocześnie na uwadze wszelkie zdrowotne aspekty tego procesu.
                      Nie zważając na to czy jest to budowanie masy mięśniowej czy redukcja tkanki tłuszczowej.</p>
                            <p> <span style={this.props.color ? { color: 'rgba(0,100,100,0.75' } : { color: 'rgba(150,0,0,0.75)' }}>Szkolenia i kursy</span> <br />  w których brałem udział i warto je wymienić to na pewno kurs Instruktora Fitness i Kulturystki w World Sport Academy. Uzyskałem tam również certyfikat Profesjonalnego Instruktora Sportu, Fitness i Kulturystki, Profesjonalnego doradcy suplementacji oraz Dyplom Instruktora sportów siłowych.
                     Oprócz tego na innych szkoleniach uzyskałem certyfikat Wielopoziomowej Dietetyki i Suplementacji, dalej certyfikat Podstaw Dietoterapii oraz certyfikat żywienia przy Cukrzycy typu 2, Hipoglikemii, Zespołu metabolicznego, Niedoczynności/Nadczynności tarczycy, Hashimoto i Insulinooporności.</p>
                        </div>
                    </article>
                    <article className='mySkills'>
                        <div className='skillDiv' style={this.props.opacity1 ? { opacity: '1' } : { opacity: '0' }}> <Banner className='art1' tittle='Trening' txt={txtBanner[0]} /></div>
                        <div className='skillDiv' style={this.props.opacity2 ? { opacity: '1' } : { opacity: '0' }}><Banner className='art2' tittle='Dieta' txt={txtBanner[1]} /></div>
                        <div className='skillDiv' style={this.props.opacity3 ? { opacity: '1' } : { opacity: '0' }}><Banner className='art3' tittle='Badania Krwi' txt={txtBanner[2]} /></div>
                    </article>
                </section>
            </>
        )
    }
}

export default SectionOne