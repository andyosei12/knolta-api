import ProgramModel from '../models/program.js';

// Get all programs
export const getAllPrograms = async (req, res) => {
  try {
    const programs = await ProgramModel.find();
    res.status(200).json({ programs }).sort({ date: 1 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a program
export const createProgram = async (req, res) => {
  try {
    const program = await ProgramModel.create(req.body);
    res.status(201).json({ program });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a program
export const getProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await ProgramModel.findById(id);
    if (program) {
      return res.status(200).json({ program });
    }
    res.status(404).json({ message: 'Program not found!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a program
export const updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await ProgramModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ program });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a program
export const deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;
    await ProgramModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Program deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
