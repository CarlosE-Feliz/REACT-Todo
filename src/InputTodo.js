/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      // eslint-disable-next-line react/prop-types
      props.addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={title}
          name="title"
          onChange={onChange}
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    </>
  );
};

export default InputTodo;
