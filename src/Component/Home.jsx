import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    function handleChat(){
        navigate('/ChatBotHome')
    }
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title">Fruit.AI</h1>
        <p className="subtitle">"Be Healthy!"</p>
      </div>
      <div className="button-grid">
        <div className="button chat-button" onClick={handleChat}>Chat.</div>
        <div className="button translate-button">
          <img src="/google-icon.png" alt="Google Translate" />
        </div>
        <div className="button faqs-button">FAQs</div>
        <div className="button about-button">About</div>
      </div>
      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Home;
