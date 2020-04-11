import React from 'react';
import './App.css';
import sampleRx from './sample-rx.png';

import { Preview, print } from 'react-html2pdf';

function App() {

  return (
    <div className= "App">
    <Preview id={'fax'} >
      <div className="fax-header">
        <h1>FAX</h1>
				<div>
					<blockquote>
						<p><span >Date:</span> { (new Date()).toDateString()}</p>
						<p><span >Pages including cover sheet:</span> 1</p>
					</blockquote>
					<hr />
					<h2 >To</h2>
					<blockquote>
						<p><span >Name:</span> </p>
						<p><span >Phone:</span> </p>
						<p><span >Fax Number:</span> </p>
					</blockquote>

					<hr />
					<h2 >From</h2>
					<blockquote>
						<p><span >Name:</span> </p>
						<p><span >Phone:</span> </p>
						<p><span >Fax Number:</span> </p>
					</blockquote>

					<hr />
				</div>
				<h2>Note</h2>
				<br></br>
				<p>
				This is the document note.
				</p>
				<hr/>
				<img className="image" src={sampleRx}></img>
				<div className="confidential">
					<h2><strong>CONFIDENTIAL</strong></h2>
					<p></p>
				</div>
      </div>
      </Preview>
      <button className="button" onClick={()=>print('download_pdf', 'fax')}> print</button>
    </div>
    
    
  );
}

export default App;
