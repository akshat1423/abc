import React, { useState, useEffect } from 'react';
import { Paper, Grid, Button, TextField, Avatar, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Box, IconButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { eachDayOfInterval, endOfWeek, format, startOfWeek, getDay } from 'date-fns';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TimeAxis from './TimeAxis'; // Import the TimeAxis component
import DatePickerDialog from '../Inventory/Popups/DatePicker';
import AddReservationDialog from './popups/AddReservation';
import { useNavigate } from 'react-router-dom';
import PlacesAPI from '../../utilities/api/placeApi';

const times = [
  '07AM', '08AM', '09AM', '10AM', '11AM', '12PM',
  '01PM', '02PM', '03PM', '04PM', '05PM', '06PM',
  '07PM', '08PM', '09PM', '10PM'
];

function CalendarPage({collapsed, setCollapsed}) {

  const [reservationList, setReservationList] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  // You would have state here for reservations and a function to add them.

  useEffect(()=>{
    const response = PlacesAPI.ReservationListGet();
    console.log(response);
    setReservationList(response);
  }, []);

  const navigate = useNavigate();
  const handleExit = () => {
    navigate('/inventory');
  }
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  const days = eachDayOfInterval({
    start: startOfWeek(selectedDate),
    end: endOfWeek(selectedDate),
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleToggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  // Add the reservation logic here
  const handleAddReservation = () => {
    handleCloseDialog();
    // Implement the functionality to add a reservation to your state or backend
  };
  // console.log('53', selectedDate);
  // console.log('54', days[0]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
  <Paper>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', gap: '8px' }}>
      <IconButton size="large" sx={{ background: '#E6F2FF', marginRight: '12px' }}>
        <CalendarTodayIcon sx={{ color: '#212121' }} />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1, color: '#212121' }}>
        Calendar
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          sx={{ background: '#3F3F3F', color: '#F4F4F4' }}
          onClick={handleOpenDialog}
        >
          Add Reservation
        </Button>
        <IconButton onClick={handleExit} size="large" sx={{ background: '#FFE5E5' }}>
          <CloseIcon sx={{ color: '#C90505' }} />
        </IconButton>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 24px' }}>
      <Box sx={{ display: 'flex' , flexDirection:'row'}}>
          <Button variant="text" sx={{ color: '#7A7A7A' }} onClick={() => setSelectedDate(new Date())}>
            Today
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <IconButton onClick={() => setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, prevDate.getDate()))}>
              <ChevronLeftIcon sx={{ color: '#212121' }} />
            </IconButton>
            <IconButton onClick={() => setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, prevDate.getDate()))}>
              <ChevronRightIcon sx={{ color: '#212121' }} />
            </IconButton>
            <Typography sx={{ color: '#3F3F3F', fontWeight: 'bold' }}>
              {format(selectedDate, 'dd MMMM yyyy')}
            </Typography>
            <IconButton onClick={handleToggleCalendar}>
            <ArrowDropDownIcon />
            </IconButton>
          </Box>
          </Box>
          <TextField
            sx={{ background: '#F4F4F4', borderRadius: '12px', border: '1px solid #B5B5B5' }}
            placeholder="Search...."
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon sx={{ color: '#7A7A7A' }} />
                </IconButton>
              ),
            }}
          />
        </Box>
        <Grid container>
        <Grid item>
          <TimeAxis />
        </Grid>
        
        <Grid item xs>
          {/* The rest of your calendar grid */}
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {days.map((day) => (
              <Box key={day.toISOString()} sx={{ 
                border: '1px solid #D3D3D3', flexGrow: 1 
              }}>
                <Box sx = {{
                  height: '3.8125rem',
                  // flexShrink: 0,
                  // alignSelf: 'stretch',
                  background: 'var(--Primary-Primary10, #E9E9E9)',
                }}>
                <Typography variant="subtitle2" sx={{ color: 'var(--Primary-Primary03, #5C5C5C)',
                    fontFamily: 'Segoe UI',
                    fontSize: '1.5rem',
                    fontStyle: 'normal',
                    fontWeight: getDay(day)===getDay(selectedDate) ? 700: 600,
                    lineHeight: '2rem', 
                    paddingTop:'4px',
                    paddingLeft: '8px',
                    paddingBottom:'0px',
                    color: getDay(day)===getDay(selectedDate) ? "#007BFF": "black"
                    }}>
                    {format(day, 'd')}
                </Typography>
                <Box sx={{display:'flex'}}>
                  <Typography variant="subtitle2" sx={{ 
                    color: 'var(--Primary-Primary03, #5C5C5C)',
                    fontFamily: 'Segoe UI',
                    fontSize: '0.85rem',
                    fontStyle: 'normal',
                    fontWeight: getDay(day)===getDay(selectedDate) ? 600: 400,
                    padding:'3px',
                    paddingLeft: '8px',
                    // lineHeight: '1.2rem',
                    color: getDay(day)===getDay(selectedDate) ? "#007BFF": "black"
                  }}>
                    {format(day, 'EEEE')}
                  </Typography>
                  <Typography variant="subtitle2" sx={{
                    color: 'var(--Primary-Primary03, #5C5C5C)',
                    textAlign: 'right',
                    fontFamily: 'Segoe UI',
                    fontSize: '0.85rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    padding:'3px', 
                    marginLeft:'55%'
                    // lineHeight: '0rem',
                  }}>
                    1h
                  </Typography>
                </Box>
                </Box>
                
                {times.map((time, index) => (
                    <Box key={index} sx={{
                      height: '5.5rem',
                      padding: '0.5rem',
                      background: 'var(--Primary-Primary10, #E9E9E9)',
                      borderTop: '1px solid #D3D3D3', 
                      flexGrow: 1,
                      flexShrink: 0
                    }}> 
                      <Typography variant="subtitle2" sx={{ textAlign: 'center', padding: '8px' }}>
                        {/* Empty content */}
                      </Typography>
                    </Box>
                  ))}
                  </Box>
              ))}
          </Box>  
        </Grid>
      </Grid>
    {/* ... Rest of your component */}
  </Paper>
        <AddReservationDialog open={openDialog} onClose={handleCloseDialog}/> 
        <DatePickerDialog open={calendarOpen} selectedDate={selectedDate} handleDateChange={handleDateChange} handleToggleCalendar={handleToggleCalendar}/>
    </LocalizationProvider>
  );
}

export default CalendarPage;
