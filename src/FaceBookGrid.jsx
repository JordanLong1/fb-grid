import React from 'react'; 

class FaceBookGrid extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [], 
            input: ''
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api?results=100')
        .then(res => res.json())
        .then(res => this.setState({users: res.results}))
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    createCards() {
        return this.filterByusername().map(user => {
            return (
                <div key={user.login.username} className='each-box'>
                    <img src={user.picture.large} alt='Users' />
                    <ul>
                        <li>{user.login.username}</li>
                    </ul>
                </div>
            )
        })
    }

    filterByusername = () => {
        return this.state.users.filter(user => user.login.username.includes(this.state.input))
    }


    render() {
        return (
            <div className='container'>
            <div>
            <label htmlFor='input'>Search by username:</label>
            <input type='text' id='input' value={this.state.input} onChange={this.handleChange} />
            </div>
            <div className='grid-container'>

            {this.createCards()}
            </div>
            </div>
        );
    };
};

export default FaceBookGrid;