import Joi from 'joi';

const validateAppointment = async (req, res, next) => {
  const schema = Joi.object({
    date: Joi.date().required(),
    first_acolyte: Joi.string().required(),
    second_acolyte: Joi.string().required(),
    cross_bearer: Joi.string(),
    mc: Joi.string(),
    thurifier: Joi.string(),
    boat_bearer: Joi.string(),
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

export default validateAppointment;
