import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const AllEvents = () => {
    return (
        <>
            <Link to="/cardPage/1">
                <Card />
            </Link>
            <Link to="/cardPage/2" >
                <Card />
            </Link>
            <Link to="/cardPage/3" >
                <Card />
            </Link>
            <Link to="/cardPage/4">
                <Card />
            </Link>
        </>
    )
}

export default AllEvents;