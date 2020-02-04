import React from 'react'

const Offer = (props) => {



  return (
    <>
      <div onClick={() => props.click(props.id)} className='divOffer'>
        <div className='cover'>{props.title}</div>
        <div className='coverImg' style={props.color ? { opacity: '1' } : { opacity: '0' }}> <img className='blue' style={props.active ? { left: '10%' } : { left: '50%' }} src={props.imgNumber} alt="number" /></div>
        <div className='coverImg' style={props.color ? { opacity: '0' } : { opacity: '1' }}> <img className='red' style={props.active ? { left: '10%' } : { left: '50%' }} src={props.imgNumber2} alt="number" /></div>
      </div>
      <p style={props.active ? { lineHeight: '26px', opacity: '1' } : { lineHeight: '1px', opacity: '0' }} >{props.txt}</p>
    </>
  )
}

export default Offer