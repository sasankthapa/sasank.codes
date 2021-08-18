import React from 'react'
import '../scss/ProjectContainer.scss'

interface ProjectContainerProps{
    extraclass:string
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({extraclass}) => {
    return <div className={extraclass+" ProjectContainer"}>
    </div>
}

export default ProjectContainer;
