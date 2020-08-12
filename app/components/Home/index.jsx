import React from 'react';
import axios from 'axios';
import 'babel-polyfill';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = async () => {
        let res = await axios.get('/data.json');
        this.setState({data: JSON.stringify(res.data)});
    }

    render(){
        let { data } = this.state

        return (
            <div>
                <div>Home</div>
                <div>{data}</div>
            </div>
        )
    }
}

export default Home