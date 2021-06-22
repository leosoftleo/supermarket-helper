/* eslint-disable no-fallthrough */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Row } from 'react-bootstrap';

import { filterProductByCategory } from './../../helper/productData/productDataHelper';
import { updateProductTable, clearProductTable } from './../../actions/productTableActions';
import { updateSortSelect } from './../../actions/sortSelectActions';

export const CategorySelect = ({ productData }) => {
    const dispatch = useDispatch();

    // declare default category
    const DEFAULT_CAT_1 = 'Select Category 1';
    const DEFAULT_CAT_2 = 'Select Category 2';
    const DEFAULT_CAT_3 = 'Select Category 3';

    // get categories by category type, e.g. 1,2,3
    const getCategories = (catType, preCatTypes = {}) => {
        return (acc, val) => {
            for (let cat in preCatTypes) {
                if (val[cat].en !== preCatTypes[cat]) {
                    return acc;
                }
            }
            return !acc.includes(val[catType].en) ? [...acc, val[catType].en] : acc;
        }
    }

    // category on change event
    const onChange = (catType, newVal = null) => {
        return (e) => {
            // reset sort select
            dispatch(updateSortSelect('Sort by Name'));

            let val = newVal == null ? e.target.value : newVal;
            switch (catType) {
                case 'CAT3':
                    if (val === DEFAULT_CAT_3) {
                        // handle data according to category 2
                        val = catState.cat2.val;
                    } else {
                        // update product table
                        const filteredData = filterProductByCategory(productData, 'cat3Name', val, { cat1Name: catState.cat1.val, cat2Name: catState.cat2.val });
                        dispatch(updateProductTable(filteredData));
                        // update category 3 value
                        setCatState({ cat1: { ...catState.cat1 }, cat2: { ...catState.cat2 }, cat3: { ...catState.cat3, val: val } });
                        break;
                    }
                case 'CAT2':
                    if (val === DEFAULT_CAT_2) {
                        // handle data according to category 1
                        val = catState.cat1.val;
                    } else {
                        // update product table
                        const filteredData = filterProductByCategory(productData, 'cat2Name', val, { cat1Name: catState.cat1.val });
                        dispatch(updateProductTable(filteredData));
                        // set category 3 to be visible and update category 2 value
                        setCatState({ cat1: { ...catState.cat1 }, cat2: { ...catState.cat2, val: val }, cat3: { val: DEFAULT_CAT_3, show: true } });
                        break;
                    }
                case 'CAT1':
                    if (val === DEFAULT_CAT_1) {
                        // clear product table
                        dispatch(clearProductTable());
                        // set category 2 and 3 to be invisible
                        setCatState({ cat1: { ...catState.cat1, val: val }, cat2: { val: DEFAULT_CAT_2, show: false }, cat3: { val: DEFAULT_CAT_3, show: false } });
                    } else {
                        // update product table
                        const filteredData = filterProductByCategory(productData, 'cat1Name', val);
                        dispatch(updateProductTable(filteredData));
                        // set category 2 to be visible and category 3 to be invisible and update category 1 value
                        setCatState({ cat1: { ...catState.cat1, val: val }, cat2: { val: DEFAULT_CAT_2, show: true }, cat3: { val: DEFAULT_CAT_3, show: false } });
                        break;
                    }
                default:
                    break;
            }
        }
    }

    // declare category select state
    const [catState, setCatState] = useState({
        cat1: { val: DEFAULT_CAT_1, show: true },
        cat2: { val: DEFAULT_CAT_2, show: false },
        cat3: { val: DEFAULT_CAT_3, show: false }
    });

    return (
        <Form.Group as={Row} controlId='category' className='mr-sm-2 px-3 w-100'>
            <Form.Control as="select" className='mr-sm-2 w-auto' value={catState.cat1.val} onChange={onChange('CAT1')}>
                <option>{DEFAULT_CAT_1}</option>
                {productData.reduce(getCategories('cat1Name'), []).map((category, index) => <option key={index}>{category}</option>)}
            </Form.Control>
            {catState.cat2.show && <Form.Control as="select" className='mr-sm-2 w-auto' value={catState.cat2.val} onChange={onChange('CAT2')}>
                <option>{DEFAULT_CAT_2}</option>
                {productData.reduce(getCategories('cat2Name', { cat1Name: catState.cat1.val }), []).map((category, index) => <option key={index}>{category}</option>)}
            </Form.Control>}
            {catState.cat3.show && <Form.Control as="select" className='mr-sm-2 w-auto' value={catState.cat3.val} onChange={onChange('CAT3')}>
                <option>{DEFAULT_CAT_3}</option>
                {productData.reduce(getCategories('cat3Name', { cat1Name: catState.cat1.val, cat2Name: catState.cat2.val }), []).map((category, index) => <option key={index}>{category}</option>)}
            </Form.Control>}
        </Form.Group>
    )
}

export default CategorySelect;