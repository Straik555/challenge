import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ListPerson from '../LlistPerson'
import SelectedItem from '../SelectedItem';
import SearchPerson from '../SearchPerson';
import FilterButton from '../FilterButton';

const BlockRight = styled.div`
    width: 80%;
    padding-right: 20px;
    padding-bottom: 20px;
`;

const BlockLeft = styled.div`
    width: 20%;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
`;

const App = () => {
    return (
    <div>
        <Header />
        <SearchPerson />
        <FilterButton />
        <Container>
            <BlockLeft>
                <SelectedItem />
            </BlockLeft>
            <BlockRight>
                <ListPerson />
            </BlockRight>
        </Container>
    </div>
    )
}

export default App;