export type Todo = {
  id: string;
  status: any;
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
  setStatus: (status: any) => void;
  editedStatus: any;
  setEditedStatus: (editedStatus: any) => void;
  todos: Todo[];
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
  setTodos: (todo: Todo[]) => void;
  todo: Todo;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  isCompleted: boolean;
  status: any;
  date: string | null | undefined;
  onBackDropClick: () => void;
  setEditedTime: (time: string | null | undefined) => void;
  setEditedDate: (date: string | null | undefined) => void;
  editedDate: string | null | undefined;
  editedTime: string | null | undefined;
};
// AddModal types
export type addModal = {
  editedStatus: any;
  setEditedStatus: (editedStatus: any) => void;
  handleDateChanges: (date: moment.Moment | null | undefined) => void;
  handleChangeStatus: (value: any) => void;
  handelTimeChanges: (time: moment.Moment | null | undefined) => void;
  handleAddTodo: (Todo: Todo) => void;
  onBackDropClick: () => void;
  setStatus: (status: any) => void;
  task: string;
  setTask: (task: string) => void;
  status: any;
  date: string | null | undefined;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
};
//Row component Types
export type RowProps = {
  setStatus: (status: any) => void;
  editedStatus: any;
  handleDeleteTodo: (id: string) => void;
  setEditedStatus: (editedStatus: any) => void;
  setEditedTime: (time: string | null | undefined) => void;
  setEditedDate: (date: string | null | undefined) => void;
  editedDate: string | null | undefined;
  editedTime: string | null | undefined;
  todo: Todo;
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  handleCheckTodo: (id: string) => void;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
  status: any;
};
//BaseAddModalWrapper types
export type BaseModalWrapperProps = {
  showModal: boolean;
  onBackDropClick: () => void;
  setTask: (Task: string) => void;
  task: string;
  handleAddTodo: (Todo: Todo) => void;
  status: any;
  setStatus: (status: any) => void;
  date: string | null | undefined;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  handelTimeChanges: (time: moment.Moment | null | undefined) => void;
  handleDateChanges: (date: moment.Moment | null | undefined) => void;
  handleChangeStatus: (value: any) => void;
  editedStatus: any;
  setEditedStatus: (editedStatus: any) => void;
};
//BaseEditModalWrapper types
export type BaseEditModalWrapperProps = {
  setStatus: (status: any) => void;
  setEditedTime: (time: string | null | undefined) => void;
  setEditedDate: (date: string | null | undefined) => void;
  editedDate: string | null | undefined;
  editedTime: string | null | undefined;
  showModal: boolean;
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  onBackDropClick: () => void;
  status: any;
  date: string | null | undefined;
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
  editedStatus: any;
  setEditedStatus: (editedStatus: any) => void;
  todo: Todo;
};

//date Picker types

export type DatePickerProps = {
  handleDateChanges: (date: moment.Moment | null | undefined) => void;
};
export type TimePickerProps = {
  handelTimeChanges: (time: moment.Moment | null | undefined) => void;
};
// dropdown status selector type
export type StatusProps = {
  handleChangeStatus: (value: any) => void;
  setStatus: (status: any) => void;
};
//todolist component props
export type TodolistProps = {
  todo: Todo;
  todosWeek: Todo[];
  todosDay: Todo[];
  filtering: number;
  setStatus: (status: any) => void;
  sortByWeek: () => void;
  sortByDay: () => void;
  setTruevalue: (value: boolean) => void;
  trueValue: boolean;
  setTodosWeek: (todosWeek: Todo[]) => void;
  setTodosDay: (todosWeek: Todo[]) => void;
  setFiltering: (filtering: number) => void;
  editedStatus: any;
  handleDeleteTodo: (id: string) => void;
  setEditedStatus: (editedStatus: any) => void;
  setEditedTime: (time: string | null | undefined) => void;
  setEditedDate: (date: string | null | undefined) => void;
  editedDate: string | null | undefined;
  editedTime: string | null | undefined;
  todosMounth: Todo[];
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  handleCheckTodo: (id: string) => void;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
  status: any;
};
export type FunctionProps = {
  todosWeek: Todo[];
  todosDay: Todo[];
  todosMounth: Todo[];
  todos: Todo[];
  filtering: number;
  setTruevalue: (value: boolean) => void;
  trueValue: boolean;
  setTodosWeek: (todosWeek: Todo[]) => void;
  setTodosMounth: (todosMounth: Todo[]) => void;
  setTodosDay: (todosDay: Todo[]) => void;
  setFiltering: (filtering: number) => void;
  setTodos: (todos: Todo[]) => void;
  editedStatus: any;
  id: string;
};
