import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ toggleTheme }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <h1>Ugo Capelle</h1>
            <button onClick={toggleTheme}>🌞/🌙</button>
            <button
                onClick={() => console.log('Portfolio ouvert !')}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                }}
            >
                Ouvrir le Portfolio
            </button>
        </motion.div>
    );
};

export default Home;