import React from 'react'
import Tariff from './Tariff'
import '../styles/SectionTariff.css'

const tariffs = [
    { type: 'Plan Dietetyczny', term: '4 TYG', cost1: ' 1-szy msc | 80.00zł', cost2: 'Kolejny | 60.00zł' },
    { type: 'Plan Treningowy', term: '4 TYG', cost1: ' 1-szy msc | 80.00zł', cost2: 'Kolejny | 60.00zł' },
    { type: 'Plan Dietetyczny i Treningowy', term: '4 TYG', cost1: ' 1-szy msc | 130.00zł', cost2: 'Kolejny | 100.00zł' },
    { type: 'Trening Personalny', term: null, cost1: ' | 120.00zł', cost2: null },
    { type: 'Trening Personalny x8', term: null, cost1: ' | 680.00zł', cost2: null },
    { type: 'Trening Personalny x10', term: null, cost1: ' | 960.00zł', cost2: null },
    { type: 'Trening Personalny x16', term: null, cost1: '  | 1200.00zł', cost2: null }
]

const SectionTariff = (props) => {
    const allTariffs = tariffs.map((tariff) => (
        <Tariff
            key={tariff.type}
            type={tariff.type}
            term={tariff.term}
            cost1={tariff.cost1}
            cost2={tariff.cost2}
            color={props.color}
        />
    ))

    return (
        <>
            <section className="tariff">
                <h2 style={props.color ? { color: 'rgba(0,100,100,0.75)' } : { color: 'rgba(150,0,0,0.75)' }}>Każda z usług jest tworzona od podstaw i dobrana indywidualnie pod Ciebie!</h2>
                {allTariffs}
            </section>
        </>
    )
}

export default SectionTariff