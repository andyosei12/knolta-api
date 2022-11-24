const validateAuthInputs = (req, res, next) => {
  const isEmail = req.body.email.includes("@");
  const isPasswordLength = req.body.password.length >= 8;

  if (!isEmail) {
    res.status(400);
    res.json({ message: "Please provide a valid email" });
  }

  if (!isPasswordLength) {
    res.status(400);
    res.json({
      message: "Password length must be equal or greater than 8 characters",
    });
  }

  next();
};

export default validateAuthInputs;
