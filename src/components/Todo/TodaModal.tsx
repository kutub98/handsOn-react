import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAddTodoMutation } from '@/Redux/api/baseApi';
import { FormEvent, useState, useEffect } from 'react';

export function TodoModal() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [open, setOpen] = useState(false); // Manage dialog open state
  const [addTodo, { isError, isLoading, isSuccess }] = useAddTodoMutation();

  // Close dialog automatically when isSuccess changes to true
  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      title: task,
      description: description,
      priority: priority,
    };
    addTodo(taskDetails);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="bg-primary-gradient text-white hover:text-white"
          variant="outline"
        >
          Add New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Add task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Task Input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                id="task"
                onBlur={e => setTask(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* Description Input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={e => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            {/* Priority Selector */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <select
                name="priority"
                id="priority"
                className="col-span-3 px-2 py-2 border rounded"
                defaultValue="low"
                onChange={e => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            {/* Status messages */}
            {isError && <span>Something went wrong</span>}
            {isLoading && <span>Wait for a second...</span>}
            <Button className="bg-primary-gradient" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
