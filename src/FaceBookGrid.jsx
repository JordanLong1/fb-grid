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

    createCards() {
        return this.state.users.map(user => {
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


    render() {
        return (
            <div className='grid-container'>
            {this.createCards()}
            </div>
        );
    };
};

export default FaceBookGrid;