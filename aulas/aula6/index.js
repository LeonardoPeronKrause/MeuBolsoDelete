function onChangeEmail() {
    toggleButtonDisabled();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonDisabled();
    togglePassordErrors();
}
    
function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePassordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonDisabled() {
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;
    
    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button')
}
