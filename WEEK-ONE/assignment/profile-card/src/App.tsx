import { useState } from 'react'

import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const users = [
    { id: 1, name: "khushi rana", role: "frontend developer" },
    { id: 2, name: "ebu", role: "backend developer" }
  ];

  return (
    <div>
      {users.map((user) => (
        <ProfileCard key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default App
