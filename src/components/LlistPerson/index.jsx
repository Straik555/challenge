import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withPersonstoreService} from '../hoc';
import { fetchPeoples, peopleItem } from '../../actions';
import {bindActionCreators} from 'redux';
import {compose} from '../../utils'
import styled from 'styled-components';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import {ListPerson} from './ListPerson';

const Banner = styled.div`
    width: 100%;
    display: table;
`;

const BannerHeader = styled.div`
    border: 1px solid silver;
    border-bottom: 1.5px solid silver;
    height: 40px;  
`;

const BannerHeaderItem = styled.div`

    font-family: 'Bangers', cursive;
    table{
        width: 100%;
        padding: 5px 10px;
    }
    th{
        text-align: left;
    }
`;

class PersonListContainer extends Component{

    componentDidMount(){
        this.props.fetchPeoples();
    }

    
    render(){
        const {people, loading, error, newItem, search, filter} = this.props;
        const Error = error ? <ErrorIndicator /> : null;
        const Loading = loading ? <Spinner /> : null;
        const Cont = filter.length !== 0 ?
            <ListPerson people={filter} newItem={newItem} /> :
            search !== undefined && search.length !== 0 ?
                <ListPerson people={search} newItem={newItem} />  :
                <ListPerson people={people} newItem={newItem} />;
        return (
            <Banner>
                <BannerHeader>
                    <BannerHeaderItem>
                        <table>
                            <tbody>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Phone</th>
                            </tr>
                            </tbody>

                        </table>
                    </BannerHeaderItem>
                </BannerHeader>
                {Error}
                {Loading}
                {Cont}
            </Banner>
        )
    }
}

const mapStateToProps = ({peopleList: {people, loading, error}, selectedElement: {search, filter}}) => {
    return {people, loading, error, search, filter}
}

const mapDispatchToProps = (dispatch, {personstoreService}) => {
    return bindActionCreators({
        fetchPeoples: fetchPeoples(personstoreService),
        newItem: peopleItem
    }, dispatch)
}

export default compose(
    withPersonstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PersonListContainer);

PersonListContainer.propTypes = {
    people: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    search: PropTypes.array,
    filter: PropTypes.array,
    fetchPeoples: PropTypes.func.isRequired,
    newItem: PropTypes.func.isRequired
}
