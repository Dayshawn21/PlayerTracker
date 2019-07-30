import {
	ADD_PLAYER,
	DELETE_PLAYER,
	SET_CURRENT,
	CLEAR_FILTER,
	UPDATE_PLAYER,
	FILTER_PLAYER,
	CLEAR_CURRENT
} from './types';

export default (state, action) => {
	switch (action.type) {
		case ADD_PLAYER:
			return {
				...state,
				players : [
					...state.players,
					action.payload
				]
			};
		case UPDATE_PLAYER:
			return {
				...state,
				players : state.players.map((player) => (player.id === action.payload.id ? action.payload : player))
			};
		case DELETE_PLAYER:
			return {
				...state,
				players : state.players.filter((player) => player.id !== action.payload)
			};
		case SET_CURRENT:
			return {
				...state,
				current : action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current : null
			};
		case FILTER_PLAYER:
			return {
				...state,
				filtered : state.player.filter((player) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return player.name.match(regex) || player.postition.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered : null
			};

		default:
			return state;
	}
};
