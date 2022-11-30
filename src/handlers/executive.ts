import prisma from "../db";

export const getExecutives = async (req, res) => {
  const executives = await prisma.executive.findMany();
  res.status(200);
  res.json({ data: executives });
};

export const createExecutive = async (req, res) => {
  const executive = await prisma.executive.create({
    data: {
      chairPerson: req.body.chairPerson,
      secretary: req.body.secretary,
      assistantSecretary: req.body.assistantSecretary,
      viceChairPerson: req.body.viceChairPerson,
      financialSecretary: req.body.financialSecretary,
      organizer: req.body.organizer,
    },
  });
  res.status(201);
  res.json({ data: executive });
};

export const findExecutiveById = async (req, res) => {
  const executive = await prisma.executive.findUnique({
    where: {
      id: req.params.executiveId,
    },
  });
  res.status(200);
  res.json({ data: executive });
};

export const updateExecutive = async (req, res) => {
  const executive = await prisma.executive.update({
    where: {
      id: req.params.executiveId,
    },
    data: {
      chairPerson: req.body.chairPerson,
      secretary: req.body.secretary,
      assistantSecretary: req.body.assistantSecretary,
      viceChairPerson: req.body.viceChairPerson,
      financialSecretary: req.body.financialSecretary,
      organizer: req.body.organizer,
    },
  });
};

export const deleteExecutive = async (req, res) => {
  const executive = await prisma.executive.delete({
    where: {
      id: req.params.executiveId,
    },
  });
  res.status(200);
  res.json({ data: executive });
};
