import React from 'react';
import Container from '../ui/Container';
import TodoCard from './TodoCard';
import { Button } from '../ui/button';

const TodoContainer = () => {
  return (
    <Container className=" h-full text-center justify-center rounded-md shadow-md bg-red-500 w-full max-w-5xl mx-auto">
      <div className="flex justify-between bg-white px-3 py-2 rounded">
        <Button>Add New Todo</Button>
        <div className="flex space-x-3 items-center">
          <h1>Filters</h1>
          <select name="" id="">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <TodoCard />
    </Container>
  );
};

export default TodoContainer;
