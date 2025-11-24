import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

const ErrorState: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch("https://fakestoreapi.com/products");

            if (!res.ok) {
                throw new Error("Server issue");
            }

            const data: Product[] = await res.json();
            setProducts(data);

        }
        catch (err) {
            setError("Failed to load products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <h2 style={{ textAlign: "center" }}> Loading products ...</h2>;
    }

    if (error) {
        return (
            <div style={{ textAlign: "center" }}>
                <h3>{error}</h3>
                <button onClick={fetchProducts}>Retry</button>
            </div>
        );
    }

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Galaxy store Products</h2>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                {products.map((p) => (
                    <li key={p.id} style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
                        <p><strong>{p.title}</strong></p>
                        <p>Price: ${p.price}</p>
                        <p>Category: ${p.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ErrorState;