import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';
//import { blue } from '@mui/material/colors';
import AddressPopup from './AddressPopup';
import { useDispatch , useSelector} from 'react-redux';

import { newAddressId } from '../features/addressId';
import { useState, useEffect } from 'react';
import '../Styles/checkout.css';
//const addresses = ['1st address', '2nd address', '3rd address'];


function SimpleDialog(props) {
  


  const { onClose, selectedValue, open, addresses } = props;

  const handleClose = () => {
    onClose(selectedValue);
    
  };

  const handleListItemClick = (value) => {
    onClose(value.streetName);
    dispatch(newAddressId(value.id))
    
  };

  const dispatch = useDispatch();

  // const handleaddClick = (value) => {
  //   dispatch(newAddressDialogState(true));
  //   onClose(value);
  // };


  
   


  
   
  

  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle>Select Delievery Address</DialogTitle>
      <List sx={{ pt: 0 }}>
        {Object.entries(addresses).map(([key, value]) => (
          <ListItem disableGutters key={key}>
            <ListItemButton onClick={() => handleListItemClick(value)}>
              {/* <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar> */}
              <ListItemText primary={ value.houseNumber + ' ' + value.streetName + ' ' + value.city + ' ' + value.state} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          {/* <ListItemButton
            autoFocus
            
            onClick={() => handleaddClick()}
          >
            
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton > */}
        </ListItem>
      </List>
      <AddressPopup  />
    </Dialog>
    
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [addresses, setAddresses] = useState([]);
  //const [lastAddress, setLastAddress] = useState('');
 
  const [selectedValue, setSelectedValue] = React.useState();
  //console.log(lastAddress); // Outputs: '3rd address'
  const addressId = useSelector((state)=>state.addressid.value);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  useEffect(()=>{
    fetch('https://shopery.onrender.com/api/v1/user/my-address',{
      method: 'GET',
      credentials: 'include',
      })
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => {
     setAddresses(data.address);
     const lastAddress = data.address[data.address.length - 1]?.streetName || '';
      setSelectedValue(lastAddress);
    
    
  })
  .catch((error) => {
    console.error('API Error:', error);
  });

   },[addressId])

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        <div className='zip-cd'>
        <input type='text' readOnly placeholder={selectedValue} />
        </div>
        
        {/* Selected: {selectedValue} */}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Select address
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        addresses={addresses}
      />
    </div>
  );
}
