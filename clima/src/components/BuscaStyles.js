import styled from "styled-components";

export const BuscaContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-botom:20px;
`;

export const BuscaCidade = styled.input`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    font-size:16px;
    outline:none;
    width: 60%;
    margin-right: 10px;
    &:focus{
        border: 1px solid #007bff;
    }
`;

export const BotaoBuscar = styled.button`
    padding: 10px 15px;
    background-color: #007BFF;
    color:#FFF;
    border:none;
    border-radius:5px;
    &:hover {
        background-color: #0056b3;
    }
`;