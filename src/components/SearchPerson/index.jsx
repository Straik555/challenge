import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {searchItem} from '../../actions';
import { bindActionCreators } from 'redux';

const Banner = styled.div`
    padding: 20px;
    padding-right: 32px;
    input{
        width: 100%;
        border-radius: 3px;
        border: 1px solid silver;
        padding: 5px;
    }
`;

const SearchPerson = ({onSeachPerson}) => {
    return (
        <Banner>
            <input type="text" placeholder='search' onChange={(e) => onSeachPerson(e.target.value)} />
        </Banner>
    )
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSeachPerson: searchItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPerson);