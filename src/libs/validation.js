
/**
 * Validates the format of an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, otherwise false.
 */
export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

/**
 * Validates the length of a password.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password meets the length criteria, otherwise false.
 */
export const validatePassword = (password) => {
  const minLength = 8;
  return password.length >= minLength;
};

