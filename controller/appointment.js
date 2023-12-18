import AppointmentModel from '../models/appointment.js';

export const getAppointments = async (req, res) => {
  try {
    // order appointments by date in descending order
    const appointments = await AppointmentModel.find().sort({ date: 1 });
    res.status(200).json({
      message: 'Appointments fetched successfully',
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

export const createAppointment = async (req, res) => {
  const data = req.body;
  try {
    const appointment = await AppointmentModel.create(data);
    res.status(201).json({
      message: 'Appointment created successfully',
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

// update an appointment
export const updateAppointment = async (req, res) => {
  console.log('hey');
  const { id } = req.params;
  const data = req.body;
  try {
    const appointment = await AppointmentModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    res.status(200).json({
      message: 'Appointment updated successfully',
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

// delete an appointment
export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await AppointmentModel.findByIdAndDelete(id);
    res.status(200).json({
      message: 'Appointment deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};
