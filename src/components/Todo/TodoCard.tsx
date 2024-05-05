import { removeTodo, togoleStatus } from '@/Redux/Features/TodoSlice';
import { useAppDispatch } from '@/Redux/hooks';
import { DeleteIcon, Edit } from 'lucide-react';

type TTaskProps = {
  id: string;
  description: string;
  title: string;
  isCompleted?: boolean;
};

const TodoCard = ({ id, description, isCompleted, title }: TTaskProps) => {
  const dispatch = useAppDispatch();
  const toggleState = () => {
    dispatch(togoleStatus(id));
  };
  return (
    <div className="border bg-white rounded">
      <div className="flex space-x-3 justify-between  px-3 py-2 rounded  font-bold">
        <input
          onChange={toggleState}
          defaultChecked={isCompleted}
          type="checkbox"
        />
        <h1>{title}</h1>
        <h1>{description}</h1>
        {/* <h1>Time</h1> */}
        <h1>
          {isCompleted ? (
            <p className="text-green-500 font-semibold">Done</p>
          ) : (
            <p className="text-red-600 font-semibold">Pending</p>
          )}
        </h1>
        <div className="flex space-x-3  items-center justify-center">
          <div
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-600 p-1 rounded"
          >
            <DeleteIcon className=" text-white h-5 w-5" />
          </div>
          <div className=" bg-primary-gradient p-1 rounded">
            <Edit className=" text-white h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
