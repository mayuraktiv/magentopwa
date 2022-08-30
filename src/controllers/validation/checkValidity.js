const validateField = (rule, value) => {
  let isValid = true;
  const type = rule?.type;
  const require = rule?.require;
  if (require) {
    switch (type) {
      case "text":
        isValid = value?.trim() !== "" ? true : false;
        break;
      case "number":
        isValid = !isNaN(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const validateEmail = (value) => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailReg.test(value);
};

const validateForm = (form, validation) => {
  let isValidForm = true;
  for (const name in form) {
    isValidForm = isValidForm && validateField(validation[name], form[name]);
  }
  return isValidForm;
};

export { validateField, validateForm, validateEmail };
