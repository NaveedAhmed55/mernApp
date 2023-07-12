import React, { useEffect } from 'react';

function Delete() {
  useEffect(() => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);

    fetch(`http://localhost:4000/delete/${id}`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        window.location.href='/'
      })
      .catch((error) => {
      });
  }, []);

  return (
    <div>
      <h1>Deleting</h1>
    </div>
  );
}

export default Delete;
