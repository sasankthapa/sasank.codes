import React from 'react'
import '../scss/ProjectContainer.scss'
import { FaNodeJs } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import Technologies from './Technologies';

interface ProjectContainerProps{
    currIndex:number,
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({currIndex}) => {
    const classesName=["ProjectContainer"];
    switch(currIndex){
        case 1:
            classesName.push('transform100');
        break;
        case 2:
            classesName.push('transform200');
    }
    return <div className={classesName.join(' ')}>
        <div className="container">
            <div className="fiftyWidth">
                <h1>
                    Aspiring ML Engineer!
                </h1>
            </div>
            <div className="threeD outericonContainer fiftyWidth">
                <Technologies icons={[SiTensorflow,FaNodeJs]}/>
            </div>
        </div>
        <div className="container">
            <div className="fiftyWidth">
                <h1>
                    Frontend Engineer
                </h1>
            </div>
            <div className="threeD fiftyWidth">
            </div>
        </div>
        <div className="container">
            <div className="fiftyWidth">
                <h1>
                    Fullstack Developer
                </h1>
            </div>
            <div className="threeD fiftyWidth">
            </div>
        </div>
    </div>
}


export default ProjectContainer;
