import React from 'react';
import { useEffect, useState } from 'react';
import playerData from '../../FakeData/data.json';
import Person from '../Person/Person';
import Selection from '../Selection/Selection';
import './Players.css'
const Players = () => {
    const [player, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
    }, []);

    const [selection, setSelection] = useState([]);

    const handleSelection = (player) => {
        console.log('clicked', player);
        const newSelection = [...selection, player];
        setSelection(newSelection);

    }

    return (

        <div className="body-container d-flex bg-secondary">
            <div className="player-container p-2">
                <h3 className="section-heading">Available Players</h3>
                <div>
                    {
                        player.map(player => <Person 
                            handleSelection={handleSelection}
                            player={player} 
                            key={player.id}>
                            </Person>)
                    }
                </div>
            </div>
            
            
            <div className="selection-container p-2">
                <h3 className="section-heading">Player selection</h3>
                <Selection selection={selection}></Selection>
            </div>

        </div>
    );
};

export default Players;