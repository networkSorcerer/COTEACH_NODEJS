import TodoItem from "./TodoItem";
const TodoBoard = ({ todoList, getTasks }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item) => <TodoItem item={item} getTasks={getTasks} />)
      ) : (
        <h2>There is no Item to show</h2>
      )}

      {/* <TodoItem/> will be here once we get the todoList */}
    </div>
  );
};

export default TodoBoard;
