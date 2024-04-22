'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ComboboxClient } from '../adm/comboboxClient';

interface OS {
  id: string;
  name: string;
  description: string;
  clientId: number;
}

export default function Page() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');

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
        setClientId('');

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
            <label htmlFor="text" className="block text-sm font-semibold text-teal-800">
              Name
            </label>
            <input
              type="text"
              id="text"
              placeholder='A000'
              className="pl-5 py-2 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
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
              placeholder='CLIENT_DESCRIPTION'
              className="pl-5 py-2 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block mb-1 text-sm font-semibold text-teal-800">
              Client
            </label>
            {/* <input
              type="number"
              id="number"
              placeholder='CLIENT NAME'
              className="px-2 py-1 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              required
            /> */}
            <ComboboxClient />
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