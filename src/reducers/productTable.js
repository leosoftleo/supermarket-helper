const productTableReducer = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCTTABLE.UPDATE':
            return action.payload;
        case 'PRODUCTTABLE.CLEAR':
            return [];
        default:
            return state;
    }
}

export default productTableReducer;