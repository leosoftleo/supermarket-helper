import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

import ToolBar from './ToolBar';
import Product from './Product';

export const ProductTable = () => {
    // get product data state
    const productData = useSelector(state => state.productData);

    // get product table data state
    const productTableData = useSelector(state => state.productTable);

    // get sort select state
    const sortSelect = useSelector(state => state.sortSelect);
    return (
        <>
            <ToolBar productData={productData} productTableData={productTableData} sortSelect={sortSelect} />
            <Table className='px-3'>
                <thead className='product-table'>
                    <tr>
                        <th>Brand</th>
                        <th>Name</th>
                        <th>Wellcome</th>
                        <th>PARKnSHOP</th>
                        <th>Market Place by Jasons</th>
                        <th>Watsons</th>
                        <th>AEON</th>
                        <th>DCH Food Mart</th>
                    </tr>
                </thead>
                <tbody>
                    {productTableData?.map((product, index) => <Product key={index} product={product} />)}
                </tbody>
            </Table>
        </>
    )
}

export default ProductTable;