import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    width: 100%;
    display: table;

`;

const BannerHeader = styled.div`
    border: 1px solid silver;
    height: 40px;  
`;

const BannerHeaderItem = styled.div`
    font-family: 'Bangers', cursive;
    p{
        padding:5px 10px;
        margin: 0;
        font-size: 1.2rem;
        font-weight: 900;
        float: left;
        width: 12.5%;
    }
    h5{
        padding: 5px 10px;
        margin: 0;
        font-size: 1.2rem;
        font-weight: 900;
        float: left;
        width: 34.2%;
    }
`;

const ListPersonItem = () => {
    // const {name, age, phone, image} = person;
    return (
        <Banner>
            <BannerHeader>
                <BannerHeaderItem>
                    <p>Image</p>
                    <h5>Name</h5>
                    <p>Age</p>
                    <h5>Phone</h5>
                </BannerHeaderItem>
            </BannerHeader>
        </Banner>
    )
}

export default ListPersonItem;