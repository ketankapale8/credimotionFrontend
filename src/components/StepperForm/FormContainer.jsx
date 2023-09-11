import React from 'react';
import LinaerStepper from './LinearStepper';
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

const FormContainer = () => {
  return (
    <>
    <CssBaseline />
    <Container component={Box} p={4}>
      <Paper component={Box} p={3}>
        <LinaerStepper />
      </Paper>
    </Container>
    
    </>
  )
}

export default FormContainer