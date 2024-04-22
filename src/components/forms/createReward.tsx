'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CreateRewardForm() {
  const [name, setName] = useState('');
  const [points, setPoints] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/rewards', {
        name,
        points,
      });

      if (response.status === 201) {
        const data = response.data;

        console.log('Reward created:', data);

        setName('');
        setPoints(0);
        
        window.location.reload();
      } else {
        console.error('Failed to create reward');
      }
    } catch (error) {
      console.error('Error creating reward:', error);
    }
  };


  return (
    <div className="flex items-center justify-start">
      <div className="mt-5 w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="rewardname" className="block text-sm font-semibold text-zinc-800">
              name
            </label>
            <input
              id="rewardname"
              placeholder='reward name'
              className="pl-2 py-2 border mt-1 block w-full border-white-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rewardpoints" className="block text-sm font-semibold text-zinc-800">
              points
            </label>
            <input
              id="rewardpoints"
              placeholder='0'
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
            Create Reward
          </button>
        </form>
      </div>
    </div>
  );
}

