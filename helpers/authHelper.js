function validateEmail(email) {
    // this regex was generated with ai 
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

module.exports = {
    validateEmail
}