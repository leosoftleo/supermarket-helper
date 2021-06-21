export const filterProductByCategory = (products, catType, name, preCatTypes = {}) => {
    return products.filter((product) => {
        for (let cat in preCatTypes) {
            if (product[cat].en !== preCatTypes[cat]) {
                return false;
            }
        }
        return product[catType].en === name;
    })
}

export const sortByName = (products) => {
    return products.sort((a, b) => a.name.en.localeCompare(b.name.en));
}

// sort by price (Low to High)
export const sortByPriceLH = (products) => {
    return products.sort((a, b) => {
        return Math.min(...a.prices.map((price) => parseFloat(price.price))) - Math.min(...b.prices.map((price) => parseFloat(price.price)));
    });
}

// sort by price (High to Low)
export const sortByPriceHL = (products) => {
    return products.sort((a, b) => {
        return Math.max(...b.prices.map((price) => parseFloat(price.price))) - Math.max(...a.prices.map((price) => parseFloat(price.price)));
    });
}

// calculate total price according to lowest price
export const lowestPricesSum = (products) => {
    return products.reduce((sum, curr) => {
        return sum += Math.min(...curr.prices.map((price) => parseFloat(price.price)));
    }, 0);
}