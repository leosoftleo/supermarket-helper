export const updateProductTable = (filteredProductData) => {
    return {
        type: 'PRODUCTTABLE.UPDATE',
        payload: filteredProductData
    }
}

export const clearProductTable = () => {
    return {
        type: 'PRODUCTTABLE.CLEAR'
    }
}