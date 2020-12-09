import React from 'react';
import AboutCaico from '../../components/about-caico';
import Contact from '../../components/contact';
import Events from '../../components/events';
import History from '../../components/history';
import SlideHome from '../../components/slideHome';

import './styles.scss';

const Homepage = props => {
    return (
        <div className="homepage">
            <section id="slide">
                <SlideHome />
            </section>
            <section id="eventos">
                <Events />
            </section>
            <section id="historia">
                <History />
            </section>
            <section id="sobre">
                <AboutCaico />
            </section>
            <section id="contato">
                <Contact />
            </section>
        </div>
    );
};

export default Homepage;