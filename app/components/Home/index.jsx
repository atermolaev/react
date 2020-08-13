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

    getData = async () => {
        let res = await axios.get('/data.json');
        this.setState({data: res.data});
    }

    render(){
        let { data } = this.state
        const itemStyle = {
            marginBottom: '20px',
        }

        return (
            <div>
                <div>Home. Список храмов Ростова-на-Дону.</div>                
                <div>{data.map((item) => {
                    return (<div style={itemStyle}>
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.address}</li>
                        </ul>
                    </div>)
                })}</div>
            </div>
        )
    }
}

export default Home