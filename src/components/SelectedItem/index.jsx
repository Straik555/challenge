import React, {Component} from 'react';
import {connect} from 'react-redux';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import SelectedList from './selectedList';

class SelectedItem extends Component{
    
    render(){
        const {people, loading, error, peopleId, search, filter} = this.props;
        if(error){
            return <ErrorIndicator />
        }
        if(loading){
            return <Spinner />
        }
        if(peopleId !== undefined && peopleId.length !== 0){
            return (
                <SelectedList
                    key={peopleId.id}
                    age={peopleId.age}
                    animal={peopleId.animal}
                    image={peopleId.image}
                    name={peopleId.name}
                    phone={peopleId.phone}
                    phrase={peopleId.phrase}
                />
            )
        }
        if(filter.length !== 0){
            const x = filter.slice(0, 1);
            return x.map(i => {
                return (
                    <SelectedList
                        key={i.id}
                        age={i.age}
                        animal={i.animal}
                        image={i.image}
                        name={i.name}
                        phone={i.phone}
                        phrase={i.phrase}
                    />
                )
            });
        }
        if(search === undefined || search.length === 0){
            const x = people.slice(0, 1);
            return x.map(i => {
                return (
                    <SelectedList
                        age={i.age}
                        animal={i.animal}
                        image={i.image}
                        name={i.name}
                        phone={i.phone}
                        phrase={i.phrase}
                    />
                )
            });
        }
        if(search.length >= 1){
            const x = search.slice(0, 1);
            return x.map(i => {
                return (
                    <SelectedList
                        age={i.age}
                        animal={i.animal}
                        image={i.image}
                        name={i.name}
                        phone={i.phone}
                        phrase={i.phrase}
                    />
                )
            });
        }

    }
}

const mapStateToProps = ({peopleList: {people, loading, error}, selectedElement: {peopleId, search, filter}}) => {
    return {people, loading, error, peopleId, search, filter}
};

const mapDispatchToProps = () => {
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem);

SelectedItem.propTypes = {
    people: PropTypes.array.isRequired
}