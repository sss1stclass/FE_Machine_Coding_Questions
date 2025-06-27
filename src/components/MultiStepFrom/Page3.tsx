import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Page3 = ({setSteps}:any) => {
  return (
    <Box>
        <Typography textAlign='center'>Thanks your form is submitted sussfully...</Typography>
        <Button onClick={()=>setSteps(0)}>Go Back</Button>
      
    </Box>
  )
}

export default Page3
