import styled from "styled-components";


export const PaginatorWrap=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:8px;
margin-top:20px
`;
export const PaginatorBtn=styled.button`
width:12px;
height:12px;
border-radius:50%;
border:none;
background-color: ${(props)=>props.active ? "#E7F1ED" : "#59B17A"};

cursor:pointer;
transition: background-color0.3s ease;

&:hover{
background-color: ${(props)=>props.active ? "#59B17A" : "#E7F1ED"};
}
`;