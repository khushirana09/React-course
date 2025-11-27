import React, { useState } from 'react'

const ValidationForm: React.FC = () => {
    //states (age set up string so that it allow empty)
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [ageInput, setAgeInput] = useState<string>("");

    //derived should submit be disabled?
    const isDisabled = !name.trim() || !email.trim() || !ageInput.trim();

    //submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const age = Number(ageInput);
        if (isNaN(age) || age <= 0) {
            alert("Please enter a valid age (positive number).");
            return;
        }

        //all test pases - show alert with typed values(age as number)
        alert(`Name: ${name}\nEmail: ${email}\nAge: ${age}`);
    };

    return (
        <div>
            <div>User detail form</div>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type="number" value={ageInput} onChange={(e) => setAgeInput(e.target.value)} placeholder='Age' />

                <button type='submit' disabled={isDisabled} style={{ padding: "8px 12px", borderRadius: 6, cursor: isDisabled ? "not-allowed" : "pointer" }}>Submit</button></form>
            <div style={{ marginTop: 12 }}>
                <p><strong>Name:</strong>{name || "-"}</p>
                <p><strong>Email:</strong>{email || "-"}</p>
                <p><strong>Age:</strong>{ageInput || "-"}</p>

            </div></div>
    );
};

export default ValidationForm