import React, { useState } from 'react'

function Card() {
    const [name, setName] = useState<string>("");
    const [role, setRole] = useState<string>("");
    return (
        <div>
            <h1>Hi my name is {name || "Guest"} and my job is {role || "Learner"}</h1>

            <input type="text"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input type="text"
                placeholder='Enter your role'
                value={role}
                onChange={(e) => setRole(e.target.value)} />
        </div>

    )
}

export default Card