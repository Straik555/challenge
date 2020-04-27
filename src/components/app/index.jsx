import React from 'react';
import Header from '../header';
import ListPersonItem from '../listPerson/listPersonItem'
import styled from 'styled-components';

const Lis = styled.div`
    width: 80%;

`;

const List = styled.div`
    width: 20%;
    float: left;
`;

const Cont = styled.div`
    width: 100%;
    display: flex;
`;

const App = () => {
    
    return (
    <div>
        <Header /> 
        <Cont>
        <List>
            dddd
        </List>
        <Lis>
        <ListPersonItem />
        </Lis>
        </Cont>
    </div>
    )
}

export default App;