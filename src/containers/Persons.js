import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersonHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPersonHandler: (name, age) => dispatch({ 
            type: 'ADD',
            personData: {
                name: name,
                age: age
            }}),
        onDeletePersonHandler: (id) => dispatch({
            type: 'DELETE',
            personElementId: id
        })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Persons);