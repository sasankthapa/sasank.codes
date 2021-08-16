import React from 'react'
import '../scss/Header.scss'
import image from '../assets/profile.jpg'
import Writer from './Writer'

const HeaderComponent:React.FC<{}>= () => {
   return <>
        <div className="Logo">
            <div className="imgcontainer">
                <img src={image} alt="main"/>
            </div>
        </div>
        <div className="nametitle">
            <h1>Sasank Thapa</h1>
        </div>
        {//<Writer extraClass="Name" values={['Sasank Thapa']} changes={false}/>
        }
    </>
}

export default HeaderComponent;
