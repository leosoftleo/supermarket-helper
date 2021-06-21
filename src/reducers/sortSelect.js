const sortSelectReducer = (state = 'Sort by Name', action) => {
    switch (action.type) {
        case 'SORTSELECT.UPDATE':
            return action.payload;
        default:
            return state;
    }
}

export default sortSelectReducer;