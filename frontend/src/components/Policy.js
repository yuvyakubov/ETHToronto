import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'



const Policy = () => {

    return (
        <Box sx={{ width: 1, height: 1 }} style={styles.policyContainer}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit' }}>
                <Box>
                    <Box style={styles.policyTitle}> Complete your policy </Box>
                    <Box> &nbsp; </Box>
                    <Box> &nbsp; </Box>
                    <Box>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl> </Box>
                    <Box style={styles.policySubTitle}> <TextField fullWidth id="standard-basic" label="Name" variant="outlined" /> </Box>
                    <Box style={styles.policySubTitle}> <TextField fullWidth id="standard-basic" label="Date of birth" variant="outlined" /> </Box>
                    <Box style={styles.policySubTitle}> <TextField fullWidth id="standard-basic" label="Phone" variant="outlined" /> </Box>
                    <Box style={styles.policySubTitle}> <TextField fullWidth id="standard-basic" label="ID" variant="outlined" /> </Box>
                    <Box style={styles.policySubTitle}> <TextField fullWidth id="standard-basic" label="Social Insurance Number" variant="outlined" /> </Box>
                    <Box> &nbsp; </Box>
                    <Box> &nbsp; </Box>
                    <Box><Button variant="contained" style={styles.saveButton} > Save</Button></Box>


                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    policyTitle: {
        color: '#5E17EB',
        fontSize: '2em',
        fontWeight: 'bold'
    },
    policySubTitle: {
        color: '#5E17EB',
        margin: 'auto',
        fontSize: '0.8em',
    },
    saveButton: {
        width: '100%',
        backgroundColor: '#5E17EB',
        fontWeight: 'bold'
    },
    policyContainer: {
        borderRadius: '2em 2em 0em 0em',
        width: '100%',
        backgroundColor: 'white',
        fontWeight: 'bold'
    },
    
};

export default Policy;
