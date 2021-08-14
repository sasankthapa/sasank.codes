import React from 'react'
import '../scss/Header.scss'
import image from '../assets/mainImage.png'
import Writer from './Writer'

const HeaderComponent:React.FC<{}>= () => {
   return <>
        <div className="Logo">
            <img src={image} alt="main"/>
        </div>
        <div className="Name">
            <Writer values={['Sasank Thapa']} changes={false}/>
        </div>
    </>
}

export default HeaderComponent;
