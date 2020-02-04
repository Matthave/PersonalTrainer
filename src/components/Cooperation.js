import React from 'react'

const darkCyan = 'rgba(0,100,100,1)'
const fireBrick = 'rgba(150,0,0,1)'
const Cooperation = (props) => {
    return (
        <div className='divCooperation'>
            <hr />
            <h2>Po wyborze odpowiedniego pakietu koniecznie do mnie napisz oraz odwiedź zakładkę</h2>
            <button style={props.color ? { borderColor: darkCyan, backgroundColor: darkCyan } : { borderColor: fireBrick, backgroundColor: fireBrick }} onClick={() => props.click()}>Zasady współpracy</button>
            <span style={props.color ? { color: darkCyan } : { color: fireBrick }}>! Skorzystaj z darmowego treningu próbnego !</span>
            <span style={props.color ? { color: darkCyan } : { color: fireBrick }}>ZACZNIJMY DZIAŁAĆ!</span>
        </div>
    )
}

export default Cooperation