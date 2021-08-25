import {SiLatex, SiPython,SiTensorflow,SiSass,SiMysql, SiMongodb, SiHtml5,} from 'react-icons/si'
import {FaReact,FaNodeJs,FaDocker} from 'react-icons/fa'
import {IconType} from 'react-icons'
import {get} from 'http'

type config={
        width:number,
        height:number,
        depth:number,
        x:number,
        y:number,
        z:number,
        rotateX:number,
        rotateY:number,
        rotateZ:number,
}

export type IconObject={
    Icon:IconType,
    info:string[]
}

const mlIcons:IconObject[]=[{
    info:['Machine Learning','Writing scripts that automate tasks.'],
    icon:SiPython
},{
    info:['Creating layers of tensors and adjust weights.'],
    icon:SiTensorflow
},{
    info:['Creating formatted reports with math formula'],
    icon:SiLatex
}]

const frontendIcons:IconObject[]=[{
    info:['Create reusable and responsive components.'],
    icon:FaReact
},{
    info:['Creating layers of tensors and adjust weights.'],
    icon:SiHtml5
},{
    info:['Creating formatted reports with math formula'],
    icon:SiSass
}]

const fullstackIcons:IconObject[]=[{
    info:['Creating backend servers'],
    icon:FaNodeJs
},{
    info:['Creating multiple containers to separate '],
    icon:FaDocker
},{
    info:['Complex SQL queries and relationships',
        'Creating ER diagrams'],
    icon:SiMysql
},{
    info:['Mongoose to connect through node'],
    icon:SiMongodb
}]

const getIcons=(data:IconObject[])=>data.map((curr)=>curr.icon)

const cardInfo=[
    {
        'title':'Pakula Biomedical Scolars: Using Machine Learning for Liver Disease Classification',
        'body':'Analyzed and improved machine learning models creating a classification model for ' + 
            'liver disease that had 16% improvement compared to previous models on a generalized dataset.',
        'icons':getIcons(mlIcons)
    },
    {
        'title':'Developer at OED (Open Energy Dashboard)',
        'body':'Added a integral interface for selecting timezone for each meter as a part of a fix ' + 
            'for a long pending issue.',
        'icons':getIcons(frontendIcons)
    },
    {
        'title':'Nepal Covid Location',
        'body':'Analyzed and improved machine learning models creating a classification model for ' + 
            'liver disease that had 16% improvement compared to previous models on a generalized dataset.',
        'icons':getIcons(fullstackIcons)
    }
];

export const getAllIcons=()=>{
    var toReturn:IconType[]=[];
    cardInfo.forEach((curr)=>{
        toReturn=toReturn.concat(curr.icons)
    })
    return toReturn
}

export const getIconsWithInfo=(currIndex:number)=>{
    switch(currIndex){
        case 0:
            return mlIcons;
        case 1:
            return frontendIcons;
        case 2:
            return fullstackIcons;
    }
}

export const getCardDescInfo=(currIndex:number)=>{
    switch(currIndex){
        case 0:
            return cardInfo[0]
        case 1:
            return cardInfo[1]
        case 2:
            return cardInfo[2]
    }
}

export const getMainConfig=()=>{
    return {
        width:60,
        height:40,
        depth:2,
        rotateX:20,
        rotateY:0,
        rotateZ:0,
        x:20,
        y:50,
        z:0
    }
}

export const getRandomConfig=():config=>{
    var rand=Math.random()
    return {
        width:50,
        height:30,
        depth:1,
        rotateX:0,
        rotateY:0,
        rotateZ:0,
        x:100+rand*10,
        y:100-rand*10,
        z:-100+rand*10
    }
}

export const getRandomConfigList=(n:number):config[]=>{
    const toReturn=[]
    for(var i=0;i < n;i++){
        toReturn.push(getRandomConfig())
    }
    return toReturn;
}

