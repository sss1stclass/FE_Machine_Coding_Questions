import { Box, Typography } from '@mui/material';
import Page1 from './Page1';
import { useState } from 'react';
import Page2 from './Page2';
import Page3 from './Page3';

const MultiStepForm = () => {
  const [steps, setSteps] = useState(0);
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box mb={2} width="100%">
        <Typography
          sx={{ backgroundColor: 'gray', textTransform: 'capitalize', padding: 1 }}
          textAlign="center"
          variant="h4"
        >
          This is multistep Form demo
        </Typography>
      </Box>

      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {
          steps == 0 && (

            <Page1 steps={steps} setSteps={setSteps}/>
          )
        }
        {
          steps == 1 && (

            <Page2 steps={steps} setSteps={setSteps}/>
          )
        }
        {
          steps == 2 && (

            <Page3 setSteps={setSteps}/>
          )
        }
      </Box>
    </Box>
  );
};

export default MultiStepForm;
