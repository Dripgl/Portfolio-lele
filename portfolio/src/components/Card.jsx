import React from 'react';
import '../styles/Card.css';

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <h3>Hover me</h3><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores sapiente non asperiores deleniti, quos eos placeat corrupti id consequatur ullam accusantium, nesciunt aut fugiat at ipsam harum eveniet dolore.</p>
          <div className="layers">
            {[...Array(10)].map((_, index) => (
              <div className="layer" key={index}></div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <h3>Hover me</h3><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores sapiente non asperiores deleniti, quos eos placeat corrupti id consequatur ullam accusantium, nesciunt aut fugiat at ipsam harum eveniet dolore.</p>
          <div className="layers">
            {[...Array(10)].map((_, index) => (
              <div className="layer" key={index}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
