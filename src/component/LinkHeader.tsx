import React, {useEffect, useState} from 'react';
import '../scss/LinkHeader.scss'
import Character from './Character';

const NameHeader: React.FC<{}> = () => {
    const [showH,setShow] = useState(false);
    const [currentShow,setCurrentShow]=useState(-1);

    const mouseEnterHandler=()=>{
        setShow(true);
    }

    const mouseExitHandler=()=>{
        setShow(false);
    }

    useEffect(()=>{
        setTimeout(()=>{
            if(currentShow < 12){
                setCurrentShow(currentShow+1);
            }
        },200)
    })

    const current="Sasank Thapa"

    const currentCharacters:Array<string>=[];

    for(var i=0;i < current.length;i++){
        currentCharacters.push(current[i]);
        if(i===2)
            currentCharacters.push('h');
    }

    return <div className="maincontainer" onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}>
        {currentCharacters.map((curr,index)=>{
            if(curr ==='h' && showH){
                return <Character key={curr+index} show={showH&&index<currentShow} character={curr} />
            }
            if(curr ===' '){
                curr=''
            }
            return <Character key={curr+index} show={index<=currentShow} character={curr} />
        })}
    </div>
}

export default NameHeader
