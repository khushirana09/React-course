import React, { useEffect, useState } from 'react'

interface User {    // use product instead of user
  id: number;
  title: string;
  price: number;
  category: string;
  image?: string;
}

const GalaxyStore: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);    // use products and setproducts instead of users
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {     // here also used fetchProducts
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div style={{ textAlign: "center" }}> Loading Products....</div>
  if (error) return <div style={{ textAlign: "center", color: "red" }}>{error}</div>

  return (
    <>
      <div className="categories-block">
        <div>GalaxyStore</div>
        <h2>User List</h2>
        <ul className='product-list' style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center' }}>
          {users.map((user) => (
            <li key={user.id} style={{ flexBasis: '15%', listStyle: 'none', border: '1px solid white', padding: '10px' }}>
              <img src={user.image} alt={user.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <p><strong>Product Title:</strong> {user.title}</p>
              <p><strong>Price:</strong> {user.price}</p>
              <p><strong>Product Category:</strong> {user.category}</p>
            </li>
          ))}
        </ul>
      </div >
    </>
  );
}

export default GalaxyStore


