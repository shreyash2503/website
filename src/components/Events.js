import React from 'react';
import Header from './Header';
import './Events.css'
import EventNavbar from './EventNavbar';
import AllEvents from './AllEvents';
import PastEvents from './PastEvents';
import UpcomingEvents from './UpcomingEvents';
import Ongoing from './Ongoing';
import { useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState(null);
    const handleClick = (e) => {
        console.log(e.target.id);
        setEvents(e.target.id);
    }
    return (
        <div className='main-container'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='eventsNavbar-container'>
                <EventNavbar handleClick={handleClick} />
            </div>
            <div className="card-container">
                {events === "all" ? <AllEvents /> : events === 'past' ? <PastEvents /> : events === 'upcoming' ? <UpcomingEvents /> : events === 'ongoing' ? <Ongoing /> : <AllEvents />}
            </div>
        </div>
    )
}

export default Events;