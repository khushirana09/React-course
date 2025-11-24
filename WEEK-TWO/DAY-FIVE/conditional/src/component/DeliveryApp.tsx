import React, { useEffect, useState } from 'react'


// here fake api calls
const fakeFetchMenu = (): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["coffee", "burger", "donuts"]);
        }, 2000);
    });
};

const DeliveryApp: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        const getMenu = async () => {
            const data = await fakeFetchMenu();
            setItems(data);
            setLoading(false);
        };
        getMenu();
    }, []);

    // if loading true

    if (loading) return <p>Fetching menu...</p>;
    if (!items.length) return <p>No menu items available</p>;


    // if loading is false
    return (

        <ul> {items.map((item) => (
            <li key={item}>item</li>
        ))}
        </ul>

    );
};

export default DeliveryApp;