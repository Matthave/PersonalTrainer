import React from 'react'

const Tariff = (props) => {
    return (
        <div className="divTariff">
            <h3 style={props.color ? { color: 'rgba(0,100,100,1)' } : { color: 'rgba(150,0,0,1)' }}>{props.type}</h3>
            <h3>{props.term}</h3>
            <div>
                <h3>{props.cost1}</h3>
                {props.cost2 ? <h3>{props.cost2}</h3> : null}
            </div>
        </div>
    )
}

export default Tariff