import React from 'react'
import PropTypes from 'prop-types'

import MainCard from './MainCard'
import { Box } from '@mui/material';

const AuthCard = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 1, sm: 1.5, xl: 3 } }}>{children}</Box>
  </MainCard>
);

AuthCard.propTypes = { children: PropTypes.node };

export default AuthCard