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
  editedStatus: any;
  setEditedStatus: (editedStatus: any) => void;
  handleChangeStatus: (value: any) => void;
  handleDateChanges: (date: moment.Moment | null | undefined) => void;
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
  status: any;
  date: string | null | undefined;
  setStatus: (status: any) => void;
  task: string;
  setTask: (task: string) => void;
  handleAddTodo: (Todo: Todo) => void;
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
  editedStatus: any;
  setEditedStatus: (editedStatus: any) => void;
  setEditedTime: (time: string | null | undefined) => void;
  setEditedDate: (date: string | null | undefined) => void;
  editedDate: string | null | undefined;
  editedTime: string | null | undefined;
  handleDateChanges: (date: moment.Moment | null | undefined) => void;
  handleChangeStatus: (value: any) => void;
  handelTimeChanges: (time: moment.Moment | null | undefined) => void;
  setEditedTodo: (todo: Todo | undefined | null) => void;
  editedTodo: Todo | undefined | null;
  todo: Todo;
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  submitEdits: (id: string) => void;
  status: any;
  handleCheckTodo: (id: string) => void;
  showModal: boolean;
  onBackDropClick: () => void;
  setTask: (Task: string) => void;
  task: string;
  handleAddTodo: (Todo: Todo) => void;
  setStatus: (status: any) => void;
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
  setEditedTime: (time: string | null | undefined) => void;
  setEditedDate: (date: string | null | undefined) => void;
  editedDate: string | null | undefined;
  editedTime: string | null | undefined;
  showModal: boolean;
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
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
  submitEdits: (id: string) => void;
  setEditedTask: (editedTask: string) => void;
  editedTask: string;
  setEditedTodo: (todo: Todo | undefined | null) => void;
  editedTodo: Todo | undefined | null;
  editedStatus: any;
  setEditedStatus: (editedStatus: any) => void;
  id: string;
  todo: Todo;
  handelTimeChanges: (time: moment.Moment | null | undefined) => void;
  handleDateChanges: (date: moment.Moment | null | undefined) => void;
  handleChangeStatus: (value: any) => void;
};

//date Picker types

export type DatePickerProps = {
  time: string | null | undefined;
  setTime: (time: string | null | undefined) => void;
  setDate: (date: string | null | undefined) => void;
  date: string | null | undefined;
  handelTimeChanges: (time: moment.Moment | null | undefined) => void;
  handleDateChanges: (date: moment.Moment | null | undefined) => void;
};
// dropdown status selector type
export type StatusProps = {
  handleChangeStatus: (value: any) => void;
};
