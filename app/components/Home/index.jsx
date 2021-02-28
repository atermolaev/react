import React from 'react';
import axios from 'axios';
import 'babel-polyfill';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
    }

    render(){
        return (
            <div>
                <div>Home. Список храмов Ростова-на-Дону.</div>                
                <div>123</div>
            </div>
        )
    }
}

export default Home