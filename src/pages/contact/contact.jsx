import React, { useState } from 'react';
import './contact.css'; // Make sure to create this CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Assuming you want to send the data to the Google Apps Script
        const response = await fetch('https://script.google.com/macros/s/AKfycbx8PmyEwuHU00vlzkgJZ_OeINtwdB6QOT6hDWcjm2Fs0jO6h2sOeI06PfQXQdHp2YKu/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmitted(true); // Show thank you message
            setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
        } else {
            alert('There was an error submitting the form.');
        }
    };

    return (
        <div className="contact">
            {!submitted ? (
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className="title">Wana talk?,<br /><span>lets do it</span></div>
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        className="input"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Phone no"
                        name="phone"
                        className="input"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="do you have anything in mind?"
                        rows="5"
                        cols="22"
                        className="input"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button id="sub" className="button-confirm">Let’s talk →</button>
                </form>
            ) : (
                <div id="thanks" className="form">
                    <section style={{ fontSize: '2em', textAlign: 'center' }}>
                        thanks for reaching to me.<br />
                        will talk Asap!!
                    </section>
                </div>
            )}
        </div>
    );
};
export default Contact;
