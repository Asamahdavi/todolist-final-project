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
export type EditTodoProps = {
  setEditedTodo: (todo: Todo | undefined | null) => void;
  editedTodo: Todo | undefined | null;
  todos: Todo[];
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
  setTodos: (todo: Todo[]) => void;
  id: string;
  todo: Todo;
  submitEdits: (id: string) => void;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  isCompleted: boolean;
  status: string;
  date: string | null | undefined;
  setStatus: (status: string) => void;
  task: string;
  setTask: (task: string) => void;
  handleAddTodo: (Todo: Todo) => void;
  onBackDropClick: () => void;
};
// AddModal types
export type addModal = {
  handleAddTodo: (Todo: Todo) => void;
  onBackDropClick: () => void;
  setStatus: (status: string) => void;
  task: string;
  setTask: (task: string) => void;
  status: string;
  date: string | null | undefined;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
};
//Row component Types
export type RowProps = {
  setEditedTodo: (todo: Todo | undefined | null) => void;
  editedTodo: Todo | undefined | null;
  todo: Todo;
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  submitEdits: (id: string) => void;
  status: string;
  handleCheckTodo: (id: string) => void;
  showModal: boolean;
  onBackDropClick: () => void;
  setTask: (Task: string) => void;
  task: string;
  handleAddTodo: (Todo: Todo) => void;
  setStatus: (status: string) => void;
  date: string | null | undefined;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
};
//BaseAddModalWrapper types
export type BaseModalWrapperProps = {
  showModal: boolean;
  onBackDropClick: () => void;
  setTask: (Task: string) => void;
  task: string;
  handleAddTodo: (Todo: Todo) => void;
  status: string;
  setStatus: (status: string) => void;
  date: string | null | undefined;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
};
//BaseEditModalWrapper types
export type BaseEditModalWrapperProps = {
  showModal: boolean;
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  onBackDropClick: () => void;
  setTask: (Task: string) => void;
  task: string;
  handleAddTodo: (Todo: Todo) => void;
  status: string;
  setStatus: (status: string) => void;
  date: string | null | undefined;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  submitEdits: (id: string) => void;
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
  setEditedTodo: (todo: Todo | undefined | null) => void;
  editedTodo: Todo | undefined | null;
  id: string;
  todo: Todo;
};

//date Picker types

export type DatePickerProps = {
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  date: string | null | undefined;
};
