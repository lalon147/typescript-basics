//type alias

type CrushType={
    name:string;
    age:number;
    profession:string
}

const crush1:CrushType={
    name:"mohona",
    age:19,
    profession:"model"
}

type CrushMarried=boolean;

type OperationType=(x:number,y:number)=>number

const isCrushMarried:CrushMarried=true
const calculate=(number1:number,number2:number,operation:OperationType)=>{
       return operation(number1,number2)
}

console.log(calculate(10,20,(x,y)=>x-y))
 

//Union and intersection types

type NoobDeveloper={
    name:string
}
type JuniorDeveloper= NoobDeveloper & { 
    expertise:string,
    experience:number
}
// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// }

const newDeveloper:NoobDeveloper|JuniorDeveloper={
    name:"LALON ",
    experience:5,
    expertise:"REACT"
}
