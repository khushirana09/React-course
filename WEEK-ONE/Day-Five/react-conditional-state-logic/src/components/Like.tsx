import React, { useState } from 'react'

function Like() {
    const [liked, setLiked] = useState<number>(0);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleLike = () => {
        if (isLiked) {
            setLiked(liked - 1);  // if already liked remove like
            setIsLiked(false);
        } else {
            setLiked(liked + 1);
            setIsLiked(true);
        }
    };
    return (
        <div>
            <p>❤️ Likes: {liked}</p>

            <button onClick={handleLike}
                style={{
                    backgroundColor: isLiked ? "red" : "grey",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    cursor: "pointer",

                }}
            >
                {isLiked ? "Unlike" : "Like"}
            </button>



        </div>
    );
}

export default Like