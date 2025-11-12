import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`Count changed: ${count}`);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter