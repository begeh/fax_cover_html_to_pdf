import React, {Fragment} from 'react';
import './App.css';
import {TextField, Button} from '@material-ui/core/';

function App() {


  return (

		<div className="App">
			<p>Enter Fax Information</p>
			<form className="form" noValidate autoComplete="off">
				<TextField id="standard-basic" label="Fax Recipient Fax #" />
				<TextField id="standard-basic" label="Fax Sender Fax #" />
			</form>
			<Button
              type="submit"
              fullWidth
              variant="contained"
							color="primary"
							
            > 
						Submit </Button>
		</div>
	
  );
}

export default App;
