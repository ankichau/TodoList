import React from "react";
import { Provider } from "react-redux";
import Todo from "./todo";
import "./App.css";
import { createStore } from "redux";
import TodoReducer from "./redux/todo/todoReducer";

const store = createStore(TodoReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
