import { Container } from '@mui/material';
import React from 'react'
import MyForm from '../components/MyForm';

const CandidateFile = ({ onFormSubmit }) => {
  return (
    <Container>
        <MyForm onFormSubmit={onFormSubmit} />
    </Container>
  )
}

export default CandidateFile;