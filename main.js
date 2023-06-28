const input = document.querySelector("input");

let expression = "";

const press = (num) => {
  expression += num;
  input.value = expression;
};

const equal = () => {
  input.value = eval(expression);
  expression = "";
};

const erase = () => {
  expression = "";
  input.value = expression;
};
