const { z } = require('zod');

const registrationSchema = z.object({
  name: z.string().nonempty().min(2).max(50),
  email: z.string().email(),
  passwords: z.string().min(6).max(30),
});

const validateRegistrationInput = (data) => {
  try {
    registrationSchema.parse(data);
    return true; // Validation successful
  } catch (error) {
    // Validation failed, return the first error message
    return error.errors[0];
  }
};

module.exports = { validateRegistrationInput };
