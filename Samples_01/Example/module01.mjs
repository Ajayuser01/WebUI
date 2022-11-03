import {name1,name2} from './module02.mjs'

export default function greetPerson(name){
    return `hello ${name}`;
}

console.log(greetPerson(name1))
console.log(greetPerson(name2))