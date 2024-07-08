import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';

const CustomTableCell = styled(TableCell)({
  borderBottom: 'none',
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Nom', 'EBANG'),
  createData('Prénom', 'Ariel'),
  createData('Numéro de téléphone', '0625966488'),
  createData('Adresse email', 'ariel.ebang@goshaba.com'),
];

function InfosArray() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="left">{row.calories}</CustomTableCell>
              <CustomTableCell align="left">{row.fat}</CustomTableCell>
              <CustomTableCell align="left">{row.carbs}</CustomTableCell>
              <CustomTableCell align="left">{row.protein}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InfosArray;
