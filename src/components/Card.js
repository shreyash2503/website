import React from 'react';
import './Card.css';
import { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const Card = ({ image, title, info }) => {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: { x: -100, y: 800, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: {}
    })
    useEffect(() => {
        setIsVisible(true)
        return () => {
            setIsVisible(false);
        }
    }, [isVisible])
    return (
        transition((style, item) => item && (
            <animated.div className='cards__container' style={style}>
                <ul className="cards">
                    <li>
                        <a href="" className="card">
                            <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                            <div className='card__info__container'>
                                <p className='card__info'>Hello! This is a Card Component</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </animated.div>
        )))
}

export default Card;