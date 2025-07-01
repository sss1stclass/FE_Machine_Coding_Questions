import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

const Page1 = ({ setSteps, formdata, handleChange }: any) => {
  return (
    <Box width="100%">
      <form>
        <Paper
          sx={{
            padding: 2,
            width: "auto",
          }}
          elevation={2}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{ width: "80%" }}
              variant="outlined"
              name="name"
              label="Name"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Enter your name..."
            />
            <TextField
              sx={{ width: "80%" }}
              variant="outlined"
              name="email"
              label="Email"
              placeholder="Enter your email..."
            />
            <TextField
              sx={{ width: "80%" }}
              variant="outlined"
              type="number"
              name="age"
              label="Age"
              placeholder="Enter your age..."
            />
            <TextField
              sx={{ width: "80%" }}
              variant="outlined"
              name="address"
              label="Address"
              placeholder="Enter your address..."
            />

            <FormControl sx={{ width: "80%" }}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender-select"
                label="Gender"
                name='gender'
                onChange={handleChange}
                value = {formdata.gender}
                defaultValue=""
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="trans">Trans</MenuItem>
              </Select>
            </FormControl>

            <FormGroup sx={{ width: "80%" }}>
              <FormControlLabel
                control={<Checkbox/>}
                label="Student"
                name='isStudent'
                value={formdata.isStudent}
                onChange={handleChange}
              />
            </FormGroup>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: 2,
              mt: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" color="info">
              Reset
            </Button>
            <Button onClick={() => setSteps(1)} variant="contained" color="success">
              Next
            </Button>
          </Box>
        </Paper>
      </form>
    </Box>
  );
};

export default Page1;
