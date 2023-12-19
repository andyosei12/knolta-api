import Joi from 'joi';

const validateProgramInput = async (req, res, next) => {
  const schema = Joi.object({
    date: Joi.date().required(),
    name: Joi.string().required(),
    venue: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: true });
    next();
  } catch (err) {
    return res.status(422).json({
      message: err.message,
    });
  }
};

export default validateProgramInput;
