import React from 'react';
import { Button } from '@material-ui/core'

class Page1 extends React.Component {
    constructor(){
        super()

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        alert('click');
    }

    render(){
        return (<div style={{ marginLeft: '200px'}}>
            <div>Page1</div>
            <div><Button onClick={this.handleClick}>Запрос</Button></div>
        </div>)
    }
}

export default Page1