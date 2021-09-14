import {SiTypescript,SiPython,SiTensorflow,SiSass,SiMysql, SiMongodb, SiHtml5,} from 'react-icons/si'
import {FaReact,FaNodeJs,FaDocker} from 'react-icons/fa'
import {IconType} from 'react-icons'

export type config={
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
    title:string,
    info:string[]
}

const mlIcons:IconObject[]=[{
    info:['Data Preprocessing','Machine Learing','Data Visualization'],
    title:'Python',
    Icon:SiPython
},{
    info:['Created layers of tensors and adjust weights.'],
    title:'Tensorflow',
    Icon:SiTensorflow
}]

const frontendIcons:IconObject[]=[{
    info:['Create reusable and responsive components.'],
    title:'React',
    Icon:FaReact
},{
    info:['💖💖Typescript💖💖'],
    title:'Typescript',
    Icon:SiTypescript
},{
    info:[''],
    title:'HTML5',
    Icon:SiHtml5
},{
    info:['Creating reusable css code through sass functions.'],
    title:'Sass',
    Icon:SiSass
}]

const fullstackIcons:IconObject[]=[{
    info:['Creating REST APIs and backend servers'],
    title:'NodeJs',
    Icon:FaNodeJs
},{
    info:['Creating and deploying containers through compose.'],
    title:'Docker',
    Icon:FaDocker
},{
    info:['Complex SQL queries and relationships',
        'Creating ER diagrams'],
    title:'SQL',
    Icon:SiMysql
},{
    info:['Backend database for most projects.'],
    title:'MongoDB',
    Icon:SiMongodb
}]

const getIcons=(data:IconObject[])=>data.map((curr)=>curr.Icon)

const cardInfo=[
    {
        'title':'Fullstack Apps',
        'body':['Nepal Covid Locator(nepalcovidlocator.com): My first react webpage I developed in the summer of 2020 to track covid in my home country Nepal.',
        '中文Flashcards: A flashcard app I developed for studying chinese.'],
        'icons':getIcons(fullstackIcons)
    },
    {
        'title':'Developer at OED (Open Energy Dashboard)',
        'body':['Added an integral interface for selecting and editing timezone using promise based requests.' 
            ,'Develop reusable UI components using typescript, react and redux.','Create tests using Mocha.',
            'Debug a travis-ci integration issue that prevented testing on travis-ci servers'],
        'icons':getIcons(frontendIcons)
    },
    {
        'title':'Pakula Biomedical Scholars: Using Machine Learning for Liver Disease Classification',
        'body':['Developed machine learning models to classify liver disease stages.' , 
            'Optimized model parameters with 5% improvement over initial models and 16% improvement over previous models for a generalized dataset.',
        ],
        'icons':getIcons(mlIcons)
    },
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
            return cardInfo[2]
        case 1:
            return cardInfo[1]
        case 2:
            return cardInfo[0]
    }
}

export const getMainConfig=(width:number)=>{
    if(width < 600){
        return {
            width:60,
            height:90,
            depth:2,
            rotateX:0,
            rotateY:0,
            rotateZ:0,
            x:20,
            y:50,
            z:45
        }
    }
    return {
        width:60,
        height:40,
        depth:2,
        rotateX:0,
        rotateY:0,
        rotateZ:0,
        x:20,
        y:50,
        z:20
    }
}

export const getConfigs=()=>{
    return [{
        width:60,
        height:40,
        depth:2,
        rotateX:0,
        rotateY:0,
        rotateZ:0,
        x:-300,
        y:10,
        z:20
    },{
        width:60,
        height:40,
        depth:2,
        rotateX:0,
        rotateY:0,
        rotateZ:0,
        x:250,
        y:10,
        z:20
    },{
        width:60,
        height:40,
        depth:2,
        rotateX:0,
        rotateY:0,
        rotateZ:0,
        x:300,
        y:10,
        z:20
    }]
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

