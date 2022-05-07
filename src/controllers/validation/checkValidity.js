const validateField = (rule, value) => {
    let isValid = true;
    const type = rule.type;
    const require = rule.require;
    if (require) {
        switch (type) {
            case 'text':
                isValid = value?.trim() !== "" ? true : false
                break;
            case 'number':
                isValid = !isNaN(value);
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
}

const validateForm = (form, validation) => {
    let isValidForm = true;
    for (const name in form) {
        isValidForm = isValidForm && validateField(validation[name], form[name]);
    }
    return isValidForm;
}

export { validateField, validateForm };