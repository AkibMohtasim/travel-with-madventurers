import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import './AdventureDetails.css';
import { Link, useParams } from 'react-router-dom';

const AdventureDetails = () => {
  const { advId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/adventures/${advId}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [advId])

  const { name, locations, img1, img2, img3, img4, description1, description2, description3, description4, thingsToDo } = details;

  let showDiv;

  if (!name) {
    showDiv = <LinearProgress />
  }
  else {
    showDiv = <div className='adventure-details'>
      <h2>{name}</h2>
      <h4>Locations: {locations}</h4>
      <img src={img1} alt="" />
      <p>{description1}</p>
      <img src={img2} alt="" />
      <p>{description2}</p>
      <img src={img3} alt="" />
      <p>{description3}</p>
      <img src={img4} alt="" />
      <p>{description4}</p>
      <ul>
        <h3>Things to do in Nairobi</h3>
        {
          thingsToDo?.map(thing => <li key={thing}>{thing}</li>)
        }

      </ul>
      <Link style={{ margin: '40px 0' }} className='link-btn' to='/order'>ADD TO YOUR BUCKET</Link>
    </div>
  }


  return (
    <div>
      {showDiv}
    </div>
  );
};

export default AdventureDetails;