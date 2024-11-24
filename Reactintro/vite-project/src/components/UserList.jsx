// Correct way to import React and hooks
import { useState, useEffect } from 'react';


const UserList = () => {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
       
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        // Convert response to JSON
        const data = await response.json();
        
        setUsers(data);
      } catch (error) {

        setError(error.message);
      } finally {
        
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchUsers();
  }, []); 

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 style={{ color: "#0909" }}>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
