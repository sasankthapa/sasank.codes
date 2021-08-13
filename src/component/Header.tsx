import React from 'react'
import '../scss/Header.scss'
import image from '../assets/mainImage.png'

const Header:React.FC<{}>= () => {
    return <div className="Header">
        <div className="Logo">
            <img src={image} alt="main image"/>
        </div>
        <div className="Name">
            Sasank Thapa
        </div>
    </div>
}

export default Header;
