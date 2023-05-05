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
//ENUM type
enum Level{
    junior=1,mid=2,senior=3
}
type JuniorDeveloper= NoobDeveloper & { 
    expertise:string,
    experience:number,
    level:Level
}
// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// }

const newDeveloper:NoobDeveloper|JuniorDeveloper={
    name:"LALON ",
    experience:5,
    expertise:"REACT",
    level:Level.mid
}
console.log(newDeveloper.level)
//interface
interface IUser={
    name:string;
    age:number;
}
const userInterface:IUser={
    name:"lalon",
    age:90
}

//extended user
interface extendedUser extends IUser{
role:"string"
}
 
//we can extend user and type alias a 

type addTwoNumberType=(num1:number,num2:number)=>number
const addTwoNumber:addTwoNumberType=(num1,num2)=>num2+num1

//array interface
interface IRollnumbers {
    [index:number]:number //array of numbers
    //this is called index signature
}



