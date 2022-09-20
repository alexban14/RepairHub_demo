const form = document.querySelector('#form');
const userName = document.querySelector('input[name="name"]');
const userForname = document.querySelector('input[name="forname"]');
const email = document.querySelector('input[name="email"]');
const subject = document.querySelector('input[name="subject"]');
const textArea = document.querySelector('textarea[name="message"]');
const feedback = document.querySelector('.feedback');

const isValidEmail = (email) => {
    // regEx for email validation
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

const inputFields = [userName, userForname, email, subject, textArea];


let isFormValid = false;

// to only check for validation after the form is submited
let isValidationOn = false

const resetElm = (elm) => {
    console.log("##", elm);
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add('hidden');
}

const invalidateElm = (elm) => {
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove('hidden');
}

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputFields.forEach(resetElm);
    // for (variable in inputFields) {
    //     resetElm(variable);
    // }

    if(!userName.value) {
        invalidateElm(userName);
        isFormValid = false;
    }

    if(!userForname.value) {
        invalidateElm(userForname);
        isFormValid = false;
    }

    if(!isValidEmail(email.value)) {
        invalidateElm(email);
        isFormValid = false;
    }

    if(!subject.value) {
        invalidateElm(subject);
        isFormValid = false;
    }

    if(!textArea.value) {
        invalidateElm(textArea);
        isFormValid = false;
    }
}

form.addEventListener('submit', (e) => {
    // console.log("##form submited", submit);
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        feedback.classList.remove('hidden');
    } 
});


// looping thru inputs
    inputFields.forEach((input) => {
        console.log("##forEach", input);
        input.addEventListener('input', () => {
            validateInputs();
        });
    });