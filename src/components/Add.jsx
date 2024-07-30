import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { Button } from '@mui/material';

const Add = () => {
  const [form,setform]=useState({
    "productName":'',
    "productCategory":'',
    "productPrice":'',
    "productImage":''
  }) 
  
 let showData=()=>{
  console.log(form);
  axios.post()
}
function valueCap(e)
{
  // console.log(e)
  setform({...form,[e.target.name]:e.target.value})
}
return (
  <div>
    <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <div>
    <TextField
      required
      id="outlined-required"
      label="ProductName"
      defaultValue="title"
      name='productName'  
      value={form.title}
      onChange={valueCap}
    />
    <br/>

  <TextField
      required
      id="outlined-required"
      label="ProductCategory"
      defaultValue="category"
      name='productCategory'  
      value={form.category}
      onChange={valueCap}
    />
    <br/>

  <TextField
      required
      id="outlined-required"
      label="ProductPrice"
      defaultValue="price"
      name='price'  
      value={form.price}
      onChange={valueCap}
    />
    <br/>

  <TextField
      required
      id="outlined-required"
      label="ProductImage"
      defaultValue="image"
      name='image'  
      value={form.image}
      onChange={valueCap}
    />
     </div>
     <Button variant="contained" color='success' onClick={showData}Submit> Submit </Button>
     </Box>
  </div>
)
}

export default Add
