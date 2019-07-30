import React, { useState, useContext, useEffect } from 'react';
import SportContext from '../Context/sportContext';

const PlayerForm = () => {
	const sportContext = useContext(SportContext);
	const { addPlayer, updatePlayer, clearCurrent, current } = sportContext;
	useEffect(
		() => {
			if (current !== null) {
				setPlayer(current);
			}
			else {
				setPlayer({
					name     : '',
					team     : '',
					position : 'QB'
				});
			}
		},
		[
			sportContext,
			current
		]
	);

	const [
		player,
		setPlayer
	] = useState({
		name     : '',

		team     : '',
		sport    : '',
		position : ''
	});

	const { name, sport, positions, team } = player;

	const onChange = (e) => setPlayer({ ...player, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addPlayer(player);
		}
		else {
			updatePlayer(player);
		}
		setPlayer({
			name     : '',

			team     : '',
			sport    : '',
			position : ''
		});
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary"> {current ? 'Edit Player' : 'Add Player'} </h2>
			<input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />

			<input type="text" placeholder="Team" name="team" value={team} onChange={onChange} />
			<input type="text" placeholder="Sport" name="sport" value={sport} onChange={onChange} />

			<input type="text" placeholder="Position" name="position" value={positions} onChange={onChange} />
			<div>
				<input
					type="submit"
					value={current ? 'Update Player' : 'Add Player'}
					className="btn btn-primary btn-block"
				/>
			</div>
			{current && (
				<div>
					<button className="btn btn-light btn-block" onClick={clearAll}>
						{' '}
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default PlayerForm;
