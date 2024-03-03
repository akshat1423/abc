import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

const CustomPagination = ({ count, page, onChange }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2), // Adjust the padding as needed
        // Apply additional styles if necessary to match your design
      }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        renderItem={(item) => (
          <PaginationItem
            components={{}}
            {...item}
            sx={{
              margin: theme.spacing(0, 1), // Adjust spacing between pagination items
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main, // This is for the selected page number
                color: theme.palette.common.white,
              },
              // Apply additional styles to match the image provided
            }}
          />
        )}
      />
    </Box>
  );
};

export default CustomPagination;


