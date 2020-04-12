import React from 'react';
import '../App.css';
import sampleRx from '../sample-rx.png';

import { Preview, print } from 'react-html2pdf';

export default function FaxPage(props){
	const {receiver_fax_number, receiver_name, receiver_tel_number} = props.location.state.receiver;
	const {sender_fax_number, sender_name, sender_tel_number} = props.location.state.sender;

  return (
    <div>
    <Preview id={'fax'}  >
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
						<p><span >Name:</span> {receiver_name}</p>
						<p><span >Phone:</span> {receiver_tel_number}</p>
						<p><span >Fax Number:</span> {receiver_fax_number} </p>
					</blockquote>

					<hr />
					<h2 >From</h2>
					<blockquote>
						<p><span >Name:</span> {sender_name}</p>
						<p><span >Phone:</span> {sender_tel_number}</p>
						<p><span >Fax Number:</span> {sender_fax_number}</p>
					</blockquote>

					<hr />
				</div>
				<h2>Note</h2>
				<p className="note">
				This is the document note.
				</p>
				<hr/>
				<img className="image" src={sampleRx} alt="Rx"></img>
				<div className="confidential">
					<h2><strong>CONFIDENTIAL</strong></h2>
					<p className="statement">The documents accompanying this facsimile transmittal are intended only for the use of the individual or entity to which it is addressed. It may contain information that is privileged, confidential and exempt from disclosure under law. If the reader of this message is not the intended recipient, you are notified that any dissemination, distribution or copying of this communication is strictly prohibited. If you are not the intended recipient, you are hereby notified that law strictly prohibits any disclosure, copying, distribution or action taken in reliance on the contents of these documents. If you have received this fax in error, please notify the sender immediately to arrange for return of these documents.</p>
				</div>
      </div>
      </Preview>
      <button className="button" onClick={()=>print('download_pdf', 'fax')}> print</button>
    </div>
  )
}