import React from "react";
import { TodoList } from "./TodoList"

function App() {
    return (
        <div className="App" style={{ padding: "2vh",backgroundColor:'snow'}}>
            <h1 style={{color:'white',backgroundColor:'black',paddingLeft:'25px'}}>Homework 2 class 3</h1> 
            <TodoList />
        </div>
    );
}

export default App;
