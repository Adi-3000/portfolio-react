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
    const email = "meadityaraj39@gmail.com";
    const subject = "Hey, lets talk";
    const body = "";

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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
                <div >

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
                    <div className="share">
                        <a href="https://github.com/Adi-3000" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                fill="currentColor"
                                className="bi bi-github"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                            <span className="tooltip">https://github.com/Adi-3000</span>

                        </a>
                        <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
                            <svg
                                width="36px"
                                height="36px"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="bi bi-github"
                            >
                                <g id="style=bulk">
                                    <g id="email">
                                        <path
                                            id="vector (Stroke)"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z"

                                        />
                                        <path
                                            id="vector (Stroke)_2"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z"
                                            fill="#000000"
                                        />
                                    </g>
                                </g>
                            </svg>
                            <span className="tooltip">{email}</span>
                        </a>
                        <a >
                            <svg width="36px"
                                height="36px"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="bi bi-github"  >
                                <g id="style=bulk">
                                    <g id="call">
                                        <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M2.98958 2.39989C3.74153 1.66198 4.62059 1.25 5.59 1.25C5.97318 1.25 6.36311 1.33138 6.71941 1.5014C7.08755 1.67229 7.42309 1.93393 7.68396 2.30922L10.0003 5.574C10.2053 5.85906 10.3657 6.13796 10.4818 6.42035C10.5997 6.6971 10.68 7.00644 10.68 7.32C10.68 7.70687 10.5673 8.07663 10.367 8.40939C10.1968 8.70784 9.96427 8.99567 9.69563 9.26502L9.00688 9.98096C9.01385 9.99743 9.02321 10.0197 9.03333 10.0455C9.183 10.3079 9.44802 10.6772 9.84989 11.1524C10.29 11.6609 10.7568 12.1761 11.2604 12.6897C11.7923 13.2116 12.2961 13.6858 12.8048 14.1178C13.2858 14.5247 13.6606 14.7841 13.933 14.9322C13.955 14.9417 13.9753 14.9509 13.9918 14.9584L14.6815 14.2778C14.955 14.0046 15.2482 13.7638 15.5612 13.5966C15.8882 13.4019 16.2447 13.29 16.64 13.29C16.9399 13.29 17.2362 13.354 17.534 13.4758C17.8169 13.5916 18.0939 13.7509 18.3717 13.9398L18.378 13.9441L21.6909 16.2961C22.0455 16.5425 22.3234 16.8545 22.4965 17.2479L22.5016 17.2596L22.5064 17.2715C22.6338 17.59 22.72 17.9351 22.72 18.33C22.72 18.8025 22.6147 19.2817 22.3982 19.7403C22.2879 19.9738 22.1587 20.2021 22.0066 20.424C21.9538 20.5011 21.8983 20.5773 21.84 20.6525C21.7634 20.7514 21.682 20.8484 21.5957 20.9436C21.3815 21.1797 21.1554 21.3943 20.9162 21.5856C20.537 21.8891 20.1283 22.1318 19.6865 22.3131C18.9922 22.6021 18.2445 22.75 17.45 22.75C16.3114 22.75 15.1213 22.4821 13.896 21.96C12.6885 21.4455 11.4895 20.7561 10.3086 19.8963L10.3076 19.8956C9.12671 19.0331 8.00824 18.0786 6.94224 17.0229L6.93709 17.0178C5.88147 15.9519 4.92677 14.8332 4.07368 13.6614L4.07114 13.658C3.22474 12.4813 2.5351 11.293 2.0297 10.1032L2.02877 10.101C1.51719 8.88605 1.25 7.69701 1.25 6.54C1.25 5.77184 1.3856 5.02732 1.66286 4.33342C1.94487 3.61753 2.38783 2.96904 2.98958 2.39989Z"  />
                                        <path id="vector" d="M4.68 13.22C5.51 14.36 6.44 15.45 7.47 16.49L10.76 13.22C10.24 12.69 9.73 12.16 9.28 11.64C8.84 11.12 8.53 10.69 8.35 10.36C8.33 10.3 8.3 10.24 8.27 10.16C8.25 10.08 8.24 10.01 8.24 9.93C8.24 9.77 8.29 9.64 8.4 9.53L9.16 8.74C9.4 8.5 9.59 8.26 9.72 8.03C9.86 7.8 9.93 7.56 9.93 7.32C9.93 7.13 9.88 6.92 9.79 6.71C9.7 6.49 9.57 6.26 9.39 6.01L7.07 2.74C6.89 2.48 6.66 2.3 6.4 2.18C6.15 2.06 5.87 2 5.59 2C4.85 2 4.15 2.31 3.51 2.94C2.98 3.44 2.6 4 2.36 4.61C2.12 5.21 2 5.86 2 6.54C2 7.58 2.24 8.67 2.72 9.81C3.2 10.94 3.86 12.08 4.68 13.22Z"  />
                                        <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M2.98958 2.39989C3.74153 1.66198 4.62059 1.25 5.59 1.25C5.97318 1.25 6.36311 1.33138 6.71942 1.5014C7.08756 1.6723 7.4231 1.93394 7.68397 2.30924L10.0002 5.57397C10.2053 5.85902 10.3657 6.13792 10.4818 6.4203C10.5997 6.69706 10.68 7.00642 10.68 7.32C10.68 7.70686 10.5673 8.07662 10.3671 8.40937C10.1968 8.70783 9.96427 8.99567 9.69563 9.26502L9.00688 9.98096C9.01385 9.99743 9.02321 10.0197 9.03333 10.0455C9.18299 10.3079 9.448 10.6772 9.84985 11.1524C10.2828 11.6524 10.7778 12.1673 11.2954 12.6947L11.8172 13.2266L7.46582 17.5516L6.93711 17.0178C5.8815 15.9519 4.92677 14.8332 4.07368 13.6614L4.07114 13.658C3.22474 12.4813 2.5351 11.293 2.0297 10.1032L2.02877 10.101C1.51719 8.88605 1.25 7.69701 1.25 6.54C1.25 5.77184 1.3856 5.02732 1.66286 4.33342C1.94486 3.61753 2.38783 2.96904 2.98958 2.39989Z"  />
                                    </g>
                                </g>
                            </svg>
                            <span className="tooltip">9006740549</span>

                        </a>
                    </div>

                </div>

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
