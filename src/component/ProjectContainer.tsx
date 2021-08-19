import React, {ReactChildren} from 'react'
import '../scss/ProjectContainer.scss'

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
            <div className="3d-container fiftyWidth">
                
            </div>
        </div>
        <div className="container">
            <div className="fiftyWidth">
                <h1>
                Frontend Engineer
                </h1>
            </div>
            <div className="3d-container fiftyWidth">
            </div>
        </div>
        <div className="container">
            <div className="fiftyWidth">
                <h1>
                Fullstack Developer
                </h1>
            </div>
            <div className="3d-container fiftyWidth">
            </div>
        </div>
    </div>
}


export default ProjectContainer;
