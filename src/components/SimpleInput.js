import React, {  useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail]=  useState('');
  // const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  //const [formIsValid, setFormIsValid] = useState(false);


  const isValid = enteredName.trim() !== ''; 
  const inputIsInvalid = !isValid && isTouched;

  const emailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && isTouched;

  // useEffect(()=>{
  //   if(isValid){
  //     setFormIsValid(true);
  //   }else {
  //     setFormIsValid(false);
  //   }
  // }, [isValid]);

  let formIsValid = false;

  if(isValid){
    formIsValid=true;
  };

  const onChangeInputHandler = (event) => {
    setEnteredName(event.target.value);
    // if (event.target.value.trim() !== '') {
    //   setIsValid(true);
    // }
  };

  const onBlurChangeHandler = event => {
    setIsTouched(true);
    // if (enteredName.trim() === '') {
    //   setIsValid(false);
    // };
  };

  const onEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    // if (enteredName.trim() === '') {
    //   setIsValid(false);
    //   return;
    // }
    // setIsValid(true)
    if(!isValid && !emailIsValid){
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setIsTouched(false);
  };

  
  const nameInpuClasses = inputIsInvalid ? 'form-control invalid' : 'form-control';

  const emailInpuClasses = emailInputIsValid ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInpuClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={onChangeInputHandler} onBlur={onBlurChangeHandler} />
        {inputIsInvalid && <p className="error-text">Name must not be empty!</p>}
        </div>
        <div className={emailInpuClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="text" id="email" onChange={onEmailChangeHandler}></input>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
