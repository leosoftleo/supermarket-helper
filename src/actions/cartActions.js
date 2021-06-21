export const addCart = (product) => {
    return {
        type: 'CART.ADD',
        payload: product
    }
}

export const deleteCart = (product) => {
    return {
        type: 'CART.DELETE',
        payload: product
    }
}

export const clearCart = () => {
    return {
        type: 'CART.CLEAR'
    }
}