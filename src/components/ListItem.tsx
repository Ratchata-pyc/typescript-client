import { Todo } from "../types/todo.types";

interface ListItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

function ListItem({ todo, onDeleteTodo }: ListItemProps) {
  return (
    <div className="flex justify-between border border-gray-100 h-14 items-center px-5 rounded-md">
      <div>
        <div>{todo.title}</div> {/* แสดงข้อความจาก todo */}
      </div>
      <div>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md active:scale-95 hover:bg-red-600"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
