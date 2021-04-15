import React from 'react';
import './IpInfo.css';

function IpInfo({ ipInfo, error }) {

  const { ip, location, isp } = ipInfo;
  const { city, region, timezone, postalCode, country } = location;

  const states = {
    'Arizona': 'AZ',
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
  }

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