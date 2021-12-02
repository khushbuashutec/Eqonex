import { useState } from "react";


const UseInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [IsTouched, setIsTouched] = useState(false);

    const ValueIsValid = validateValue(enteredValue)
    const hasError = !enteredValue && IsTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)

    }

    const inputBlurHandler = () => {
        setIsTouched(true)

    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: ValueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}
export default UseInput