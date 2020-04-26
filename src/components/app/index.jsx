import React, {useState} from 'react';
import styled, {css} from 'styled-components';


const RedClick = styled.div`
    text-align: center;
    ${({ theme }) => css`
    background-color: ${theme.color};
  `};
`;

const Button = styled.button`
    width: 200px;
    padding: 5px;
`;

const Span = styled.span`
    margin-left: 5px;
    font-style: italic;
`;
const TooButton = styled.button`
    margin-left: 5px;
    width: 200px;
    padding: 5px;
`
const App = () => {
    const [count, setCount] = useState(0);
    const [styl, setStyl] = useState(true);
   const trui = {
       color: 'red'
   }
    return (
            <RedClick theme={trui}>
                <Button onClick={() => setCount(count+1)}>Click</Button>
                <TooButton onClick={() => setStyl(!styl)}>Background</TooButton>
                <Span>{count}</Span>
            </RedClick>
    )
}

export default App;