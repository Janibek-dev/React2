import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contacts.css";
import { Link } from "react-router";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Установите свой UserID, ServiceID и TemplateID
    const serviceID = "service_vqqvnfo";
    const templateID = "template_zwb5taa";
    const userID = "ZRuc9-e_7oVeYqpyK";

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus("Message Sent Successfully!");
      })
      .catch((error) => {
        console.error("Submission Error:", error);
        setStatus("Message Submission Error.");
      });
  };

  return (
    <>
    <header>
            <div>Zhanibek Sultangali</div>
            <div className='links'>
              <Link to="/Work">WORK</Link>
            </div>
    </header>
    <div className="inputForm">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Messege:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
    </>
  );
};

export default Contacts;
