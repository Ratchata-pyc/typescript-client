import { useTodo } from "../context/TodoContext";
import ListItem from "./ListItem"; // นำเข้า ListItem component

const List: React.FC = () => {
  const { todos, onDeleteTodo } = useTodo();

  return (
    <div className="flex flex-col gap-y-3 my-6">
      {todos.map((el) => (
        <ListItem key={el.id} todo={el} onDeleteTodo={onDeleteTodo} /> // ใช้ prop และ key อย่างถูกต้อง
      ))}
    </div>
  );
};

export default List; // แก้เป็น List แทน Item
