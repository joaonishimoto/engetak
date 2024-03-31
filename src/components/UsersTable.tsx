'use client'
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { User } from '@prisma/client';


function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response: AxiosResponse<User[]> = await axios.get('/api/users');
        setUsers(response.data);
        console.log('Usuários:', response.data);
      } catch (error) {
        console.error('Erro ao obter usuários:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center">
      <table className="border-collapse border border-gray-800 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Email</th>
            <th className="border border-gray-800 px-4 py-2">Password</th>
            <th className="border border-gray-800 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-800 px-4 py-2">{user.id}</td>
              <td className="border border-gray-800 px-4 py-2">{user.email}</td>
              <td className="border border-gray-800 px-4 py-2">{user.password}</td>
              <td className="border border-gray-800 px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
