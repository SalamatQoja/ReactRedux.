import React from "react";
import MainSide from "./ChangeState/MainSide";
import TodoApp from "./Components/TodoApp";
import ProductApp from "./Products/ProductApp";
import TaskLIst from "./Task/TaskList";

const App: React.FC = () => {
  return (
    <>
      <TodoApp />
      <MainSide />
      <ProductApp />
      <TaskLIst/>
    </>
  );
};

export default App;

