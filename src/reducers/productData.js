const productDataReducer = (state = null, action) => {
    switch (action.type) {
        case 'PRODUCTDATA.UPDATE':
            return action.payload;
        default:
            return state;
    }
}

export default productDataReducer;