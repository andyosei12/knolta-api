import prisma from "../db";

export const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await prisma.appointment.findMany();
    res.status(200);
    res.json({ data: appointments });
  } catch (error) {
    next(error);
  }
};

export const createAppointment = async (req, res, next) => {
  try {
    const appointment = await prisma.appointment.create({
      data: {
        date: req.body.date,
        thurifier: req.body.thurifier,
        boarBearer: req.body.boatBearer,
        crossBearer: req.body.crossBearer,
        firstAcolyte: req.body.firstAcolyte,
        secondAcolyte: req.body.secondAcolyte,
        MC: req.body.MC,
      },
    });
    res.status(201);
    res.json({ data: appointment });
  } catch (error) {
    next(error);
  }
};

export const findAppointmentById = async (req, res, next) => {
  try {
    const appointment = await prisma.appointment.findUnique({
      where: {
        id: req.params.appointmentId,
      },
    });
    res.status(200);
    res.json({ data: appointment });
  } catch (error) {
    next(error);
  }
};

export const updateAppointment = async (req, res, next) => {
  try {
    const appointment = await prisma.appointment.update({
      where: {
        id: req.params.appointmentId,
      },
      data: {
        date: req.body.date,
        thurifier: req.body.thurifier,
        boarBearer: req.body.boatBearer,
        crossBearer: req.body.crossBearer,
        firstAcolyte: req.body.firstAcolyte,
        secondAcolyte: req.body.secondAcolyte,
        MC: req.body.MC,
      },
    });
    res.status(200);
    res.json({ data: appointment });
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (req, res, next) => {
  try {
    const appointment = await prisma.appointment.delete({
      where: {
        id: req.params.appointmentId,
      },
    });
    res.status(200);
    res.json({ data: appointment });
  } catch (error) {
    next(error);
  }
};
