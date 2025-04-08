import React from 'react';
import { Stack, Pagination } from '@mui/material';

const PaginationControls = ({ 
  count, 
  page, 
  onChange, 
  size = "large" 
}) => {
  return (
    <Stack spacing={2} sx={{ mt: 3, alignItems: 'center' }}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
        size={size}
      />
    </Stack>
  );
};

export default PaginationControls;