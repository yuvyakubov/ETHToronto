import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Policy from '../components/Policy';



const CustomerProfileScreen = () => {

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Box sx={{ width: 1, height: '25%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit' }}>
          <Box>
            <Box style={styles.homeTitle}> DECENTERLIFE </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: 1, height: '75%' }}>
          <Policy/>
      </Box>
    </Box>
  );
}

const styles = {
  homeTitle: {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold'
  },


};

export default CustomerProfileScreen;
