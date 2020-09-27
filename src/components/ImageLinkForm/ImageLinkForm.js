import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='fs'>
			 {'This Magic Brain will detect faces in your pictures. Give it a try, Get a face picture in google and take the url of the picture and paste it in here to see if we can detect the face of the picture. And wait for a few seconds'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
				<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
				<button 
					className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					onClick={onButtonSubmit}>Detect</button>
			 	</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;