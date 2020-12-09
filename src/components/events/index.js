import React from 'react';
import EventCard from './eventCard';

import './styles.scss';

const Events = () => {
    return (
        <div className="events">
            <h1>
                Eventos
            </h1>

            <ul>
                <li>
                    <EventCard name="Live" local="Youtube" />
                </li>
                <li>
                    <EventCard name="Live" local="Youtube" />
                </li>
                <li>
                    <EventCard name="Live" local="Youtube" />
                </li>
                <li>
                    <EventCard name="Live" local="Youtube" />
                </li>
            </ul>
        </div>
    );
}

export default Events;