import React, { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false)
  const useRefInput = useRef('');

  useEffect(()=>{
    if (isValid
      ){
        console.log('Name inout is Valid');
      }
  }, [isValid]);

  const onChangeInputHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    if (enteredName.trim() === '') {
      setIsValid(false);
      return;
    }
    setIsValid(true)
    console.log(enteredName);
  }

  const inputIsInvalid = !isValid && isTouched ;
  
  // const enteredValue = useRefInput.current.value;
  // console.log("Use Ref " + enteredValue);

  const nameInpuClasses = inputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInpuClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={useRefInput} type='text' id='name' onChange={onChangeInputHandler} />
        {inputIsInvalid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
