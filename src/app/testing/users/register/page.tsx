'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  password: string;
}

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');

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
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        console.log('User created:', data);

        setEmail('');
        setPassword('');

        fetchUsers();
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {

      await axios.delete(`/api/users/${id}`)

    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-100">
      <div className="p-8 rounded shadow-md w-80 bg-teal-300">
        <h2 className="text-xl font-bold mb-4 text-white text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-teal-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-teal-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

