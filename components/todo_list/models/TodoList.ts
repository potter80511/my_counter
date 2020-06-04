interface TodoItem {
  id: number;
  text: string;
}

export interface State {
  todos: TodoItem[];
}
