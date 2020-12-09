import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const AboutCaico = () => {
    return (
        <div className="aboutCaico">
            <h1>
                Sobre Caicó
            </h1>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
            </p>

            <div className="btns">
                <ul>
                    <li>
                    <Link to="/">
                            Pontos turísiticos
                        </Link>
                    </li>
                    <li>
                    <Link to="/">
                            Bares
                        </Link>
                    </li>
                    <li>
                    <Link to="/">
                            Restaurantes
                        </Link>
                    </li>
                    <li>
                    <Link to="/">
                            Hoteis
                        </Link>
                    </li>
                </ul>
            
            </div>
            
        </div>
    );
}

export default AboutCaico;