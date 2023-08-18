import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo1 from '../assets/images/logo1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo1} alt="logo" style={{ width: '150px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">Made with ❤️ by Akhilesh</Typography>
  </Box>
);

export default Footer;
