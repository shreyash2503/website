import React from 'react';
import './EventNavbar.css';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';


const EventNavbar = ({ handleClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    });
    useEffect(() => {
        setIsVisible(true);
        return () => {
            setIsVisible(false);
        }

    }, [isVisible])
    return (
        transition((style, item) => item && (
            <animated.div className="event-navbar" style={style}>
                <span id="all" onClick={handleClick} >All</span>
                <div className="vertical" />
                <span id="upcoming" onClick={handleClick}>UpComing</span>
                <div className="vertical" />
                <span id="ongoing" onClick={handleClick}>Ongoing</span>
                <div className="vertical" />
                <span id="past" onClick={handleClick}>Past</span>
            </animated.div>
        )))
}
export default EventNavbar;