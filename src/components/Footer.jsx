import React, { useState } from "react";
import emailjs from "emailjs-com";
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

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_aqlb7ro",
        "template_ud3ycaq",
        templateParams,
        "SXEn56lk8YRwliC-0"
      )
      .then(
        (result) => {
          alert("Message envoyé avec succès !");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setError("Une erreur est survenue lors de l'envoi de l'email.");
        }
      );
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
