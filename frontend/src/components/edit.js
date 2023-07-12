import React, { useEffect, useState } from 'react'

function Edit() {
    const [data,setData]=useState();
    const handleSubmit=()=>{
    const url=window.location.href;
    const id=url.substring(url.lastIndexOf('/')+1)

    fetch(`http://localhost:4000/edit/${id}`,{method:'POST',body:JSON.stringify(data),headers: {
        'Content-Type': 'application/json'
      }}).then((response) => response.json())
    .then((data) => {
     if(data.success)
       window.location.href='/'
    })
    .catch((error) => {
      console.error(error);
    });}
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="flex flex-col items-center mt-8">
    <label htmlFor="title" className="mb-2">
      Title:
      <input
        name="title"
        className="border border-gray-300 rounded px-2 py-1 ml-2 focus:outline-none"
        onChange={handleInput}
      />
    </label>
    <label htmlFor="description" className="mb-2">
      Description:
      <input
        name="description"
        className="border border-gray-300 rounded px-2 py-1 ml-2 focus:outline-none"
        onChange={handleInput}
      />
    </label>
    <label htmlFor="age" className="mb-2">
      Age:
      <input
        name="age"
        className="border border-gray-300 rounded px-2 py-1 ml-2 focus:outline-none"
        onChange={handleInput}
      />
    </label>
    <button
      type="submit"
      onClick={handleSubmit}
      className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mt-4 focus:outline-none"
    >
      Submit
    </button>
  </div>
  
  )
}

export default Edit;
