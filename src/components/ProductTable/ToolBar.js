import React from 'react';
import { Container, Form } from 'react-bootstrap';

import CategorySelect from './CategorySelect';
import SortSelect from './SortSelect';

export const ToolBar = ({ productData, productTableData, sortSelect }) => {
    return (
        <Container fluid className='mt-2'>
            <Form>
                <CategorySelect productData={productData} />
                <SortSelect productTableData={productTableData} sortSelect={sortSelect} />
            </Form>
        </Container>
    )
}

export default ToolBar;