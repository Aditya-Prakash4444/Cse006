import React, { useEffect, useState } from 'react';
import axios from 'axios';

function fetchwithparams() {
 const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType} ?_limit=5`)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.log(err));
  }, [resourceType]);

  return (
    <div>

    </div>
  )
}

export default fetchwithparams;