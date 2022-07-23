import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-directions: column;
    margin: 5px 5px;
    padding: 5px;
    border: 2px solid #000;
    cursor: pointer;

    &:hover{
        background-color: #2a9d8f;
    }
`;