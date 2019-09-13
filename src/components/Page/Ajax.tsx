import axios from 'axios';
import React from 'react';


export default class PersonList extends React.Component {
    public state = {
        persons: []
    };

    public componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            const persons = res.data;
            this.setState({persons});
        })
    }

    public render() {
        return (
            <ul>
                {this.state.persons.map((person: { id: number, name: string }) => <li
                    key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}
