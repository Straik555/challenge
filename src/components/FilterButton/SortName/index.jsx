import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {filterButtonName} from '../../../actions';
import {bindActionCreators} from "redux";

const Banner = styled.button`
  width: 150px;
  height: 35px;
  font-size: 1rem;
  background: transparent;
  margin: 0 0 20px 20px;
  border: 1px solid silver;
  border-radius: 5px;
  :hover{
    cursor: pointer;
    background: #eee;
  }
`;

const SortName = ({filter}) => {
    return <Banner onClick={filter}>sort name</Banner>
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        filter: filterButtonName
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortName);