import React, {useState} from 'react';
import '../App.css';
import {TextField, Button} from '@material-ui/core/';

import {useHistory} from "react-router-dom";

export default function FaxInput (){
  let history = useHistory();
  const[sender, setSender] = useState({
    sender_name: "",
    sender_fax_number: "",
    sender_tel_number: ""
  });

  const [receiver, setReceiver] = useState({
    receiver_name: "",
    receiver_fax_number: "",
    receiver_tel_number: ""
  });

  const sumbitNumbers= ()=>{
    history.push({pathname: "/create", state: {receiver: receiver, sender: sender}})
  }

  return (
    <div className="App">
    <h1>Create A Fax Cover Page For An Rx</h1>
    <p>Enter Fax Information</p>
    <form className="form" noValidate autoComplete="off">
      <div className="form-input">
        <div>
          <TextField 
              label="Fax Recipient Name" 
              value={receiver.receiver_name} onChange={ e => setReceiver({...receiver, receiver_name: e.target.value})}
            />
        </div>
        <div>
          <TextField 
            label="Fax Recipient Tel. #" 
            value={receiver.receiver_tel_number} onChange={ e => setReceiver({...receiver, receiver_tel_number: e.target.value})}
          />
        </div>
        <div>
          <TextField 
            label="Fax Recipient Fax #" 
            value={receiver.receiver_fax_number} onChange={ e => setReceiver({...receiver, receiver_fax_number: e.target.value})}
          />
        </div>
      </div>
      <div className="form-input">
        <div>
          <TextField  
            label="Fax Sender Name" 
            value={sender.sender_name} onChange={ e => setSender({...sender, sender_name: e.target.value})}
          />
        </div>
        <div>
          <TextField  
            label="Fax Sender Tel. #" 
            value={sender.sender_tel_number} onChange={ e => setSender({...sender, sender_tel_number: e.target.value})}
          />
        </div>
        <div>
          <TextField  
            label="Fax Sender Fax #" 
            value={sender.sender_fax_number} onChange={ e => setSender({...sender, sender_fax_number: e.target.value})}
          />
        </div>
      </div>  
      <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={sumbitNumbers}
      > 
        Submit </Button>
    </form>
    </div>
  )
}