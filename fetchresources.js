import React, { useEffect, useState } from 'react';

function FetchResources() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.log(err));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType('posts')}>Get Posts</button>
      <button onClick={() => setResourceType('users')}>Get Users</button>
      <h1>{resourceType}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchResources;