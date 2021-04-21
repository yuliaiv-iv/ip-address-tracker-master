import React from 'react';
import { states } from '../../utils/config';
import './IpInfo.css';

function IpInfo({ ipInfo, error }) {

  const { ip, location, isp } = ipInfo;
  const { city, region, timezone, postalCode } = location;

  function convertState(fullState) {
    if (location.country === 'US') {
      return states[fullState]
    } else {
      return location.region
    }
  }

  return (
    <section className='info'>
      {error ? null :
        <div className='info__content'>
          <div className='info__card'>
            <h2 className='info__title'>ip address</h2>
            <h2 className='info__discription'>{ip}</h2>
          </div>
          <div className='info__card'>
            <h2 className='info__title'>location</h2>
            <h2 className='info__discription'>{city}, {convertState(region)} {postalCode}</h2>
          </div>
          <div className='info__card'>
            <h2 className='info__title'>timezone</h2>
            <h2 className='info__discription'>UTC {timezone}</h2>
          </div>
          <div className='info__card'>
            <h2 className='info__title'>isp</h2>
            <h2 className='info__discription'>{isp}</h2>
          </div>
        </div>
      }
    </section>
  )
}

export default IpInfo;