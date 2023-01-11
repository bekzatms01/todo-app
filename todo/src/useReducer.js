const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return [
				...state,
				{
					id: state.length + 1,
					title: action.payload,
					complicated: false,
				},
			];
		case "delete":
			return state.filter((item) => item.id !== action.payload);
		case "done":
			return state.map((item) => {
				if (item.id === action.payload) {
					return { ...item, status: action.status };
				}
				return item;
			});
		default:
			return state;
	}
};

export default reducer;
