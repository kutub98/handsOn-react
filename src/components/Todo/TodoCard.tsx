import { DeleteIcon, Edit } from 'lucide-react';

const TodoCard = () => {
  return (
    <div className="border bg-white rounded">
      <div className="flex space-x-3 justify-between  px-3 py-2 rounded  font-bold">
        <input type="checkbox" />
        <h1>Title Name</h1>
        <h1>Time</h1>
        <h1>Status</h1>
        <div className="flex space-x-3  items-center justify-center">
          <div className="bg-red-600 p-1 rounded">
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
