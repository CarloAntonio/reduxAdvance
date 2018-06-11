import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    ageChangeHandler = (event) => {
        this.setState({ age: event.target.value });
    }

    render () {
        return (
            <div className="AddPerson">
                <input 
                    onChange={this.nameChangedHandler} 
                    type="text" 
                    placeholder="Name"/>
                <input 
                    onChange={this.ageChangeHandler} 
                    type="number"
                     placeholder="Age" />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;