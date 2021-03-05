import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { moneyCourceRequest } from '../../ducks/page1/actions';

const handleClick = dispatch => () => {
    dispatch(moneyCourceRequest());
}

function Page1() {
    const dispatch = useDispatch();
    
    return (<div>
        <div>Page1</div>
        <div><Button onClick={handleClick(dispatch)}>Запрос</Button></div>
    </div>)
}


export default Page1