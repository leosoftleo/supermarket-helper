import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';

import { updateProductTable } from './../../actions/productTableActions';
import { updateSortSelect } from './../../actions/sortSelectActions';
import { sortByName, sortByPriceLH, sortByPriceHL } from './../../helper/productData/productDataHelper';

export const SortSelect = ({ productTableData, sortSelect }) => {
    const dispatch = useDispatch();

    const onChange = () => {
        return (e) => {
            let val = e.target.value;
            let sortedData;
            dispatch(updateSortSelect(val));
            if (productTableData) {
                // sort the data according to the option
                switch (val) {
                    case 'Sort by Name':
                        sortedData = sortByName(productTableData);
                        break;
                    case 'Sort by Price (Low to High)':
                        sortedData = sortByPriceLH(productTableData);
                        break;
                    case 'Sort by Price (High to Low)':
                        sortedData = sortByPriceHL(productTableData);
                        break;
                    default:
                        break;
                }
                dispatch(updateProductTable(sortedData));
            }
        }
    }

    return (
        <Form.Group controlId='sorting' className='mr-sm-4 w-50'>
            <Form.Control as='select' value={sortSelect} onChange={onChange()} >
                <option>Sort by Name</option>
                <option>Sort by Price (Low to High)</option>
                <option>Sort by Price (High to Low)</option>
            </Form.Control>
        </Form.Group>
    )
}

export default SortSelect;