import React from 'react';
import styled from 'styled-components';
import pt from 'prop-types';

const BannerItem = styled.div`
    display: flex;   
    font-family: 'Source Code Pro', monospace;
    p{
        margin: auto;
        font-size: 1rem;
        font-weight: 500;
        float: left;
        width: 4%;
        text-align: left;
    }
    h5{
        margin: auto;
        font-size: 1rem;
        font-weight: 500;
        float: left;
        width: 12.2%;
        text-align: left;
    }
    h2{
        margin: auto;
        font-size: 1rem;
        font-weight: 500; 
        width: 20%;
    }
`;

const BannerImg = styled.div`
    width: 22%;
    img{
        padding: 10px;
        width: 80px;
    }
`;

const ListPersonItem = ({person}) => {
   // console.log('Person', person)
    const {name, age, phone, image} = person;
 //   console.log('NAME', name)
    return (
            <BannerItem>
                <BannerImg>
                    <img src={image} alt=""/>
                </BannerImg>
                    <h5>{name}</h5>
                    <p>{age}</p>
                    <h2>{phone}</h2>
            </BannerItem>
    )
}

export default ListPersonItem;

ListPersonItem.propTypes = {
    name: pt.array, 
    age: pt.string, 
    phone: pt.string, 
    image: pt.element
}