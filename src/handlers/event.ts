import prisma from "../db";

export const getEvents = async (req, res, next) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200);
    res.json({ data: events });
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const event = await prisma.event.create({
      data: {
        date: req.body.date,
        venue: req.body.venue,
        name: req.body.name,
      },
    });
    res.status(201);
    res.json({ data: event });
  } catch (error) {
    next(error);
  }
};

export const findEventById = async (req, res, next) => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: req.params.eventId,
      },
    });
    res.status(200);
    res.json({ data: event });
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const event = await prisma.event.update({
      where: {
        id: req.params.eventId,
      },
      data: {
        date: req.body.date,
        venue: req.body.venue,
        name: req.body.name,
      },
    });
    res.status(200);
    res.json({ data: event });
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const event = await prisma.event.delete({
      where: {
        id: req.params.eventId,
      },
    });
    res.status(200);
    res.json({ data: event });
  } catch (error) {
    next(error);
  }
};
