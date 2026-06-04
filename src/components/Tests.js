import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from "react";
export default function Tests() {
    let str = "hello world";
    let b = "hello world";
    let a = 123;
    function add(x, y) {
        return x + y;
    }
    const add2 = (x, y) => {
        return x + y;
    };
    let obj = {
        a: 1, b: "test"
    };
    let arr1 = ['a', 'b', 'c'];
    let arr2 = [1, 2, 3];
    let arr3 = [123, 456, "one"];
    const x = 5;
    //불린타입은 타입을 true, false로 지정할 수 있음.
    const f = true;
    const add3 = (a, b) => a + b;
    const sub2 = (a, b) => a - b;
    const multiply2 = (a, b) => a * b;
    const divide2 = (a, b) => a / b;
    const person = {
        name: "이정한", age: 27
    };
    function func(value) {
        return value;
    }
    function MyButton({ id, title }) {
        return (_jsx("div", { children: _jsxs("button", { children: [id, " ", title] }) }));
    }
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("idle");
    const [value, setValue] = useState("Init string");
    function handleChange(event) {
        setValue(event.currentTarget.value);
    }
    function handleClick(event) {
        alert('click');
    }
    return (_jsxs("div", { children: [_jsx("input", { value: value, onChange: handleChange }), _jsxs("p", { children: ["Value: ", value] }), _jsx("button", { onClick: handleClick, children: "click" })] }));
}
//# sourceMappingURL=Tests.js.map