import { removeTodo, togoleStatus } from '@/Redux/Features/TodoSlice';
import { useAppDispatch } from '@/Redux/hooks';
import { DeleteIcon, Edit } from 'lucide-react';

type TTaskProps = {
  _id: string;
  description: string;
  title: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  description,
  isCompleted,
  title,
  priority,
}: TTaskProps) => {
  const dispatch = useAppDispatch();
  const toggleState = () => {
    dispatch(togoleStatus(_id));
  };
  return (
    <div className="border bg-white rounded">
      <div className="flex space-x-3 justify-between  px-3 py-2 rounded  font-bold">
        <input
          onChange={toggleState}
          defaultChecked={isCompleted}
          type="checkbox"
          className="mr-2"
        />
        <h1 className="flex-1">{title}</h1>
        <h1 className="flex-1">{description}</h1>
        <div className="flex space-x-2 items-center flex-1">
          <div
            className={` h-3 w-3 rounded-full ${
              priority === 'high' ? 'bg-green-600' : null
            } ${priority === 'low' ? 'bg-red-600' : null}
          ${priority === 'medium' ? 'bg-yellow-600' : null}
          `}
          ></div>
          <h1>{priority}</h1>
        </div>

        {/* <h1>Time</h1> */}
        <h1 className="flex-1">
          {isCompleted ? (
            <p className="text-green-500 font-semibold">Done</p>
          ) : (
            <p className="text-red-600 font-semibold">Pending</p>
          )}
        </h1>
        <div className="flex space-x-3 flex-1  items-center justify-center">
          <div
            onClick={() => dispatch(removeTodo(_id))}
            className="bg-red-600 p-1 rounded cursor-pointer"
          >
            <DeleteIcon className=" text-white h-5 w-5" />
          </div>
          <div className=" bg-primary-gradient p-1 rounded">
            <Edit className=" text-white h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
