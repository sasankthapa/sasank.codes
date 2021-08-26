import React, {useState} from 'react'
import '../scss/Header.scss'
import LinksContainer from './Links/LinksContainer'

const HeaderComponent:React.FC<{}>= () => {
    const [removeH,setRemoveH]=useState(false);

   return <>
        <div className="Logo">
            <div className="imgcontainer">
                <img width="200" height="200" src="https://media-exp1.licdn.com/dms/image/C5103AQFsFIh5uwQSyg/profile-displayphoto-shrink_200_200/0/1567899634627?e=1634774400&v=beta&t=i3NOfpIj-27pK_Mr1-xmrL3sNal-rYuazhG96XU9mFA" alt="profilephoto" draggable={false} />
            </div>
        </div>
        <div className="nametitle">
            <span>S</span>
            <span>a</span>
            <span>s</span>
            <span className={removeH?"removedH querkH":"querkH"}><span className="hoverInfo">Although Sashank is a lovely name, I prefer <span className="removeH" onClick={()=>setRemoveH(true)}>Sasank</span> as it vocally represents my name better.</span>h</span>
            <span>a</span>
            <span>n</span>
            <span>k</span>
            <span>&nbsp;</span>
            <span>T</span>
            <span>h</span>
            <span>a</span>
            <span>p</span>
            <span>a</span>
        </div>
        <LinksContainer />
    </>
}

export default HeaderComponent;
