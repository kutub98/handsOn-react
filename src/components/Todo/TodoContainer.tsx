import Container from '../ui/Container';
import TodoCard from './TodoCard';
import { TodoModal } from './TodaModal';
import { TodoFilter } from './TodoFilter';
import { useAppSelector } from '@/Redux/hooks';

const TodoContainer = () => {
  const todo = useAppSelector(state => state.todo.todo);
  const sortedTodos = [...todo].sort((a, b) => {
    if (a.isCompleted === b.isCompleted) return 0;
    return a.isCompleted ? 1 : -1;
  });
  return (
    <Container className=" h-full text-center justify-center rounded-md shadow-md  w-full max-w-5xl mx-auto">
      <div className="flex justify-between bg-white px-3 py-2 rounded">
        <TodoModal />
        <div className="flex space-x-3 items-center">
          <h1>Filters</h1>
          <TodoFilter />
        </div>
      </div>
      <div className=" bg-primary-gradient p-2 space-y-1">
        <div className="flex space-x-3 justify-between  px-3 py-2 bg-primary-gradient rounded text-white font-bold">
          <input type="checkbox" />
          <h1>Title Name</h1>
          <h1>Description</h1>
          {/* <h1>Time</h1> */}
          <h1>Status</h1>
          <h1>Action</h1>
        </div>
        {sortedTodos.length > 0 ? (
          todo.map(item => <TodoCard key={item.id} {...item} />)
        ) : (
          <div className="bg-white text-center text-2xl text-red-600 mx-w-2xl mx-auto p-4 rounded font-bold">
            <h1>There is no todolist to do !</h1>
          </div>
        )}
      </div>
    </Container>
  );
};

export default TodoContainer;
