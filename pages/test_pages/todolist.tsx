import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../../components/Layout';
import { store } from '../../Store';
import TodoListContainer from '../../features/todo_list/domain/TodoListContainer';

const meta = {
  title: "Johnny's App - Todo List",
  description: "Johnny's App - Todo List",
  keywords: "Johnny's App - Todo List",
  ogtitle: "Johnny's App - Todo List",
  ogdescription: "Johnny's App - Todo List",
  ogtype: 'website',
  ogimage: '',
  ogsitename: "Johnny's App - Todo List",
  ogurl: '',
};

const TodoListView = () => {
  return (
    <Provider store={store}>
      <Layout
        meta={meta}
        className="flex-center"
      >
        <TodoListContainer />
      </Layout>
    </Provider>
  );
};

export default TodoListView;
