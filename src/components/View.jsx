
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {"productName": "MARX", "productCategory": "BEAUTY","productPrice":"599"},
  {"productName": "COMIN", "productCategory": "HAIR","productPrice":"1000"},
  {"productName": "TERAIN", "productCategory": "BEAUTY","productPrice":"1500"}
];

const View = () => {
  return (
    <>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"><center><b>PRODUCT NAME</b></center></TableCell>
              <TableCell align="right"><center><b>PRODUCT CATEGORY</b></center></TableCell>
              <TableCell align="right"><center><b>PRODUCT PRICE</b></center></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row"><center>
                  {row.productName}</center>
                </TableCell>
                <TableCell align="right"><center>{row.productCategory}</center></TableCell>
                <TableCell align="right"><center>{row.productPrice}</center></TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>
    </>
  
  )
}

export default View
