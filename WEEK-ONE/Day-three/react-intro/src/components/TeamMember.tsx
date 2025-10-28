import React from 'react'

function TeamMember({ name, role, image }: { name: string, role: string, image: string }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default TeamMember