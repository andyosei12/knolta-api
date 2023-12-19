import Joi from 'joi';

const validateExecutiveInput = async (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    position: Joi.string().required(),
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

export default validateExecutiveInput;
