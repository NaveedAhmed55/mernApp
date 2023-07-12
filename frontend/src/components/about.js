import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-white mb-4">About</h1>
      <p className="text-lg text-white mb-4">Welcome to our registry application!</p>
      <p className="text-lg text-white mb-4">This application allows you to perform basic CRUD operations on student records.</p>
      <p className="text-lg text-white mb-4">Here's a brief overview of the features:</p>
      <ul className="list-disc list-inside text-white mb-4">
        <li className="text-lg">Create: Add new student records to the system.</li>
        <li className="text-lg">Read: View and search existing student records.</li>
        <li className="text-lg">Update: Edit and update information for specific students.</li>
        <li className="text-lg">Delete: Remove student records from the system.</li>
      </ul>
      <p className="text-lg text-white mb-4">Our goal is to provide a user-friendly interface for managing student data efficiently.</p>      
      <p className="text-lg text-white mb-4">Stay tuned as we continue to enhance and improve the application to meet your needs.</p>
      <p className="text-lg text-white">Thank you for using our CRUD application!</p>
    </div>
  );
}

export default About;
