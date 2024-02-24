import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const steps = ['Requirements', 'Duration details', 'Review your Requirement'];

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    purpose: '',
    websiteOrApp: '',
    userProfiles: '',
    budget: '',
    referenceWebsites: '',
    designSpecifics: '',
    companyLogo: null,
    currentCustomers: '',
    technologyPreferences: '',
    launchTimeline: ''
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

 

const handleSubmit = (e) => {
  e.preventDefault();
  fetch('http://localhost:8000/appDetails', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then((res) => {
      if (res.ok) {
        toast.success('Successfully Details Sent');
        setActiveStep(activeStep + 1); 
      } else {
        throw new Error('Failed to submit');
      }
    })
    .catch((err) => {
      toast.error('Failed to submit');
    });
};
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar sx={{backgroundColor:'blue'}}>
          <Typography variant="h6" color="red" noWrap>
            APP-DESIGN
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" color= "blue">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your details
              </Typography>
              <Typography variant="subtitle1">
                We have emailed your order confirmation, and will send you an update
                when your {formData.websiteOrApp} has Completed.
              </Typography>
            </React.Fragment>
          ) : (
            <form onSubmit={handleSubmit}>
            <React.Fragment>
              {activeStep === 0 && <AddressForm setFormData={setFormData} formData={formData} />}
              {activeStep === 1 && <PaymentForm setFormData={setFormData} setCheckoutData={setFormData} formData={formData} />}
              {activeStep === 2 && <Review formData={formData} />}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

{activeStep !== steps.length - 1 && (
    <Button
      variant="contained"
      onClick={handleNext}
      sx={{ mt: 3, ml: 1 }}
    >
      Next
    </Button>
  )}
  {activeStep === steps.length - 1 && (
    <Button
      variant="contained"
      type='submit'
      
      sx={{ mt: 3, ml: 1 }}
    >
      Place order
    </Button>
  )}
              </Box>
            </React.Fragment>
            </form>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Checkout;
