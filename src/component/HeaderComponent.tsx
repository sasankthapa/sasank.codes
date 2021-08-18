import React from 'react'
import '../scss/Header.scss'
import image from '../assets/profile.jpg'
import Writer from './Writer'
import LinksContainer from './Links/LinksContainer'

const HeaderComponent:React.FC<{}>= () => {
   return <>
        <div className="Logo">
            <div className="imgcontainer">
                <img width="200" height="200" src="https://media-exp1.licdn.com/dms/image/C5103AQFsFIh5uwQSyg/profile-displayphoto-shrink_200_200/0/1567899634627?e=1634774400&v=beta&t=i3NOfpIj-27pK_Mr1-xmrL3sNal-rYuazhG96XU9mFA" alt="profilephoto" draggable={false} />
            </div>
        </div>
        <div className="nametitle">
            <h1>Sasank Thapa</h1>
        </div>
        <LinksContainer />
        {//<Writer extraClass="Name" values={['Sasank Thapa']} changes={false}/>
        }
    </>
}

export default HeaderComponent;
