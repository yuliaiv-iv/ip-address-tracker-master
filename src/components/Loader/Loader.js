import React from 'react';
import './Loader.css';

function Loader({ error }) {

  const errorMsg = 'Something went wrong, try again later...'

  return (
    <div className='loader'>
      {error ? 
        <h2 className='loader__text'>{errorMsg}</h2> : 
        <div className='loader__animation'></div>
      }
    </div>
  )
}

export default Loader;