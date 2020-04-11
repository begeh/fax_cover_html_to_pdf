import React from 'react';
import './App.css';

import { Preview, print } from 'react-html2pdf';

function App() {

  return (
    <div >
    <Preview id={'fax'} >
      <div className="fax-header">
        <h1>FAX</h1>
        <div>
			<blockquote>
				<p><span >Date:</span> </p>
				<p><span >Pages including cover sheet:</span></p>
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
			<h2>Note</h2>
      <hr/>
      <p>
      Bashir
      </p>

		</div>
      </div>
      </Preview>
      <button onClick={()=>print('download_pdf', 'fax')}> print</button>
    </div>
    
    
  );
}

export default App;
