import React, { useContext, Fragment } from 'react';
import SportContext from '../Context/sportContext';
import PlayerItem from './PlayerItem';

const Players = () => {
	const sportContext = useContext(SportContext);

	const { players } = sportContext;

	if (players.length === 0) {
		return <h4>Please Add Player </h4>;
	}

	return <Fragment>{players.map((player) => <PlayerItem key={player.id} player={player} />)}</Fragment>;
};

export default Players;
