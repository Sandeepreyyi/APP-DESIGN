import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PaymentForm = ({ setFormData, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Investment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="budget"
            name="budget"
            label="Budget"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={formData.budget}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <TextField
            required
            id="currentCustomers"
            name="currentCustomers"
            label="Current Customers"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={formData.currentCustomers}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="userProfiles"
            name="userProfiles"
            label="Number of User Profiles"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={formData.userProfiles}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <Typography variant="subtitle1" gutterBottom>
            Timeline for Launch
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Timeline for Launch"
              value={formData.launchTimeline}
              onChange={(date) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  launchTimeline: date
                }))
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
