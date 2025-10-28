import { useState } from 'react'
import './App.css'
import TeamMember from './components/TeamMember'

function App() {


  return (
    <>
      <TeamMember name="Alice" role="Developer" image="https://via.placeholder.com/150" />
      <TeamMember name="Bob" role="Designer" image="https://via.placeholder.com/150" />
      <TeamMember name="Charlie" role="Product Manager" image="https://via.placeholder.com/150" />
    </>
  )
}

export default App
