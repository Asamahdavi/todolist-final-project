export type Todo = {
  id: string;
  status: string;
  task: string;
  isCompleted: boolean;
  date?: string | null | undefined;
  time?: string | null | undefined;
};
export type TodoType = {
  id: string;
  task: string;
  isCompleted: boolean;
};
export type RowType = {
  todo: TodoType;
  handleCheckTodo: (id: string) => void;
};
