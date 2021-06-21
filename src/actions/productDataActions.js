export const updateProductData = (productData) => {
    return {
        type: 'PRODUCTDATA.UPDATE',
        payload: productData
    }
}