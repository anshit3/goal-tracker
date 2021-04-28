import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? 'rgb(223, 57, 57)' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid
      ${(props) => (props.invalid ? 'rgb(223, 57, 57)' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background: ${(props) => (props.invalid ? 'rgb(223, 57, 57)' : '#ffd7d7')};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue('');
    props.onAddGoal(enteredValue);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <FormControl invalid={!isValid}>
          <label>Course Goal</label>
          <input
            type="text"
            value={enteredValue}
            onChange={goalInputChangeHandler}
          />
        </FormControl>
        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;
