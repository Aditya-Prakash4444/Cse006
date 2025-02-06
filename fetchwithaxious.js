mport React, { useEffect, useState } from 'react';
import axios from 'axios';

function fetchwithaxious() {
const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => setItems(response.data))
      .catch(err => console.log(err));
  }, [resourceType]);


  return (
    <div>
        
    </div>
  )
}

export default fetchwithaxious;