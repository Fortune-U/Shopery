import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { newAddressDialogState } from '../features/addressDialog';
import { newAddressId } from '../features/addressId';

export default function FormDialog() {
  const addAddressClicked = useSelector((state)=>state.addressdialog.value);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [addAddress, setAddAddress] = useState('');
  //const [userId, setUserId] = useState('');
  //const getuserId = useSelector((state)=>state.userid.value);
 // console.log(userId);

// Try using redux to pass a value that would be placed in the 

   useEffect(()=>{
    setOpen(addAddressClicked);
    //setUserId(getuserId);
   },[addAddressClicked])
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(newAddressDialogState(false));
    setOpen(false);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const address = formJson.address;
    setAddAddress(address);

    // Make API call here after setting the address
    fetch('https://shopery.onrender.com/api/v1/user/address', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        houseNumber: '55',
        streetName: address,
        addressLine: '899652892',
        city: 'Lagos',
        state: 'Lagos',
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Success:', data);
        console.log(data.addressid);
        dispatch(newAddressId(data.addressid));
        handleClose(); // Close the dialog after successful submission
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
     console.log(addAddress)

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Address
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit
          // onSubmit: (event) => {
          //   // event.preventDefault();
          //   // const formData = new FormData(event.currentTarget);
          //   // const formJson = Object.fromEntries(formData.entries());
          //   // const address = formJson.address;
          //   // setAddAddress(address);
          //   // console.log(address);
          //   // handleClose();
          // },
        }}
      >
        <DialogTitle>Eko-bazaar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To continue to checkout, please enter your address here.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="address"
            label="Delivery Address"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}