import React from "react";

function Card2(props) {
  return (
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src="https://masquerecuerdos.com/2472/camiseta-shin-chan.jpg" />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="/navbar">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
