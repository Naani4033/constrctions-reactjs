import { useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [project, setProject] = useState({ name: '', description: '', image: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/projects', project);
    alert('Project Added!');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl text-center">Admin - Add Project</h2>
      <form className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Project Name"
          onChange={e => setProject({ ...project, name: e.target.value })} required />
        <textarea className="w-full p-2 border rounded mb-4" placeholder="Description"
          onChange={e => setProject({ ...project, description: e.target.value })} required></textarea>
        <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Image URL"
          onChange={e => setProject({ ...project, image: e.target.value })} required />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md w-full" type="submit">Add Project</button>
      </form>
    </div>
  );
}
