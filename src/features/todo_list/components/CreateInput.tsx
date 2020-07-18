import React, { useState } from 'react';
import '@styles/features/todo_list/CreateInput.scss';

type CreateInputProps = {
  onSubmit: (newValue: string) => void;
}


const CreateInput = (props: CreateInputProps) => {
  const [value, setValue] = useState<string>('');

  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  const onSubmit = (value: string) => {
    setValue('');
    props.onSubmit(value)
  };
  return (
    <div className="create-input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={() => onSubmit(value)}>新增</button>
    </div>
  );
};

export default CreateInput;
