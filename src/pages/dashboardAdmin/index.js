import React from "react";

import {
  FaCalendar,
  FaMapPin,
  FaNewspaper,
  FaBook,
  FaBroadcastTower,
  FaSlideshare,
} from "react-icons/fa";

import "./styles.scss";
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  return (
    <div className="dashAdmin">
      <h1>Dashboard</h1>
      <div className="wrap">
        <ul>
          <li>
            <Link to="/add-evento">
              <div className="icon">
                <h1>
                  <FaCalendar />
                </h1>
              </div>
              <div className="name">Adicionar Evento</div>
            </Link>
          </li>

          <li>
            <Link to="/add-lugar">
              <div className="icon">
                <h1>
                  <FaMapPin />
                </h1>
              </div>
              <div className="name">Adicionar Local</div>
            </Link>
          </li>

          <li>
            <Link to="/add-noticia">
              <div className="icon">
                <h1>
                  <FaNewspaper />
                </h1>
              </div>
              <div className="name">Adicionar Notícia</div>
            </Link>
          </li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <ul>
          <li>
            <Link to="/add-sobre">
              <div className="icon">
                <h1>
                  <FaBroadcastTower />
                </h1>
              </div>
              <div className="name">Adicionar Sobre Caicó</div>
            </Link>
          </li>

          <li>
            <Link to="/add-historia">
              <div className="icon">
                <h1>
                  <FaBook />
                </h1>
              </div>
              <div className="name">Adicionar História</div>
            </Link>
          </li>

          <li>
            <Link to="/add-slides">
              <div className="icon">
                <h1>
                  <FaSlideshare />
                </h1>
              </div>
              <div className="name">Adicionar Slide</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardAdmin;
