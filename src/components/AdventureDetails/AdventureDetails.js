import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AdventureDetails = () => {
  const { advId } = useParams();
  const [details, setDetails] = useState({});

  useEffect( () => {
    fetch(`http://localhost:5000/adventures/${advId}`)
    .then(res => res.json())
    .then(data => setDetails(data))
  }, [advId])



  return (
    <div>
      <h2>Details about the adventure id: {details.name}</h2>
      <Link to='/order'>ADD TO YOUR BUCKET</Link>
    </div>
  );
};

export default AdventureDetails;