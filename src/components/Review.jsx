import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';

const Review = ({ formData }) => {
  const products = [
    {
      name: 'Company Name',
      data: formData.companyName,
    },
    {
      name: 'Budget',
      data: formData.budget,
    },
    {
      name: 'Website or App',
      data: formData.websiteOrApp,
    },
    {
      name: 'Time',
      data: dayjs(formData.launchTimeline).format('MMMM DD, YYYY'),
    },
    {
      name: 'Logo',
      data: formData.companyLogo ? (
        <img
          src={formData.companyLogo}
          alt="Company Logo"
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />
      ) : (
        'No logo available'
      ),
    },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            {product.name === 'Logo' ? (
              <Box>{product.data}</Box>
            ) : (
              <Typography variant="body2">{product.data}</Typography>
            )}
          </ListItem>
        ))}
      </List>

    </React.Fragment>
  );
};

export default Review;
