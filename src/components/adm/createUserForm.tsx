'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  password: string;
}

export default function CreateUserForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users', {
        email,
        password,
      });

      if (response.status === 201) {
        const data = response.data;

        console.log('User created:', data);

        setEmail('');
        setPassword('');
        
        window.location.reload();
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


  return (
    <div className="flex items-center justify-start">
      <div className="mt-5 w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-zinc-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='user.name@engetak.com'
              className="pl-2 py-2 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-zinc-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='1234567'
              className="pl-2 py-2 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 font-bold bg-teal-400 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

