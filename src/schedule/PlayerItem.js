import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SportContext from '../Context/sportContext';

const PlayerItem = ({ player }) => {
	const sportContext = useContext(SportContext);

	const { deletePlayer, setCurrent, clearCurrent } = sportContext;

	const { id, name, position, sport, team } = player;

	const onDelete = () => {
		deletePlayer(id);
		clearCurrent();
	};
	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name} {''} {position}
				<span style={{ float: 'right' }} />
			</h3>
			<ul className="list">
				{team && <li>{team}</li>}
				{sport && <li>{sport}</li>}
			</ul>
			<p>
				<button className="btn btn-dark btn-sm" onClick={() => setCurrent(player)}>
					Edit{' '}
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>
					Delete{' '}
				</button>
			</p>
		</div>
	);
};
PlayerItem.propTypes = {
	contact : PropTypes.object.isRequired
};

export default PlayerItem;
