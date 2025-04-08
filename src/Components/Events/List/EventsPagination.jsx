import React from "react";
import { Stack, Pagination } from "@mui/material";

const EventsPagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <Stack spacing={2} sx={{ mt: 4, alignItems: 'center' }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="large"
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'black',
            fontSize: '1.2rem',
          },
          '& .Mui-selected': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
          },
        }}
      />
    </Stack>
  );
};

export default EventsPagination;