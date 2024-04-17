'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SendPoints() {
  const [id, setId] = useState('');
  const [points, setPoints] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`/api/points/${id}`, {
        points
      });

      if (response.status === 200) {
        const data = response.data;

        console.log('Points updated:', data);

        setId('');
        setPoints(0);
        
        window.location.reload();
      } else {
        console.error('Failed to update points');
      }
    } catch (error) {
      console.error('Error  to update points:', error);
    }
  };


  return (
    <div className="flex items-center justify-start">
      <div className="mt-5 w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-semibold text-zinc-800">
              User Id
            </label>
            <input
              type="text"
              id="text"
              placeholder=''
              className="pl-2 py-2 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="points" className="block text-sm font-semibold text-zinc-800">
              Points
            </label>
            <input
              type="points"
              id="points"
              placeholder=''
              className="pl-2 py-2 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 font-bold bg-teal-400 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            OK
          </button>
        </form>
      </div>
    </div>
  );
}

