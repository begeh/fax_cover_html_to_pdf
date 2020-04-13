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

  const [imageURL, setImageURL] = useState("");

  const [note, setNote] = useState("");

  const [pages, setPages] = useState("");

  const sumbitNumbers= ()=>{
    history.push({pathname: "/create", state: {receiver: receiver, sender: sender, note: note, imageURL: imageURL, pages: pages}})
  }

  return (
    <div className="App">
    <h1>Create A Fax Cover Page</h1>
    <p>Enter Fax Information</p>
    <form className="form" noValidate autoComplete="off">
      <div className="contact">
        <div className="form-input">
          <div>
            <TextField 
              InputLabelProps={{style: {fontSize: "0.8rem"}}} 
              label="Fax Recipient Name"
              inputProps={{
                maxLength: 80
              }}  
              value={receiver.receiver_name} onChange={ e => setReceiver({...receiver, receiver_name: e.target.value})}
              />
          </div>
          <div>
            <TextField 
              InputLabelProps={{style: {fontSize: "0.8rem"}}} 
              label="Fax Recipient Tel. #"
              inputProps={{
                maxLength: 80
              }}  
              value={receiver.receiver_tel_number} onChange={ e => setReceiver({...receiver, receiver_tel_number: e.target.value})}
            />
          </div>
          <div>
            <TextField 
              InputLabelProps={{style: {fontSize: "0.8rem"}}} 
              label="Fax Recipient Fax #"
              inputProps={{
                maxLength: 80
              }}  
              value={receiver.receiver_fax_number} onChange={ e => setReceiver({...receiver, receiver_fax_number: e.target.value})}
            />
          </div>
        </div>
        <div className="form-input">
          <div>
            <TextField  
              InputLabelProps={{style: {fontSize: "0.8rem"}}} 
              label="Fax Sender Name"
              inputProps={{
                maxLength: 80
              }}  
              value={sender.sender_name} onChange={ e => setSender({...sender, sender_name: e.target.value})}
            />
          </div>
          <div>
            <TextField  
              InputLabelProps={{style: {fontSize: "0.8rem"}}} 
              label="Fax Sender Tel. #"
              inputProps={{
                maxLength: 80
              }}  
              value={sender.sender_tel_number} onChange={ e => setSender({...sender, sender_tel_number: e.target.value})}
            />
          </div>
          <div>
            <TextField
              InputLabelProps={{style: {fontSize: "0.8rem"}}}   
              label="Fax Sender Fax #"
              inputProps={{
                maxLength: 80
              }} 
              value={sender.sender_fax_number} onChange={ e => setSender({...sender, sender_fax_number: e.target.value})}
            />
          </div>
        </div>
      </div>
      <div className="other-field" >
          <TextField
            variant="outlined"
            multiline={true}
            fullWidth={true} 
            label="No. of Pages to Be Faxed (including cover)"
            inputProps={{
              maxLength: 3
            }} 
            InputLabelProps={{style: {fontSize: "0.8rem"}}} 
            value={pages} onChange={ e => setPages(e.target.value)}
          />
      </div>  

      <div className="other-field" hidden>
          <TextField
            variant="outlined"
            multiline={true}
            fullWidth={true} 
            label="Enter Image URL" 
            value={imageURL} onChange={ e => setImageURL(e.target.value)}
          />
        </div> 

      <div id="field" className="other-field">
          <TextField
            variant="outlined"
            inputProps={{
              maxLength: 110
            }}
            InputLabelProps={{style: {fontSize: "0.8rem"}}} 
            multiline={true}
            fullWidth={true}  
            label="Enter Note (max. 110 chars)" 
            value={note} onChange={ e => setNote(e.target.value)}
          />
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