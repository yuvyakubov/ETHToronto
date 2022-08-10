import React, { useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import BeneficiaryList from '../components/BeneficiaryList.js'

import logo from "../images/logo.png";

const StepScreen = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Box pt={10} sx={{height: '25%'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit' }}>
          <Box pb={2}>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
              <img src={logo} style={styles.logo} />
            </Box>
            <Box style={styles.homeTitle}> Decenterlife </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: 1, height: '75%' }}>
        <BeneficiaryList beneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries}/>
      </Box>
    </Box>
  );
}

const styles = {
  logo: {
    width: 120,
  },
  homeTitle: {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold'
  },
  homeSubTitle: {
    color: 'white',
    margin: 'auto',
    fontSize: '0.8em',
  },
  walletButton: {
    backgroundColor: 'white',
    color: '#5E17EB'
  }
};

export default StepScreen;
