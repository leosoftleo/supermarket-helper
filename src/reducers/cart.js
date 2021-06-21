const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'CART.ADD':
            return [...state, action.payload];
        case 'CART.DELETE':
            return state.filter((item) => item.data.code !== action.payload.code);
        case 'CART.CLEAR':
            return [];
        default:
            return state;
    }
}

export default cartReducer;