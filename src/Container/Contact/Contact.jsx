import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="FormBody">
      <form onSubmit={handleSubmit} className="Form">
        <h1>Contact Us</h1>

        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label htmlFor="message">
          Your message:
          <textarea
            name="message"
            type="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button type="button">Submit</button>
      </form>
    </div>
  );
}
