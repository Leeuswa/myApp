import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function TodoList() {
    // 2. useState에 타입 명시
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    // 3. addTodo 함수 타입 안정화
    const addTodo = () => {
        if (input === "")
            return;
        const todo_item = {
            id: new Date(),
            text: input,
            checked: false,
        };
        setTodos([...todos, todo_item]);
        setInput("");
    };
    // 4. deleteTodo 함수 매개변수 타입 명시
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    // 5. input onChange 이벤트 타입 명시
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    return (_jsxs("div", { style: { margin: 10 }, children: [_jsx("h2", { children: "\uD560 \uC77C \uBAA9\uB85D" }), _jsxs("div", { children: [_jsx("input", { type: "text", value: input, onChange: handleInputChange }), _jsx("button", { onClick: addTodo, children: "\uCD94\uAC00" })] }), todos.map((todo) => (_jsxs("div", { className: "todo-item", children: [_jsx("span", { children: todo.text }), _jsx("button", { onClick: () => deleteTodo(todo.id), style: { margin: 5 }, children: "\uC0AD\uC81C" })] }, todo.id.toString())))] }));
}
//# sourceMappingURL=TodoList.js.map