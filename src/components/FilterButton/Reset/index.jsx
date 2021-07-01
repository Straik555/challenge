import React from "react";
import {Icon} from "react-icons-kit";
import {powerOff} from 'react-icons-kit/fa/powerOff'
import styled from "styled-components";
import {filterButtonReset} from "../../../actions";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

const Banner = styled.button`
  width: 150px;
  height: 35px;
  font-size: 1rem;
  background: #e80000;
  margin: 0 10px 20px 0;
  border: 1px solid #e80000;
  border-radius: 5px;
  color: #ffffff;
  :hover{
    cursor: pointer;
    background: #c70000;
    border: 1px solid #c70000;
  }
`;

const Reset = ({resetClick}) => {
    return <Banner onClick={resetClick}><Icon icon={powerOff} />reset</Banner>
}

const mapStateToProps = () => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        resetClick: filterButtonReset
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);