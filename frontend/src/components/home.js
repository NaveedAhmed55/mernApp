import { useEffect, useState } from 'react';


function Home() {
  const [data, setData] = useState([]);
  const [id,setId]=useState('');
  useEffect(() => {
    fetch('http://localhost:4000/', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
 <div className="w-1/4 flex flex-row">
  {data.length > 0 ? (
    data.map((item) => (
      <div key={item.id} className="bg-white rounded shadow p-4 m-4">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="mb-2">Description: {item.description}</p>
        <p className="mb-2">Age: {item.age}</p>
        <div className="flex justify-between">
          <button
            className="bg-red-500 ml-32 hover:bg-red-600 text-white rounded px-4 py-2 focus:outline-none"
            onClick={() => {
              window.location.href = `http://localhost:3000/delete/${item._id}`;
            }}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 focus:outline-none"
            onClick={() => {
              window.location.href = `http://localhost:3000/edit/${item._id}`;
            }}
          >
            Edit
          </button>
        </div>
      </div>
    ))
  ) : (
    <h1 className="text-2xl">Data loading or no found</h1>
  )}
</div>

  );
}

export default Home;
