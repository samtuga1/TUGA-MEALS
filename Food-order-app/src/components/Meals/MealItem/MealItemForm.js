import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const amountEntered = amountInputRef.current.value;
    const enteredAmountNumber = +amountEntered;

    if (
      enteredAmountNumber.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
