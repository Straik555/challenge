import React from 'react';
import styled, {css} from 'styled-components';
import Img from '../../assets/img/header/react.svg'
import style from '../style';
import PropTypes from 'prop-types';

const BannerContainer = styled.div`
  height: 367px;
  width: 100%;
  display: block;
  overflow: hidden;
  ${({backgroundColor}) => css`
      background-color: ${backgroundColor};
  `};
`;

const BannerImg = styled.div`
    width: 100px;
    height: 100px;
    margin: 30px auto;
    img{
        width: 100%;
    }
`;

const BannerText = styled.div`
    text-align: center;
    font-size: 3rem;
    font-family: 'Bangers', cursive;
    ${({color}) => css`
      color: ${color};
    `};
    p{
        margin-top: 40px;
        font-size: 1.2rem;
        font-family: 'Comic Neue', cursive;
    }
`;

const Header = () => {
    return (
        <BannerContainer backgroundColor={style.colors.darkBlue}>
            <BannerImg>
                <img src={Img} alt=""/>
            </BannerImg>
            <BannerText color={style.colors.grey}>
            React Challenge
            <p>Поиск и сортировка данных</p>
            </BannerText>
        </BannerContainer>
    )
}
export default Header;

