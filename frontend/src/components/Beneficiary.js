import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material/";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 20,
    label: "20%",
  },
  {
    value: 100,
    label: "100%",
  },
];

function valuetext(value) {
  return `${value}%`;
}

const Beneficiary = () => {
  return (
    <Box sx={{ width: 1, height: 1 }} style={{ backgroundColor: "white" }}>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 3 }}>
          <Typography variant="h5" gutterBottom component="div">
            BENEFICIARY
          </Typography>
        </Box>

        <Box style={styles.homeSubTitle}>
          <TextField
            fullWidth
            id="standard-basic"
            label="BENEFICIARY NAME"
            variant="outlined"
          />
        </Box>
        <Box>
          <TextField fullWidth label="RELATIONSHIP" variant="outlined" />
        </Box>
        <Typography variant="h7" gutterBottom component="div">
          PERCENTAGE
        </Typography>
        <Box>
          <Slider
            aria-label="Custom marks"
            defaultValue={25}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box>
          <Button variant="contained" style={styles.saveButton}>
            ADD MORE +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  homeTitle: {
    color: "white",
    fontSize: "2em",
    fontWeight: "bold",
  },
  homeSubTitle: {
    margin: "15px",
    color: "white",
    margin: "auto",
    fontSize: "0.8em",
  },
  walletButton: {
    backgroundColor: "white",
    color: "#5E17EB",
  },
};

export default Beneficiary;

{
  /* <Box style={styles.homeSubTitle}>
          <TextField
            fullWidth
            id="standard-basic"
            label="BENEFICIARY NAME"
            variant="standard"
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="RELATIONSHIP"
            variant="outlined"
          />
        </Box>

        <Typography variant="h7" gutterBottom component="div">
          PERCENTAGE
        </Typography>

        <Box>
          <Slider
            aria-label="Custom marks"
            defaultValue={25}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
        <Box>
          <Button variant="contained" style={styles.saveButton}>
            ADD MORE +
          </Button>
        </Box> */
}
