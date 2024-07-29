import { TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <>
    <TextField id="outlined-basic" label="ProductName" variant="outlined" /><br/>
    <br/>
    <TextField id="outlined-basic" label="ProductCategory" variant="outlined" /><br/>
    <br/>
    <TextField id="outlined-basic" label="ProductPrice" variant="outlined" />
    </>
  )
}

export default Add
