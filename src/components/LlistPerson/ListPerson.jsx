import styled from "styled-components";
import ListPersonItem from "./ListPersonItem";
import React from "react";
import pt from 'prop-types';

const BannerUl = styled.div`
    ul{
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
        border: 1px solid silver;
        border-top: none;
    }
    li:hover{
        cursor: pointer;
        background: #eee;
    }
`;

export const ListPerson = ({people, newItem}) => {
    return (
        <BannerUl>
            <ul>
                {people.map(item => {
                    return (
                        <li key={item.id} onClick={() => newItem(item.id)}>
                            <ListPersonItem person={item}  />
                        </li>
                    )
                })}
            </ul>
        </BannerUl>
    )
}

ListPerson.propTypes = {
    people: pt.array,
    newItem: pt.func
}