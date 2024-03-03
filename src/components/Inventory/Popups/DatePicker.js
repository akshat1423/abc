import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

const DatePickerDialog = ({ open, selectedDate, handleDateChange, handleToggleCalendar }) => {
  const handleChange = (newDate) => {
    handleDateChange(newDate);
    handleToggleCalendar(); // Close the dialog after selecting a date
  };
  return (
    <Dialog open={open} onClose={handleToggleCalendar}>
      <StaticDatePicker  onChange={handleChange} value={selectedDate} onAccept={handleChange} />
    </Dialog>
  );
};

export default DatePickerDialog;
