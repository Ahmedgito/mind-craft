import React from 'react';
import styled from 'styled-components';
import Sbutton from './Sbutton.js';

const Card = ({ service, description, icon , href }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="heading">
          <img src={icon} alt={`${service} icon`} className="icon" />
        </div>
        <h3 className="service">{service}</h3>
        <p className="description">{description}</p>
        <div className="button-container">
          <Sbutton href={href} />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 254px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally */
    justify-content: space-between; /* Space between items */
    padding: 12px;
    gap: 0px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    margin: auto;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(-45deg, rgb(255, 255, 255) 0%,rgb(0, 85, 255) 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: '';
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, rgb(255, 255, 255) 0%,rgb(0, 29, 158) 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    display: flex;
    justify-content: center; /* Center icon horizontally */
    align-items: center; /* Center icon vertically */
    margin-bottom: 8px; /* Spacing below icon */

    .icon {
      width: 36px; /* Adjust size as needed */
      height: 36px; /* Adjust size as needed */
      object-fit: contain; /* Ensure aspect ratio */
    }
  }

  .service {
    font-size: 16px;
    margin: 0; /* Remove default margin */
    text-align: center; /* Center align text */
  }

  .description {
  
  color : #0048d9 ;
    font-size: 14px;
    margin:auto ;
  }

  .button-container {
    margin-top: auto; /* Push button to the bottom */
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;

export default Card;
