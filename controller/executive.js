import ExecutiveModel from '../models/executive.js';

// Get all executives
export const getAllExecutives = async (req, res) => {
  try {
    const executives = await ExecutiveModel.find();
    res.status(200).json({ executives });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create executive
export const createExecutive = async (req, res) => {
  try {
    // Check if position already exists
    const executiveExists = await ExecutiveModel.findOne({
      position: req.body.position,
    });
    if (executiveExists) {
      return res.status(409).json({
        message: 'Position already exists',
      });
    }
    const executive = await ExecutiveModel.create(req.body);
    res.status(201).json({ executive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an executive
export const getExecutive = async (req, res) => {
  try {
    const executive = await ExecutiveModel.findById(req.params.id);
    if (!executive) {
      return res.status(404).json({
        message: 'Executive not found',
      });
    }
    res.status(200).json({ executive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an executive
export const updateExecutive = async (req, res) => {
  try {
    const executive = await ExecutiveModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!executive) {
      return res.status(404).json({
        message: 'Executive not found',
      });
    }
    res.status(200).json({ executive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an executive
export const deleteExecutive = async (req, res) => {
  try {
    const executive = await ExecutiveModel.findByIdAndDelete(req.params.id);
    if (!executive) {
      return res.status(404).json({
        message: 'Executive not found',
      });
    }
    res
      .status(200)
      .json({ message: 'Executive deleted successfully', executive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
