import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material/";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Beneficiary from './Beneficiary.js'
import Test from './Beneficiary.js'

const BeneficiaryList = (props) => {
  // const [lastBeneficiary, setLastBeneficiary] = useState({fullName: null, relationship: null, percentage: null})

  const addBeneficiary = () => {
    props.setBeneficiaries([...props.beneficiaries, { fullName: null, relationship: null, percentage: 100 }])
    console.log(props.beneficiaries.length + 1)
    console.log(props.setBeneficiaries)
  }



  const removeBeneficiary = (position) => {
    console.log(position);
    console.log(props.beneficiaries);
    props.setBeneficiaries(props.beneficiaries.splice(position, 1));
  }

  console.log(props.setBeneficiaries)
  console.log(props.beneficiaries)
  console.log(props.beneficiaries.length + 1)
  return (
    <Box px={5} style={styles.benificiaryContainer} >
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box pt={3}>
          <Typography variant="h5" gutterBottom component="div" style={styles.header}>
            BENEFICIARY
          </Typography>
        </Box>
        <Box>
          {
            props.beneficiaries.map((beneficiary, index) => {
              return (
                <Beneficiary
                  totalBeneficiaries={props.beneficiaries.length}
                  beneficiary={beneficiary}
                  onRemoveBeneficiary={() => removeBeneficiary(index)} />
              );
            })
          }



        </Box>

        <Box pb={5}>
          <Button style={styles.addMoreButton} variant="contained" onClick={() => addBeneficiary()}>
            ADD MORE +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  benificiaryContainer: {
    borderRadius: '2em 2em 0em 0em',
    backgroundColor: "white"
  },
  addMoreButton: {
    width: '100%',
    backgroundColor: '#5E17EB',
    fontWeight: 'bold'
  },
  percentageSlider: {
    color: '#5E17EB'
  },
  header: {
    color: '#5E17EB',
    fontWeight: 'bold'
  },
  subTitle: {
    color: '#5E17EB',
  }
}

export default BeneficiaryList;


// {(props.beneficiaries.length > 0) && props.beneficiaries.forEach((beneficiary) => {
//   <Beneficiary totalBeneficiaries={props.beneficiaries.length} beneficiary={lastBeneficiary} setBeneficiary={setLastBeneficiary} {...props}/>
// })}
