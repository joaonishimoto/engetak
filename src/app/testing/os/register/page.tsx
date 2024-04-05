'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface OS {
  id: string;
  name: string;
  description: string;
  clientId: number;
}

export default function Page() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState(0);
  const [users, setUsers] = useState<OS[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/os');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/os', {
        name,
        description,
        clientId, 
      });

      if (response.status === 201) {
        const data = response.data;

        console.log('User created:', data);

        setName('');
        setDescription('');
        setClientId(0);

        fetchUsers();
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-100">
      <div className="p-8 rounded shadow-md w-80 bg-teal-300">
        <h2 className="text-xl font-bold mb-4 text-white text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-semibold text-teal-800">
              Name
            </label>
            <input
              type="text"
              id="text"
              className="mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-semibold text-teal-800">
              Description
            </label>
            <input
              type="text"
              id="text"
              className="mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-semibold text-teal-800">
              Client
            </label>
            <input
              type="number"
              id="number"
              className="mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-sm"
              value={clientId}
              onChange={(e) => setClientId(parseInt(e.target.value, 10))}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">OS</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}