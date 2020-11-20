import React, { Component } from 'react';

const API = 'https://swapi.dev/api/people/'

class StarWar extends Component {
    state = {  
        people: []
    }

    componentDidMount(){
        this.fetchStarWar()
    }

    fetchStarWar =()=>{
        fetch(API)
        // if promise fulfill then convert our response to json
        .then(res=>res.json())
        .then(data=>this.setState({people:data.results}))
        .catch(err => console.log(err))
    }
    render() { 
        return (  
            <ul>
                {this.state.people && this.state.people.map(person=> <li key={person.name}>{person.name}</li>)}
            </ul>
        );
    }
}

export default StarWar;