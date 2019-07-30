import React from 'react';
import Players from '../schedule/Players';
import PlayerForm from '../schedule/PlayerForm';

const Home = () => {
	return (
		<div className="grid-2">
			<div>
				{' '}
				<PlayerForm />{' '}
			</div>
			<div>
				<Players />
			</div>
		</div>
	);
};

export default Home;
