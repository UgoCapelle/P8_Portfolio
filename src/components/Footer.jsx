import React, { useState } from "react";
import "../styles/Footer.css";

function Footer({ isDarkMode }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    if (message.trim() === "") {
      setError("Le champ de message ne peut pas être vide.");
      return;
    }

    setError("");
    alert("Formulaire envoyé !");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Contactez-moi</h2>
        {error && <p className="form-error">{error}</p>}
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-textarea"
        />
        <button type="submit" className="form-button">
          Envoyer
        </button>
      </form>
    </footer>
  );
}

export default Footer;
