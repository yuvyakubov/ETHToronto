import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material/";
import TextField from "@mui/material/TextField";
import Slider, { sliderClasses } from "@mui/material/Slider";


const Beneficiary = ({totalBeneficiaries, beneficiary, onRemoveBeneficiary}) => {



  const [beneficiaryName, setBenefeciaryName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [percentage, setPercentage] = useState(100/totalBeneficiaries);

  const addBeneficiary = () => {
    console.log(beneficiaryName);
    console.log(relationship);
    console.log(percentage);
  }


  return (
    <Box px={5} style={styles.benificiaryContainer} >
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box py={3}>
          <TextField
            fullWidth
            id="standard-basic"
            label="BENEFICIARY NAME"
            variant="outlined"
            onChange={(e) => setBenefeciaryName(e.target.value)} />
        </Box>
        <Box pb={3}>
          <TextField 
          fullWidth 
          label="RELATIONSHIP" 
          variant="outlined" 
          onChange={(e) => setRelationship(e.target.value)} />
        </Box>
        <Typography variant="h7" gutterBottom component="div" style={styles.subTitle}>
          PERCENTAGE
        </Typography>
        <Box>
          <Slider
            aria-label="Custom marks"
            value={percentage}
            valueLabelDisplay="auto"
            style={styles.percentageSlider}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </Box>
        <Box py={3}>
          <Button style={styles.deleteBeneficiaryButton} variant="contained" onClick={(e) => onRemoveBeneficiary()}>
            DELETE BENEFICIARY
          </Button>
        </Box>
        <Box py={3}>
          <Button style={styles.deleteBeneficiaryButton} variant="contained" onClick={(e) => addBeneficiary()}>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Test = () => {
  return (
    <div>
      totalBeneficiaries
    </div>
  );
};

const styles = {
  deleteBeneficiaryButton: {
    width: '100%',
    backgroundColor: '#5E17EB',
    fontWeight: 'bold'
  },
  percentageSlider: {
    color:'#5E17EB'
  },
  header: {
    color: '#5E17EB',
    fontWeight: 'bold'
  },
  subTitle: {
    color: '#5E17EB',
  }
}

export default Beneficiary;
