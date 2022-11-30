import prisma from "../db";

export const getEvents = async (req, res) => {
  const events = await prisma.event.findMany();
  res.status(200);
  res.json({ data: events });
};

export const createEvent = async (req, res) => {
  const event = await prisma.event.create({
    data: {
      date: req.body.date,
      venue: req.body.venue,
      name: req.body.name,
    },
  });
  res.status(201);
  res.json({ data: event });
};

export const findEventById = async (req, res) => {
  const event = await prisma.event.findUnique({
    where: {
      id: req.params.eventId,
    },
  });
  res.status(200);
  res.json({ data: event });
};

export const updateEvent = async (req, res) => {
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
};

export const deleteEvent = async (req, res) => {
  const event = await prisma.event.delete({
    where: {
      id: req.params.eventId,
    },
  });
  res.status(200);
  res.json({ data: event });
};
