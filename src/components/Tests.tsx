import React, { useState } from "react";

export default function Tests(){
let str = "hello world";
let b: string = "hello world";
let a:number = 123;

 function add(x:number, y:number): number {
    return x + y;
 }

 const add2 = (x:number, y:number): number =>{
    return x+y;
 }
    let obj : { a:number, b:string} = {
        a: 1, b:"test"
    }
    let arr1: string[] = ['a','b','c'];
    let arr2: number[] = [1,2,3];
    let arr3: [number,number,string] = [123,456,"one"]; 

    const x:number = 5;
    //불린타입은 타입을 true, false로 지정할 수 있음.
    const f: true = true;



    type AddType = (a:number, b:number) => number;
    const add3:AddType = (a,b) => a+b;

    type Operation = (a:number, b:number) => number;
    const sub2:AddType = (a,b) => a-b;
    const multiply2: Operation = (a, b) => a * b;
    const divide2: Operation = (a, b) => a / b;

    interface Person {
        name:string, age:number;
    }

    const person:Person = {
        name:"이정한", age:27
    }

    function func<T>(value:T): T {
        return  value;
    }

    interface MyButtonProps {
        id:number, title:string
    }

    function MyButton({id, title}: MyButtonProps) {
        return(
            <div>
                <button>{id} {title}</button>
            </div>
        )
    }

    const [count, setCount] = useState<number>(0);
    type Status = "idle" | "loading" | "success" | "err";
    const [status, setStatus] = useState<string>("idle");

    const [value,setValue] =useState("Init string");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setValue(event.currentTarget.value);
    }
    function handleClick(event: React.MouseEvent<HTMLElement>){
        alert('click');
    }


return(
    <div>

      
    <input value={value} onChange={ handleChange } />
    <p>Value: {value}</p>
    <button onClick={ handleClick }>click</button>
        {/* <MyButton id={1} title="ButtonTs"/> */}
        {/* <p>{func<[number, number, number]>([1, 2, 3])}</p> */}
        {/* <p>{obj.a}</p>
        <p>{obj.b}</p> */}
        {/* <p>{add2(9,12)}</p>
        <p>{add(5,7)}</p> */}
    {/* <p>{str}</p>
    <p>안녕하세여.</p> */}
    </div>
)

}