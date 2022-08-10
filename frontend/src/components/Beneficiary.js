import React, { useEffect } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material/";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

const Beneficiary = ({totalBeneficiaries, beneficiary, setBeneficiary}) => {
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
            onChange={(e) => {setBeneficiary({fullName: e.target.value, ...beneficiary})}}
          />
        </Box>
        <Box pb={3}>
          <TextField fullWidth label="RELATIONSHIP" variant="outlined" onChange={(e) => {setBeneficiary({relationship: e.target.value, ...beneficiary})}} />
        </Box>
        <Typography variant="h7" gutterBottom component="div" style={styles.subTitle}>
          PERCENTAGE
        </Typography>
        <Box>
          <Slider
            aria-label="Custom marks"
            value={100/totalBeneficiaries}
            valueLabelDisplay="auto"
            style={styles.percentageSlider}
          />
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
  addMoreButton: {
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
