const validateName = (value) => {

    const errors = [];

    if (!value.trim()) {
        errors.push('Field name is required.');
    }
    if (value.length < 2 || value.length > 50) {
        errors.push('The name must be between 2 and 50 characters long.');
    }
    if (!/^[A-Za-zА-Яа-яЁё\s-]+$/.test(value)) {
        errors.push('The name can only contain letters, spaces and hyphens.');
    }

    return errors;

};

const validateLastname = (value) => {

    const errors = [];

    if (!value.trim()) {
        errors.push('Field lastname is required.');
    }
    if (value.length < 2 || value.length > 50) {
        errors.push('The lastname must be between 2 and 50 characters long.');
    }
    if (!/^[A-Za-zА-Яа-яЁё\s-]+$/.test(value)) {
        errors.push('The lastname can only contain letters, spaces and hyphens.');
    }

    return errors;

};

const validateJob = (value) => {

    const errors = [];

    if (value.length > 100) {
        errors.push('The job title must not exceed 100 characters.');
    }
    if (value && !/^[A-Za-zА-Яа-яЁё0-9\s]+$/.test(value)) {
        errors.push('The job title can only contain letters, numbers, and spaces.');
    }

    return errors;

};

const validatePhoneNumber = (value) => {

    const errors = [];

    if (!value.trim()) {
        errors.push('Field phone is required.');
    }
    if (!/^\+[\d]{1,3}[\d]{10,14}$/.test(value)) {
        errors.push('The phone number must start with a "+" followed by the country code and the phone number (e.g., +79999999999).');
    }
    if (value.length < 10 || value.length > 15) {
        errors.push('The phone number must be between 10 and 15 characters long.');
    }

    return errors;

};

const validateEmail = (value) => {

    const errors = [];

    if (!value.trim()) {
        errors.push('Field email is required.');
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
        errors.push('Please enter a valid email address.');
    }

    return errors;

};

const validateAddress = (value) => {

    const errors = [];
    const addressPattern = /^[A-Za-zА-Яа-яЁё0-9\s,.-]*$/;

    if (value.length > 200) {
        errors.push('The address must not exceed 200 characters.');
    }
    if (!addressPattern.test(value)) {
        errors.push('The address can only contain letters, numbers, commas, periods, hyphens, and spaces.');
    }

    return errors;

};

const validatePitch = (value) => {

    const errors = [];

    if (value.length > 200) {
        errors.push('The pitch must not exceed 200 characters.');
    }

    return errors;

};

const validateInterest = (interest, interestsCount) => {

    const validInterestPattern = /^[a-zA-Z0-9\s,\.]*$/; 
    const errors = [];

    if (interest.length > 30) {
        errors.push('Interest cannot exceed 30 characters');
    }
    if (!validInterestPattern.test(interest)) {
        errors.push('Only letters, numbers, spaces and symbols such as commas and periods are allowed');
    }
    if (interestsCount >= 10) {
        errors.push('Maximum 10 interests');
    }

    return errors;

};

const validateLink = (url) => {
    
    const validUrlPattern = /^(http:\/\/|https:\/\/)/;
    const errors = [];

    if (!validUrlPattern.test(url)) {
        errors.push('The URL must start with http:// or https://');
    }

    if (url.length > 200) {
        errors.push('URL length cannot exceed 200 characters');
    }

    return errors;
};


export { 
    validateName, 
    validateLastname,
    validateJob,
    validatePhoneNumber,
    validateEmail,
    validateAddress,
    validatePitch,
    validateInterest,
    validateLink
};