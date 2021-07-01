import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {filterButtonAge} from '../../../actions';

const Banner = styled.button`
  width: 150px;
  height: 35px;
  font-size: 1rem;
  background: transparent;
  margin: 0 10px 20px 10px;
  border: 1px solid silver;
  border-radius: 5px;
  :hover{
    cursor: pointer;
    background: #eee;
  }
`;

const SortAge = ({filter}) => {
    return <Banner onClick={filter}>sort age</Banner>
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filter: filterButtonAge
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortAge);
