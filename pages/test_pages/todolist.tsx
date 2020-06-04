import React from 'react';
import Layout from '../../components/Layout';

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

const TodoList = () => {
  return (
    <Layout
      meta={meta}
      className="flex-center"
    >
      <div>TodoList</div>
    </Layout>
  );
};

export default TodoList;
