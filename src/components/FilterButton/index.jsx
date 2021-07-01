import React from 'react';
import styled from 'styled-components';

import SortAge from './SortAge';
import SortName from './SortName'
import Reset from "./Reset";

const Banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const FilterButton = () => {
    return (
        <Banner>
            <SortName />
            <SortAge />
            <Reset />
        </Banner>
    )
}

export default FilterButton;