import React, { useState } from 'react'



function LikeButton() {
    const [liked, setLiked] = useState<number>(0);
    return (
        <div>
            <p>❤️ Likes: {liked}</p>
            <button onClick={() => setLiked(liked + 1)}>Like</button>
        </div>
    )
}

export default LikeButton