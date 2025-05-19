import Joi from 'joi';

export interface IRegisterData {
  name: string;
  username: string;
  password: string;
}

const registerSchema = Joi.object<IRegisterData>({
  name: Joi.string()
    .pattern(new RegExp('^[A-Za-z ]+$'))
    .required()
    .messages({
      'string.pattern.base': 'Name should only contain alphabets and spaces!',
      'any.required': 'Please Enter Name!'
    }),

  username: Joi.string()
    .required()
    .messages({
      'any.required': 'Please Enter Username!'
    }),

  password: Joi.string()
    .min(6)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$!%*?&])[A-Za-z\\d@#$!%*?&]{6,}$'))
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters!',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character!',
      'any.required': 'Please Enter Password!'
    })
});

export default registerSchema;
