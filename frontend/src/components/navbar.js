import React from 'react'

function Navbar() {
  return (
    <div className="py-4">
    <ul className="flex justify-center space-x-4">
      <li>
        <a href="/" className="text-blue-500 hover:text-blue-600 font-medium">Home</a>
      </li>
      <li>
        <a href="/Newadd" className="text-blue-500 hover:text-blue-600 font-medium">Add</a>
      </li>
      <li>
        <a href="/about" className="text-blue-500 hover:text-blue-600 font-medium">About</a>
      </li>
    </ul>
  </div>
  
  )
}

export default Navbar
