import React, { useReducer } from 'react';
import SportContext from './sportContext';
import uuid from 'uuid';
import sportReducer from './sportReducer';
import {
	ADD_PLAYER,
	DELETE_PLAYER,
	SET_CURRENT,
	UPDATE_PLAYER,
	FILTER_PLAYER,
	CLEAR_CURRENT,
	CLEAR_FILTER
} from './types';

const SportState = (props) => {
	const initialState = {
		players  : [],
		current  : null,
		filtered : null
	};

	const [
		state,
		dispatch
	] = useReducer(sportReducer, initialState);

	// Get Schedule
	const addPlayer = (player) => {
		player.id = uuid.v4();

		dispatch({
			type    : ADD_PLAYER,
			payload : player
		});
	};

	const deletePlayer = (id) => {
		dispatch({ type: DELETE_PLAYER, payload: id });
	};
	const setCurrent = (player) => {
		dispatch({ type: SET_CURRENT, payload: player });
	};

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const updatePlayer = (player) => {
		dispatch({ type: UPDATE_PLAYER, payload: player });
	};

	const filterPlayer = (text) => {
		dispatch({
			type    : FILTER_PLAYER,
			payload : text
		});
	};

	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<SportContext.Provider
			value={{
				players      : state.players,
				current      : state.current,
				filtered     : state.filtered,
				addPlayer,
				deletePlayer,
				setCurrent,
				clearCurrent,
				updatePlayer,
				filterPlayer,
				clearFilter
			}}
		>
			{props.children}
		</SportContext.Provider>
	);
};

export default SportState;
