import React from 'react'
import insta from '../IMG/instagram.png'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='divContact'>
                    <h2>Mateusz Ratyński</h2>
                    <h2>Trener Personalny</h2>
                    <h2>Warszawa</h2>
                    <h2>Tel: 609 404 940</h2>
                    <h2>mr.mattfit@gmail.com</h2>
                    <a href="https://www.instagram.com/i.mr.fit/"><img src={insta} alt="instagramLogo" /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer