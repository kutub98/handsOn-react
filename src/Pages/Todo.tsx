import TodoContainer from '@/components/Todo/TodoContainer';

const Todo = () => {
  return (
    <div className="w-full max-w-7xl  bg-red mx-auto ">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">Todo APP</h1>
      </div>
      <TodoContainer />
    </div>
  );
};

export default Todo;
