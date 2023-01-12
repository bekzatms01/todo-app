const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return [
				...state,
				{
					id: state.length + 1,
					title: action.act,
					status: action.status,
				},
			];

		case "done":
			return state.map((item) => {
				if (item.id === action.act) {
					return { ...item, status: action.status };
				}
				return item;
			});

		case "delete":
			return state.filter((item) => item.id !== action.act);

		default:
			return state;
	}
};

export default reducer;
