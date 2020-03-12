import React from "react";

function Perfil(props) {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className="card-action">
          <a href="https://google.com">This is a link</a>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
