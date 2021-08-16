import React from 'react';
import Writer from './Writer';
import '../scss/Body.scss';

const BodyComponent:React.FC<{}> = () => {
    return <>
        <Writer extraClass="desc" values={
            ['Aspiring ML Engineer',
            'Frontend Engineer',
            'Fullstack Developer']
        }
        changes={true}
        timeout={5000}/>
    </>
}

export default BodyComponent
