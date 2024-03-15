import React from "react";
import { createContext,useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({children}) =>{
    return <TodoContext.Provider>{children}</TodoContext.Provider>
}

export default TodoContext