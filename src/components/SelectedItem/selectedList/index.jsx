import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
min-width: 75%;
margin: 20px;
margin-top: 0;
padding: 15px;
border: 1px solid silver;
border-radius: 5px;
    li{
        list-style: none
    }
    img{
        width: 100%;
    }
    h2{
        text-align: center;
    }
    p{
        border-bottom: 1px solid silver;
    }
    i{
        margin-left: 10px;
        text-align: right;
    }
`;

const SelectedList = ({age, animal, image, name, phone, phrase}) => {
    return (
        <Banner>
                <img src={image} alt=""/>
                <h2>{name}</h2>
                <p>Age: <i>{age}</i></p>
                <p>Favorite animal: <i>{animal}</i></p>
                <p>Phone: <i>{phone}</i></p>
                <strong>Favorite phrase:</strong>
                {phrase}
        </Banner>
    )
}
export default SelectedList;