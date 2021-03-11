import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    
    const {Age, contact, country, id, img, name, price} = props.player;

    return (
        <div className="player-profile">
            <div id="photo">
                <img src={img} alt=""/>
            </div>
            <h5>{name}</h5>
            <p>Rank: {id}</p>
            <p>Age: {Age}</p>
            <p>Country: {country}</p>
            <p>Contact: {contact}</p>
            <p><b>Salary: ${price}M</b></p>
            <button
            onClick={() => props.handleSelection(props.player)}
            ><FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
        </div>
    );
};

export default Person;