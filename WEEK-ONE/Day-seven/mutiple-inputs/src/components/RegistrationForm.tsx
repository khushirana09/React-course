import React, { useState } from 'react'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    //function to handle input changes

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    //function to handle submit
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();    //prevent page reloads
        console.log(FormData);
        setSubmitted(true);
    }
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>DreamHire Application Form</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        name='name'
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange} />
                    <br></br>

                    <input type="text" name="email"
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleChange} />

                    <br></br>
                    <input type="text"
                        name='role'
                        placeholder='Enter your desired role'
                        value={formData.role}
                        onChange={handleChange} />

                    <br></br>

                    <textarea
                        name='message'
                        placeholder='Write your message'
                        value={formData.message}
                        onChange={handleChange}></textarea>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
            ) : (
                <h3>Thank You , {formData.name}! Your application for {formData.role} has been submitted</h3>
            )}
        </div>
    );
}

export default RegistrationForm