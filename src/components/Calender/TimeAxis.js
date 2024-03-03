import React from 'react';
import { Box, Typography } from '@mui/material';

function TimeAxis() {
  const times = [
    '07AM', '08AM', '09AM', '10AM', '11AM', '12PM',
    '01PM', '02PM', '03PM', '04PM', '05PM', '06PM',
    '07PM', '08PM', '09PM', '10PM'
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{
        display: 'flex',
        width: '3.0625rem',
        height: '3.8125rem',
        padding: '0  0.5rem',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '0.5rem',
        flexShrink: 0,
        borderRight: '1px solid var(--Primary-Primary09, #D3D3D3)',
        borderBottom: '1px solid var(--Primary-Primary09, #D3D3D3)',
        borderLeft: '1px solid var(--Primary-Primary09, #D3D3D3)',
        background: 'var(--Primary-Primary10, #E9E9E9)',
      }}>

      </Box>
      {times.map((time, index) => (
        <Box key={index} sx={{
          display: 'flex',
          width: '3.0625rem',
          height: '5.5rem',
          padding: '0.5rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexShrink: 0,
          borderRight: '1px solid var(--Primary-Primary09, #D3D3D3)',
          borderBottom: '1px solid var(--Primary-Primary09, #D3D3D3)',
          borderLeft: '1px solid var(--Primary-Primary09, #D3D3D3)',
          background: 'var(--Primary-Primary10, #E9E9E9)',
        }}>
          <Typography variant="subtitle2" sx={{ color: '#3F3F3F' }}>
            {time}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default TimeAxis;
