import React from 'react';
import './CardPage.css';
import Video from '../assets/video.mp4';
import { useParams } from 'react-router-dom';
import { Data } from './Data';
import { useTransition, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

const CardPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, -50%, 0)' },
    });
    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, [isVisible]);
    const params = useParams();
    console.log(params);
    const { id } = params;
    const data = Data[id];
    console.log(data.title);
    return (
        transition((style, item) => item && (
            <animated.div className='cardPage__main__container' style={style}>
                <div className="cardPage__title__container">
                    <p className='cardPage__title'>This is the Title</p>
                </div>
                <div className="cardPage__eventInfo">
                    <div className="cardPage__eventInfo__container">
                        <h4>Event Name</h4>
                        <p>C++ Workshop</p>
                    </div>
                    <div className="cardPage__eventInfo__container">
                        <h4>Event Date</h4>
                        <p>2023</p>
                    </div>
                    <div className="cardPage__eventInfo__container">
                        <h4>Event Theme</h4>
                        <p>C++</p>
                    </div>
                </div>
                <div className="cardPage__video__container">
                    <video autoPlay muted loop={true} src={Video} height="70%" width="70%" typeof='video/mp4'></video>
                </div>
                <div className="cardPage__aboutEvent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis sunt est odio quam! Facilis qui
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum, deserunt reiciendis cumque, reprehenderit impedit possimus modi, id repellendus provident voluptates consequuntur
                        fuga laborum vel fugit culpa quaerat libero consequatur? Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nulla deserunt iusto facere eaque harum. Dolor aperiam unde tempora ratione facilis.
                        Beatae aliquam atque sunt dolore similique quo delectus illo.
                        repudiandae nisi aut? Doloremque numquam quo natus! Voluptate, libero autem dicta dignissimos odit delectus.</p>
                </div>
                <div className="cardPage__eventImages__title">
                    <p>Here are some of the Glimpses of the Event</p>
                </div>
                <div className="cardPage__eventImages">
                    <img src="https://i.imgur.com/oYiTqum.jpg" alt="Event Images" />
                    <img src="https://i.imgur.com/oYiTqum.jpg" alt="Event Images" />
                    <img src="https://i.imgur.com/oYiTqum.jpg" alt="Event Images" />
                    <img src="https://i.imgur.com/oYiTqum.jpg" alt="Event Images" />
                    <img src="https://i.imgur.com/oYiTqum.jpg" alt="Event Images" />
                    <img src="https://i.imgur.com/oYiTqum.jpg" alt="Event Images" />
                    <img src="https://i.imgur.com/oYiTqum.jpg" alt="Event Images" />
                </div>
            </animated.div>
        ))

    )
}

export default CardPage;  