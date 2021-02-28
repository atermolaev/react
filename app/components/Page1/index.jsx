import React from 'react';
import { Button } from '@material-ui/core'

class Page1 extends React.Component {
    handleClick = () => {
        alert('click');
    }

    render(){
        return (<div>
            <div>Page1</div>
            <div><Button onClick={this.handleClick}>Запрос</Button></div>
        </div>)
    }
}

export default Page1