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

export const getMainConfig=()=>{
    return [{
        width:50,
        height:30,
        depth:1,
        rotateX:20,
        rotateY:0,
        rotateZ:0,
        x:0,
        y:50,
        z:0
    },{
        width:50,
        height:30,
        depth:1,
        rotateX:20,
        rotateY:0,
        rotateZ:0,
        x:55,
        y:50,
        z:0
    }]
}

export const getRandomConfig=():config=>{
    var rand=Math.random()
    return {
        width:rand*50,
        height:rand*30,
        depth:rand*1,
        rotateX:rand*20,
        rotateY:rand*20,
        rotateZ:rand*20,
        x:100+rand*10,
        y:100+rand*10,
        z:100+rand*10
    }
}

export const getRandomConfigList=(n:number):config[]=>{
    const toReturn=[]
    for(var i=0;i < n;i++){
        toReturn.push(getRandomConfig())
    }
    return toReturn;
}

