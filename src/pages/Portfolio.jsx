import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import "../styles/Portfolio.css";
import htmlLogo from "../assets/HTMLLOGO.png";
import cssLogo from "../assets/CSSLOGO.png";
import reactLogo from "../assets/REACTLOGO.png";

function Portfolio({ isDarkMode, toggleDarkMode }) {
  return (
    <motion.div
      className={`portfolio ${isDarkMode ? "dark-mode" : "light-mode"}`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="content">
        <section className="intro-section">
          <h2>Bienvenue sur mon portfolio !</h2>
          <p>Jeune développeur web en fin de formation OpenClassrooms, j'ai décidé de me lancer dans l'auto-entreprenariat par motivation de la passion pour la création.</p>
        </section>
        <section className="project-section bg-color-1">
          <h2>Projet 1 : Créer une application web de location immobilière avec React</h2>
          <p>
            Ce projet consistait à développer une application Web moderne pour
            un site de location immobilière en utilisant React. L'application
            permet aux utilisateurs de parcourir des annonces immobilières,
            d'afficher les détails des propriétés et d'explorer une galerie
            d'images pour chaque annonce. C'étaient mes premiers pas avec React
            et ça m'a conforté dans mon choix de m'orienter vers le front-end
            plus que le back-end pour l'aspect plus créatif du monde du devweb.
          </p>
          <p>
            Problématique rencontrée :
            La gestion du routage et de l'état dans une application React a été un défi au début, mais j'ai surmonté cela en utilisant React Router pour organiser la navigation et en apprenant à gérer efficacement l'état avec useState et useEffect.
          </p>
          <p>
            Tout au long de ce projet, j'ai donc appris React, l'utilisation de
            bibliothèques telles que React Router pour mettre en place le
            routing. J'ai aussi utilisé des props et géré le state, notamment
            pour l'animation des collapse.
          </p>
          <p>
            Pour faire simple, je suis vite devenu passionné de React et j'ai
            hâte de prendre de l'expérience pour apporter des touches uniques
            dans chaque travaux en utilisant React à son plein potentiel.
          </p>
          <h3>Compétences développées :</h3>
          <ul>
            <li>Maîtrise de React pour le développement front-end.</li>
            <li>Mise en œuvre du routage avec React Router.</li>
            <li>
              Gestion de l'état et des props pour des composants réutilisables.
            </li>
            <li>
              Application des principes d'UX/UI pour une expérience utilisateur
              fluide.
            </li>
          </ul>
          <button 
            className="project-link-button"
            onClick={() => window.open('https://ugocapelle.github.io/P5_React_OC/', '_blank', 'noopener,noreferrer')}
          >
            Lien vers le Github Page
          </button>
        </section>
        <section className="project-section bg-color-2">
          <h2>Projet 2 : Débugger et optimiser un site de photographe</h2>
          <p>
            Dans ce projet, mon objectif principal était de débuguer et d'optimiser un site de photographe pour améliorer à la fois ses performances, son expérience utilisateur ainsi que de corriger le CEO. Le site présentait plusieurs problèmes de performance, notamment un temps de chargement élevé dû à la mauvaise gestion des images et des fichiers lourds. J'ai utilisé des outils d'Audit comme LightHouse pour identifier les problèmes et effectuer des corrections comme la compression des images et le lazy loading.
          </p>
          <p>
            L'un des plus grands défis a été de réduire le temps de chargement du site, en particulier en ce qui concerne la gestion des images. Après avoir identifié que les images étaient mal optimisées, j'ai mis en œuvre des solutions comme la compression d'images et l'ajout du lazy loading pour que les images ne se chargent que lorsqu'elles sont visibles à l'écran.
          </p>
          <p>
            J'ai également travaillé sur le référencement naturel (SEO) du site pour le rendre plus visible sur les moteurs de recherche et ainsi attirer plus de trafic. Cela a impliqué des ajustements techniques comme l'optimisation des balises meta, la correction des liens brisés et la réécriture de certaines URL.
          </p>
          <h3>Compétences développées :</h3>
          <ul>
            <li>Optimisation des performances d'un site web, notamment par la compression d'images et l'implémentation du lazy loading.</li>
            <li>Utilisation d'outils d'audit comme LightHouse pour identifier les problèmes de performance et de SEO.</li>
            <li>Amélioration du référencement naturel (SEO) en optimisant les balises meta et la structure des URL.</li>
            <li>Correction des problèmes d'accessibilité pour garantir une meilleure expérience utilisateur.</li>
            <li>Gestion des fichiers lourds et mise en œuvre de bonnes pratiques pour une gestion efficace des ressources.</li>
          </ul>
          <button 
            className="project-link-button"
            onClick={() => window.open('https://ugocapelle.github.io/P4.OC.Nina.Carducci/', '_blank', 'noopener,noreferrer')}
          >
            Lien vers le Github Page
          </button>
        </section>
        <section className="project-section bg-color-3">
          <h2>Mes compétences</h2>
          <p>Étant plus orienté vers le monde du frontend, je suis plus expérimenté sur ces technologies :</p>
          <div className="skills-container">
            <SkillCard image={htmlLogo} title="HTML5" />
            <SkillCard image={cssLogo} title="CSS3" />
            <SkillCard image={reactLogo} title="React" />
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default Portfolio;
