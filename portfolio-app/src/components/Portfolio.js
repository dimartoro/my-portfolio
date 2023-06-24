import React, { useState } from 'react';
import employeetracker from '../assets/images/EmployeeTracker.png'
import notetaker from '../assets/images/notetaker.png'
import scheduler from '../assets/images/scheduler.png'
import sidehustle from '../assets/images/sidehustle.png'
import wherewedranking from '../assets/images/WhereWeDranking.png'
import weather from '../assets/images/weather.png'
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Portfolio() {
  return (
    <section id="my-work" className="work grid-item-main">
      <div className="grid-container">
        <div className="grid-item">My Work</div>
        <div className="grid-item">
          <div className="grid-container-work">
            <div className="grid-item-work">
              <a href="https://side-hustle.herokuapp.com/" target="_blank">
                <div className="main-app-bk">
                    <img src={sidehustle}/>
                </div>
              </a>
            </div>
            <div className="grid-item-work">
              <a href="https://ch11-express-js-note-taker.herokuapp.com/" target="_blank">
                <div className="main-app-bk">
                    <img src={notetaker}/>
                </div>
              </a>
            </div>
            <div className="grid-item-work">
              <a href="https://github.com/dimartoro/ch12-sql-employee-tracker" target="_blank">
                <div className="main-app-bk">
                    <img src={employeetracker}/>
                </div>
              </a>
            </div>
            <div className="grid-item-work">
              <a href="https://dimartoro.github.io/what-to-do-and-where/" target="_blank">
                <div className="main-app-bk">
                    <img src={wherewedranking}/>
                </div>
              </a>
            </div>
            <div className="grid-item-work">
              <a href="https://dimartoro.github.io/ch5-work-day-scheduler/" target="_blank">
                <div className="main-app-bk">
                    <img src={scheduler}/>
                </div>
              </a>
            </div>
            <div className="grid-item-work">
              <a href="https://dimartoro.github.io/ch6-weather-dashboard/" target="_blank">
                <div className="main-app-bk">
                    <img src={weather}/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  
}


export default Portfolio;
