import React, {useState} from 'react';
import '../App.css';
import {TextField, Button} from '@material-ui/core/';

import {useHistory} from "react-router-dom";

export default function FaxInput (){
  let history = useHistory();
  const[sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  const sumbitNumbers= ()=>{
    history.push({pathname: "/create", state: {receiver: receiver, sender: sender}})
  }

  return (
    <div className="App">
    <p>Enter Fax Information</p>
    <form className="form" noValidate autoComplete="off">
      <TextField 
        id="standard-basic"
        label="Fax Recipient Fax #" 
        value={receiver} onChange={ e => setReceiver(e.target.value)}
      />
      <TextField 
        id="standard-basic" 
        label="Fax Sender Fax #" 
        value={sender} onChange={ e => setSender(e.target.value)}
      />
    </form>
    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={sumbitNumbers}
          > 
          Submit </Button>
    </div>
  )
}