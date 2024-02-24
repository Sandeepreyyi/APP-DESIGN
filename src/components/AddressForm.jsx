import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
const AddressForm = ({ setFormData, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  // const handleLogoChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     companyLogo: file
  //   }));
  // };
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        companyLogo: reader.result // Use reader.result as the logo URL
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom color="green">
        Wanted Requirements
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="websiteName"
            name="companyName"
            label="Website Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formData.companyName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="projectPurpose"
            name="purpose"
            label="Project Purpose"
            multiline
            fullWidth
            rows={5}
            value={formData.purpose}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="designSpecifics"
            name="designSpecifics"
            label="Design Specifics"
            multiline
            fullWidth
            rows={5}
            value={formData.designSpecifics}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="referenceWebsites"
            name="referenceWebsites"
            label="Reference Websites"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={formData.referenceWebsites}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel id="webAppSelect-label">Web/App</InputLabel>
        
        <Select
            id="webAppSelect"
            labelId="demo-select-small-label"
            name="websiteOrApp"
            value={formData.websiteOrApp}
            label="Web/App"
            onChange={handleChange}
            fullWidth
          >
            
            <MenuItem value="" aria-placeholder='web'>
              
            </MenuItem>
            <MenuItem value="App">App</MenuItem>
            <MenuItem value="Website">Website</MenuItem>
            <MenuItem value="App and Website">App and Website</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
        <label htmlFor="logo">Logo:</label>
        <input
            type="file"
            id="logo"
            name="companyLogo"
            onChange={handleLogoChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
