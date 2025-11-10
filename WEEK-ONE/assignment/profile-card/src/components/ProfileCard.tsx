import React, { useState } from 'react'

function ProfileCard({ name, role }: { name: string; role: string}) {
    const [isFollowed, setIsFollowed] = useState(false);
  return (
    <div style={{border: "1px solid gray" , padding: "10px", margin: "10px" }}>
    <h3>{name}</h3>
    <p>{role}</p>
    <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Following" : "Follow"}
    </button>
    </div>
);
}

export default ProfileCard