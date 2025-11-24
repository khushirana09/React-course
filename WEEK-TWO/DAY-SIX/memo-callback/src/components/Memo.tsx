import React, { useMemo, useCallback, useState } from "react";

type ItemType = {
    id: number;
    value: number;
};

// Child Component (memoized)
const ItemRow = React.memo(
    ({ id, value, onSelect }: { id: number; value: number; onSelect: (id: number) => void }) => {
        console.log("Child Render:", id);

        return (
            <div style={{ margin: "6px 0" }}>
                #{id} → {value}
                <button style={{ marginLeft: "10px" }} onClick={() => onSelect(id)}>
                    Select
                </button>
            </div>
        );
    }
);

const ProductList: React.FC = () => {
    // Generate 1000 items
    const items: ItemType[] = Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        value: i + 1,
    }));

    const [filterType, setFilterType] =
        useState<"all" | "even" | "odd">("all");
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [count, setCount] = useState(0); // for forcing re-renders

    // useMemo: filtering heavy list
    const filteredItems = useMemo(() => {
        console.log("Filtering runs...");

        if (filterType === "all") return items;
        if (filterType === "even")
            return items.filter((i) => i.value % 2 === 0);
        return items.filter((i) => i.value % 2 !== 0);
    }, [filterType]);

    // useCallback: stable function
    const handleSelect = useCallback((id: number) => {
        setSelectedId(id);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Product List</h2>

            <div style={{ marginBottom: "10px" }}>
                <button onClick={() => setFilterType("all")}>All</button>
                <button onClick={() => setFilterType("even")} style={{ marginLeft: 10 }}>Even</button>
                <button onClick={() => setFilterType("odd")} style={{ marginLeft: 10 }}>Odd</button>
            </div>

            <div>
                <button onClick={() => setCount((c) => c + 1)}>Re-render Parent: {count}</button>
            </div>

            <div style={{ marginTop: "10px" }}>
                <strong>Selected ID:</strong> {selectedId ?? "None"}
            </div>

            <hr />

            {filteredItems.map((item) => (
                <ItemRow
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    onSelect={handleSelect}
                />
            ))}
        </div>
    );
};

export default ProductList;
